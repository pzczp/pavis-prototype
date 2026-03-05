// Database Configuration
const DB_NAME = 'PavisSystemDB';
const DB_VERSION = 1;

// Helper to interact with IndexedDB
const getDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('assessments')) {
                db.createObjectStore('assessments', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('temp_videos')) {
                db.createObjectStore('temp_videos', { keyPath: 'id' });
            }
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
};

const dbHelper = {
    async save(storeName, data) {
        const db = await getDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(storeName, 'readwrite');
            const request = tx.objectStore(storeName).put(data);
            request.onsuccess = () => resolve();
            request.onerror = () => reject();
        });
    },
    async get(storeName, id) {
        const db = await getDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(storeName, 'readonly');
            const request = tx.objectStore(storeName).get(id);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject();
        });
    },
    async getAllByUser(email) {
        const db = await getDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction('assessments', 'readonly');
            const request = tx.objectStore('assessments').getAll();
            request.onsuccess = () => {
                const all = request.result || [];
                resolve(all.filter(a => a.userEmail === email).sort((a, b) => b.id - a.id));
            };
            request.onerror = () => reject();
        });
    },
    async delete(storeName, id) {
        const db = await getDB();
        const tx = db.transaction(storeName, 'readwrite');
        tx.objectStore(storeName).delete(id);
    }
};

