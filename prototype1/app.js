// --- TRANSLATION DICTIONARY ---
const translations = {
    "en": {
        "pavis_portal": "PAVIS Portal",
        "login_sub": "Sign in to access the system",
        "email_lbl": "Email Address",
        "pwd_lbl": "Password",
        "btn_signin": "Sign In",
        "no_acc": "Don't have an account?",
        "btn_signup": "Sign up",
        "create_acc": "Create Account",
        "join_pavis": "Join PAVIS to start assessing",
        "fullname_lbl": "Full Name",
        "confirm_pwd": "Confirm Password",
        "has_acc": "Already have an account?",
        "btn_login": "Log in",
        "pavis_dash": "PAVIS Dashboard",
        "my_acc": "My Account",
        "logout": "Logout",
        "start_new": "Start New Screening",
        "follow_prompts": "Follow the prompts to record your respiratory patterns.",
        "begin_assess": "Begin Assessment",
        "cancel": "Cancel",
        "step_1": "Step 1 of 3",
        "rest_breath": "Resting Breath",
        "press_record": "Press record when ready.",
        "phase_1": "Phase 1",
        "out_text": "Output Text",
        "start_rec": "Start Recording",
        "cont_next": "Continue to Next Phase",
        "step_2": "Step 2 of 3",
        "deep_insp": "Deep Inspiration",
        "phase_2": "Phase 2",
        "step_3_hdr": "Step 3 of 3",
        "third_one": "Third One",
        "phase_3": "Phase 3",
        "proc_quest": "Proceed to Questionnaire",
        "patient_details": "Patient Details",
        "pair_visual": "Pair your visual assessment with these clinical details.",
        "age_lbl": "Age",
        "symptoms_lbl": "Current Symptoms",
        "submit_final": "Submit Final Assessment",
        "sign_out_all": "Sign Out of All Devices",
        "home_link": "Home",
        "recent_data": "Recent Assessment Data",
        "export_json": "Export JSON",
        "patient_name": "Patient Name",
        "sub_on": "Submitted on:",
        "results_title": "Results",
        "gold_1": "Gold I Risk:",
        "gold_2": "Gold II Risk:",
        "gold_3": "Gold III Risk:",
        "gold_4": "Gold IV Risk:",
        "rec_playbacks": "Recorded Playbacks",
        "phase_1_txt": "Phase 1: Lorem ipsum",
        "phase_2_txt": "Phase 2: Testing Text",
        "phase_3_txt": "Phase 3: Sample Text"
    },
    "th": {
        "pavis_portal": "พอร์ทัล PAVIS",
        "login_sub": "เข้าสู่ระบบเพื่อเข้าใช้งานระบบ",
        "email_lbl": "ที่อยู่อีเมล",
        "pwd_lbl": "รหัสผ่าน",
        "btn_signin": "เข้าสู่ระบบ",
        "no_acc": "ยังไม่มีบัญชีใช่ไหม?",
        "btn_signup": "สมัครสมาชิก",
        "create_acc": "สร้างบัญชี",
        "join_pavis": "เข้าร่วม PAVIS เพื่อเริ่มการประเมิน",
        "fullname_lbl": "ชื่อ-นามสกุล",
        "confirm_pwd": "ยืนยันรหัสผ่าน",
        "has_acc": "มีบัญชีอยู่แล้วใช่ไหม?",
        "btn_login": "เข้าสู่ระบบ",
        "pavis_dash": "แผงควบคุม PAVIS",
        "my_acc": "บัญชีของฉัน",
        "logout": "ออกจากระบบ",
        "start_new": "เริ่มการคัดกรองใหม่",
        "follow_prompts": "ทำตามคำแนะนำเพื่อบันทึกรูปแบบการหายใจของคุณ",
        "begin_assess": "เริ่มการประเมิน",
        "cancel": "ยกเลิก",
        "step_1": "ขั้นตอนที่ 1 จาก 3",
        "rest_breath": "การหายใจขณะพัก",
        "press_record": "กดบันทึกเมื่อพร้อม",
        "phase_1": "ระยะที่ 1",
        "out_text": "ข้อความผลลัพธ์",
        "start_rec": "เริ่มบันทึก",
        "cont_next": "ไปยังระยะถัดไป",
        "step_2": "ขั้นตอนที่ 2 จาก 3",
        "deep_insp": "การหายใจเข้าลึกๆ",
        "phase_2": "ระยะที่ 2",
        "step_3_hdr": "ขั้นตอนที่ 3 จาก 3",
        "third_one": "ขั้นตอนที่สาม",
        "phase_3": "ระยะที่ 3",
        "proc_quest": "ไปยังแบบสอบถาม",
        "patient_details": "ข้อมูลผู้ป่วย",
        "pair_visual": "จับคู่การประเมินทางสายตากับข้อมูลทางคลินิกนี้",
        "age_lbl": "อายุ",
        "symptoms_lbl": "อาการปัจจุบัน",
        "submit_final": "ส่งผลการประเมินขั้นสุดท้าย",
        "sign_out_all": "ออกจากระบบทุกอุปกรณ์",
        "home_link": "หน้าแรก",
        "recent_data": "ข้อมูลการประเมินล่าสุด",
        "export_json": "ส่งออก JSON",
        "patient_name": "ชื่อผู้ป่วย",
        "sub_on": "ส่งเมื่อ:",
        "results_title": "ผลลัพธ์",
        "gold_1": "ความเสี่ยง Gold I:",
        "gold_2": "ความเสี่ยง Gold II:",
        "gold_3": "ความเสี่ยง Gold III:",
        "gold_4": "ความเสี่ยง Gold IV:",
        "rec_playbacks": "วิดีโอที่บันทึกไว้",
        "phase_1_txt": "ระยะที่ 1: Lorem ipsum",
        "phase_2_txt": "ระยะที่ 2: Testing Text",
        "phase_3_txt": "ระยะที่ 3: Sample Text"
    }
};

// Language Application Logic
window.setLang = function(lang) {
    localStorage.setItem('pavis_lang', lang);
    applyLang();
};

function applyLang() {
    const lang = localStorage.getItem('pavis_lang') || 'en';
    
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update active button styles
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if(btn.dataset.lang === lang) {
            btn.classList.add('text-brand-600', 'font-bold');
            btn.classList.remove('text-slate-500');
        } else {
            btn.classList.remove('text-brand-600', 'font-bold');
            btn.classList.add('text-slate-500');
        }
    });
}

// Database Configuration
const DB_NAME = 'PavisSystemDB';
const DB_VERSION = 1;

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

const auth = {
    getCurrentUser() { return sessionStorage.getItem('pavis_active_user'); },
    requireLogin() { if (!this.getCurrentUser()) window.location.href = 'index.html'; },
    logout() { sessionStorage.removeItem('pavis_active_user'); window.location.href = 'index.html'; }
};

document.addEventListener('DOMContentLoaded', () => {
    // Apply language instantly on load
    applyLang();

    // --- 1. SIGNUP & LOGIN LOGIC ---
    const uiHelper = {
        showAlert(elementId, message, type = 'error') {
            const el = document.getElementById(elementId);
            if (!el) return;
            el.textContent = message;
            el.className = `mb-6 p-4 rounded-lg text-sm font-medium ${type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`;
            el.classList.remove('hidden');
        },
        hideAlert(elementId) {
            const el = document.getElementById(elementId);
            if (el) el.classList.add('hidden');
        }
    };

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        uiHelper.hideAlert('signupAlert');
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            uiHelper.hideAlert('signupAlert');
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) return uiHelper.showAlert('signupAlert', 'Passwords do not match. Please try again.', 'error');
            let users = JSON.parse(localStorage.getItem('pavis_users') || '[]');
            if (users.find(u => u.email === email)) return uiHelper.showAlert('signupAlert', 'This email is already registered. Please log in.', 'error');
            
            users.push({ name, email, password });
            localStorage.setItem('pavis_users', JSON.stringify(users));
            uiHelper.showAlert('signupAlert', 'Account created successfully! Redirecting to login...', 'success');
            setTimeout(() => { window.location.href = 'index.html'; }, 1500);
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
            
            if (!userAccount) return uiHelper.showAlert('loginAlert', 'Account does not exist. Please sign up first.', 'error');
            if (userAccount.password === password) {
                sessionStorage.setItem('pavis_active_user', userAccount.email);
                window.location.href = 'home.html';
            } else {
                uiHelper.showAlert('loginAlert', 'Incorrect password. Please try again.', 'error');
            }
        });
    }

    // --- 2. ACCOUNT LOGIC ---
    const accountDetails = document.getElementById('accountDetails');
    if (accountDetails) {
        auth.requireLogin();
        let users = JSON.parse(localStorage.getItem('pavis_users') || '[]');
        const user = users.find(u => u.email === auth.getCurrentUser());
        if(user) {
            document.getElementById('accName').textContent = user.name;
            document.getElementById('accEmail').textContent = user.email;
        }
    }

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
        const videoId = document.body.dataset.videoId;

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(stream => { videoElement.srcObject = stream; })
            .catch(err => alert("Camera access required for assessment."));

        recordBtn.addEventListener('click', () => {
            if (mediaRecorder && mediaRecorder.state === "recording") {
                mediaRecorder.stop();
                recordBtn.textContent = "Recording Saved!";
                recordBtn.classList.replace('bg-red-600', 'bg-green-600');
                recordBtn.disabled = true;
                document.getElementById('nextBtn').classList.remove('hidden');
                document.getElementById('recordingIndicator').classList.add('hidden');
            } else {
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
                video1: v1.data, video2: v2.data, video3: v3.data
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
                
                const latest = data[0];
                const v1Url = URL.createObjectURL(latest.video1);
                const v2Url = URL.createObjectURL(latest.video2);
                const v3Url = URL.createObjectURL(latest.video3);

                // Note: Notice the data-i18n tags injected directly here so they translate when generated
                resultsContainer.innerHTML = `
                    <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                        <div class="flex justify-between items-center mb-6">
                            <h2 class="text-2xl font-bold text-slate-900" data-i18n="recent_data">Recent Assessment Data</h2>
                            <button id="exportBtn" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors" data-i18n="export_json">Export JSON</button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div><span class="text-slate-500 text-sm block" data-i18n="patient_name">Patient Name</span><span class="font-medium text-lg">${latest.fullName}</span></div>
                            <div><span class="text-slate-500 text-sm block" data-i18n="age_lbl">Age</span><span class="font-medium text-lg">${latest.age}</span></div>
                            <div class="md:col-span-2"><span class="text-slate-500 text-sm block" data-i18n="symptoms_lbl">Symptoms</span><p class="font-medium text-slate-800 bg-slate-50 p-3 rounded-lg mt-1">${latest.symptoms}</p></div>
                            <div class="md:col-span-2"><span class="text-slate-400 text-xs"><span data-i18n="sub_on">Submitted on:</span> ${latest.timestamp}</span></div>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-2 border-t border-slate-100 pt-6" data-i18n="results_title">Results</h3>
                        <div class="text-lg text-slate-900 mb-2 pt-6"><span data-i18n="gold_1">Gold I Risk:</span> <b class="text-slate-700">temp%</b></div>
                        <div class="text-lg text-slate-900 mb-2 pt-6"><span data-i18n="gold_2">Gold II Risk:</span> <b class="text-slate-700">temp%</b></div>
                        <div class="text-lg text-slate-900 mb-2 pt-6"><span data-i18n="gold_3">Gold III Risk:</span> <b class="text-slate-700">temp%</b></div>
                        <div class="text-lg text-slate-900 mb-2 pt-6"><span data-i18n="gold_4">Gold IV Risk:</span> <b class="text-slate-700">temp%</b></div>
                        <h3 class="text-lg font-bold text-slate-900 mb-4 border-t border-slate-100 pt-6" data-i18n="rec_playbacks">Recorded Playbacks</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <span class="text-sm font-medium text-slate-600 mb-2 block" data-i18n="phase_1_txt">Phase 1: Lorem ipsum</span>
                                <video src="${v1Url}" controls class="w-full rounded-xl bg-black aspect-video"></video>
                            </div>
                            <div>
                                <span class="text-sm font-medium text-slate-600 mb-2 block" data-i18n="phase_2_txt">Phase 2: Testing Text</span>
                                <video src="${v2Url}" controls class="w-full rounded-xl bg-black aspect-video"></video>
                            </div>
                            <div>
                                <span class="text-sm font-medium text-slate-600 mb-2 block" data-i18n="phase_3_txt">Phase 3: Sample Text</span>
                                <video src="${v3Url}" controls class="w-full rounded-xl bg-black aspect-video"></video>
                            </div>
                        </div>
                        <div class="mt-8 pt-6 border-t border-slate-100 flex gap-4">
                            <a href="record1.html" class="px-4 py-2 text-sm text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors" data-i18n="start_new">Start New Assessment</a>
                        </div>
                    </div>
                `;
                
                // Call language apply again since we just inserted new HTML with i18n tags
                applyLang();

                document.getElementById('exportBtn').addEventListener('click', () => {
                    const exportData = { ...latest, video1: "binary_blob_omitted", video2: "binary_blob_omitted", video3: "binary-blob-omitted" };
                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
                    const dlAnchorElem = document.createElement('a');
                    dlAnchorElem.setAttribute("href", dataStr);
                    dlAnchorElem.setAttribute("download", `PAVIS_Assessment_${latest.id}.json`);
                    dlAnchorElem.click();
                });
            }
        };
        loadAssessments();
    }
});