// Auth System
const auth = {
    getCurrentUser() { return sessionStorage.getItem('pavis_active_user'); },
    requireLogin() { if (!this.getCurrentUser()) window.location.href = 'index.html'; },
    logout() { sessionStorage.removeItem('pavis_active_user'); window.location.href = 'index.html'; }
};

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SIGNUP & LOGIN LOGIC ---
    // --- UI Helper for Alerts ---
    const uiHelper = {
        showAlert(elementId, message, type = 'error') {
            const el = document.getElementById(elementId);
            if (!el) return;
            el.textContent = message;
            el.className = `mb-6 p-4 rounded-lg text-sm font-medium ${
                type === 'error' 
                ? 'bg-red-50 text-red-700 border border-red-200' 
                : 'bg-green-50 text-green-700 border border-green-200'
            }`;
            el.classList.remove('hidden');
        },
        hideAlert(elementId) {
            const el = document.getElementById(elementId);
            if (el) el.classList.add('hidden');
        }
    };

    // --- 1. SIGNUP & LOGIN LOGIC ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        // If coming from login with a success message, we don't need it here, but good practice
        uiHelper.hideAlert('signupAlert');

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            uiHelper.hideAlert('signupAlert');

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validation: Check if passwords match
            if (password !== confirmPassword) {
                return uiHelper.showAlert('signupAlert', 'Passwords do not match. Please try again.', 'error');
            }

            let users = JSON.parse(localStorage.getItem('pavis_users') || '[]');
            
            // Validation: Check if email exists
            if (users.find(u => u.email === email)) {
                return uiHelper.showAlert('signupAlert', 'This email is already registered. Please log in.', 'error');
            }
            
            // Success: Save user and redirect
            users.push({ name, email, password });
            localStorage.setItem('pavis_users', JSON.stringify(users));
            
            uiHelper.showAlert('signupAlert', 'Account created successfully! Redirecting to login...', 'success');
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500); // Brief delay so they can read the success message
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        uiHelper.hideAlert('loginAlert');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            uiHelper.hideAlert('loginAlert');

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            
            let users = JSON.parse(localStorage.getItem('pavis_users') || '[]');
            const userAccount = users.find(u => u.email === email);
            
            // Validation: Reject if the account doesn't exist
            if (!userAccount) {
                return uiHelper.showAlert('loginAlert', 'Account does not exist. Please sign up first.', 'error');
            }
            
            // Validation: Check password
            if (userAccount.password === password) {
                // Success
                sessionStorage.setItem('pavis_active_user', userAccount.email);
                window.location.href = 'home.html';
            } else {
                // Reject if the password is wrong
                uiHelper.showAlert('loginAlert', 'Incorrect password. Please try again.', 'error');
            }
        });
    }

    // --- 2. ACCOUNT LOGIC ---
    const accountDetails = document.getElementById('accountDetails');
    if (accountDetails) {
        auth.requireLogin();
        const currentUserEmail = auth.getCurrentUser();
        let users = JSON.parse(localStorage.getItem('pavis_users') || '[]');
        const user = users.find(u => u.email === currentUserEmail);
        
        if(user) {
            document.getElementById('accName').textContent = user.name;
            document.getElementById('accEmail').textContent = user.email;
        }
    }

    // Logout Buttons
    document.querySelectorAll('.logout-btn').forEach(btn => {
        btn.addEventListener('click', (e) => { e.preventDefault(); auth.logout(); });
    });

    // --- 3. VIDEO RECORDING LOGIC ---
    const videoElement = document.getElementById('cameraFeed');
    const recordBtn = document.getElementById('recordBtn');
    let mediaRecorder;
    let recordedChunks = [];

    if (videoElement && recordBtn) {
        auth.requireLogin();
        const videoId = document.body.dataset.videoId; // 'video1' or 'video2'

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(stream => { videoElement.srcObject = stream; })
            .catch(err => alert("Camera access required for assessment."));

        recordBtn.addEventListener('click', () => {
            if (mediaRecorder && mediaRecorder.state === "recording") {
                // Stop Recording
                mediaRecorder.stop();
                recordBtn.textContent = "Recording Saved! Click Next.";
                recordBtn.classList.replace('bg-red-600', 'bg-green-600');
                recordBtn.disabled = true;
                document.getElementById('nextBtn').classList.remove('hidden');
                document.getElementById('recordingIndicator').classList.add('hidden');
            } else {
                // Start Recording
                const stream = videoElement.srcObject;
                mediaRecorder = new MediaRecorder(stream);
                recordedChunks = [];
                
                mediaRecorder.ondataavailable = e => { if (e.data.size > 0) recordedChunks.push(e.data); };
                mediaRecorder.onstop = async () => {
                    const blob = new Blob(recordedChunks, { type: 'video/webm' });
                    await dbHelper.save('temp_videos', { id: videoId, data: blob });
                };

                mediaRecorder.start();
                recordBtn.textContent = "Stop Recording";
                recordBtn.classList.replace('bg-brand-600', 'bg-red-600');
                document.getElementById('recordingIndicator').classList.remove('hidden');
            }
        });
    }

    // --- 4. FORM SUBMISSION ---
    const assessmentForm = document.getElementById('assessmentForm');
    if (assessmentForm) {
        auth.requireLogin();
        assessmentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Fetch recorded videos
            const v1 = await dbHelper.get('temp_videos', 'video1');
            const v2 = await dbHelper.get('temp_videos', 'video2');
            const v3 = await dbHelper.get('temp_videos', 'video3');

            if (!v1 || !v2 || !v3) return alert("Missing video recordings. Please restart the assessment.");

            const formData = {
                id: Date.now(),
                userEmail: auth.getCurrentUser(),
                fullName: document.getElementById('fullName').value,
                age: document.getElementById('age').value,
                symptoms: document.getElementById('symptoms').value,
                timestamp: new Date().toLocaleString(),
                video1: v1.data,
                video2: v2.data,
                video3: v3.data
            };

            await dbHelper.save('assessments', formData);
            await dbHelper.delete('temp_videos', 'video1');
            await dbHelper.delete('temp_videos', 'video2');
            await dbHelper.delete('temp_videos', 'video3');
            
            window.location.href = 'home.html';
        });
    }

    // --- 5. DISPLAY RESULTS & EXPORT ---
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer) {
        auth.requireLogin();
        const loadAssessments = async () => {
            const data = await dbHelper.getAllByUser(auth.getCurrentUser());
            if (data.length > 0) {
                document.getElementById('welcomeInstructions').classList.add('hidden');
                resultsContainer.classList.remove('hidden');
                
                // Show only the most recent one for simplicity
                const latest = data[0];
                const v1Url = URL.createObjectURL(latest.video1);
                const v2Url = URL.createObjectURL(latest.video2);
                const v3Url = URL.createObjectURL(latest.video3);
                const g1risk = "temp";
                const g2risk = "temp";
                const g3risk = "temp";
                const g4risk = "temp";

                resultsContainer.innerHTML = `
                    <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                        <div class="flex justify-between items-center mb-6">
                            <h2 class="text-2xl font-bold text-slate-900">Recent Assessment Data</h2>
                            <button id="exportBtn" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors">Export JSON</button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div><span class="text-slate-500 text-sm block">Patient Name</span><span class="font-medium text-lg">${latest.fullName}</span></div>
                            <div><span class="text-slate-500 text-sm block">Age</span><span class="font-medium text-lg">${latest.age}</span></div>
                            <div class="md:col-span-2"><span class="text-slate-500 text-sm block">Symptoms</span><p class="font-medium text-slate-800 bg-slate-50 p-3 rounded-lg mt-1">${latest.symptoms}</p></div>
                            <div class="md:col-span-2"><span class="text-slate-400 text-xs">Submitted on: ${latest.timestamp}</span></div>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-2 border-t border-slate-100 pt-6">Results</h3>
                        <div class="text-lg text-slate-900 mb-2 pt-6">Gold I Risk: <b class="text-slate-700">${g1risk}%</b></div>
                        <div class="text-lg text-slate-900 mb-2 pt-6">Gold II Risk: <b class="text-slate-700">${g2risk}%</b></div>
                        <div class="text-lg text-slate-900 mb-2 pt-6">Gold III Risk: <b class="text-slate-700">${g3risk}%</b></div>
                        <div class="text-lg text-slate-900 mb-2 pt-6">Gold IV Risk: <b class="text-slate-700">${g4risk}%</b></div>
                        <h3 class="text-lg font-bold text-slate-900 mb-4 border-t border-slate-100 pt-6">Recorded Playbacks</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <span class="text-sm font-medium text-slate-600 mb-2 block">Phase 1: Lorem ipsum</span>
                                <video src="${v1Url}" controls class="w-full rounded-xl bg-black aspect-video"></video>
                            </div>
                            <div>
                                <span class="text-sm font-medium text-slate-600 mb-2 block">Phase 2: Testing Text</span>
                                <video src="${v2Url}" controls class="w-full rounded-xl bg-black aspect-video"></video>
                            </div>
                            <div>
                                <span class="text-sm font-medium text-slate-600 mb-2 block">Phase 3: Sample Text</span>
                                <video src="${v3Url}" controls class="w-full rounded-xl bg-black aspect-video"></video>
                            </div>
                        </div>

                        <div class="mt-8 pt-6 border-t border-slate-100 flex gap-4">
                            <a href="record1.html" class="px-4 py-2 text-sm text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors">Start New Assessment</a>
                        </div>
                    </div>
                `;

                // Export Functionality
                document.getElementById('exportBtn').addEventListener('click', () => {
                    // Remove blob references for text export
                    const exportData = { ...latest, video1: "binary_blob_omitted", video2: "binary_blob_omitted", video3: "binary-blob-omitted" };
                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
                    const dlAnchorElem = document.createElement('a');
                    dlAnchorElem.setAttribute("href",     dataStr     );
                    dlAnchorElem.setAttribute("download", `PAVIS_Assessment_${latest.id}.json`);
                    dlAnchorElem.click();
                });
            }
        };
        loadAssessments();
    }
});