// ==========================================
// Workout Data
// ==========================================
const workoutData = {
    monday: {
        title: "วันพัก",
        icon: "😴",
        rest: true,
        message: "Recovery Day - พักผ่อนให้เต็มที่",
    },
    tuesday: {
        title: "PUSH",
        subtitle: "อก, ไหล่, หลังแขน",
        icon: "💪",
        exercises: [
            { name: "DB Floor Press (นอนดันดัมเบล)", sets: "4 x 12-15", weight: "8kg หรือ 4.5kg", video: "https://www.youtube.com/watch?v=uUGDRwge4Fk" },
            { name: "DB Shoulder Press (ยืน/นั่งพื้น)", sets: "4 x 12-15", weight: "4.5-8kg", video: "https://www.youtube.com/watch?v=qEwKCR5-j_Q" },
            { name: "DB Front Raise (ไหล่หน้า/อกบน)", sets: "3 x 12-15", weight: "1-3kg", video: "https://www.youtube.com/watch?v=E-8E0s9N25I" },
            { name: "DB Lateral Raise (ยกไหล่ข้าง)", sets: "3 x 15-20", weight: "1-3kg", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
            { name: "DB Overhead Tricep Extension", sets: "4 x 12-15", weight: "DB 8kg 1 อัน", video: "https://www.youtube.com/watch?v=YbX7WdY6-0A" },
        ],
        cardio: "เดินเร็ว/วิ่งเหยาะๆ 20-30 นาที",
    },
    wednesday: {
        title: "PULL",
        subtitle: "หลัง, หน้าแขน",
        icon: "🏋️",
        exercises: [
            { name: "Barbell Bent Over Row", sets: "4 x 10-12", weight: "บาร์เบล 23kg", video: "https://www.youtube.com/watch?v=T2BYOgKcR-M" },
            { name: "DB Bent Over Row", sets: "3 x 12-15/ข้าง", weight: "DB 8kg", video: "https://www.youtube.com/watch?v=pYcpY20QaE8" },
            { name: "Superman (บริหารหลังล่าง)", sets: "3 x 15-20", weight: "ไม่ใช้น้ำหนัก", video: "https://www.youtube.com/watch?v=z6PJMT2y8GQ" },
            { name: "DB Bicep Curl (หน้าแขน)", sets: "4 x 10-12/ข้าง", weight: "DB 8kg", video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
            { name: "DB Hammer Curl", sets: "3 x 12-15/ข้าง", weight: "DB 8kg", video: "https://www.youtube.com/watch?v=zC3nLHv2hrQ" },
        ],
        cardio: "เดินเร็ว/วิ่งเหยาะๆ 20-30 นาที",
    },
    thursday: {
        title: "LEGS",
        subtitle: "ขา, สะโพก - เน้นความแข็งแรง",
        icon: "🦵",
        exercises: [
            { name: "Goblet Squat (สควอทถือดัมเบล)", sets: "4 x 10-12", weight: "DB 8kg ที่อก", video: "https://www.youtube.com/watch?v=X-i3f-9-I0I" },
            { name: "DB Walking Lunge (เดินย่อเข่า)", sets: "3 x 12/ข้าง", weight: "DB 8kg สองข้าง", video: "https://www.youtube.com/watch?v=QOVaHwm-Q6U" },
            { name: "Barbell Glute Bridge", sets: "4 x 12-15", weight: "บาร์เบล 23kg", video: "https://www.youtube.com/watch?v=Wv-0qcGHRbQ" },
            { name: "DB Calf Raise (เขย่งน่อง)", sets: "4 x 15-20", weight: "DB 8kg สองข้าง", video: "https://www.youtube.com/watch?v=YMmgqO8Jo-k" },
            { name: "Plank (แพลงก์)", sets: "3 x 45-60 วินาที", weight: "ไม่ใช้น้ำหนัก", video: "https://www.youtube.com/watch?v=TvxNkmjdhMM" },
        ],
        cardio: "เดินเร็ว/วิ่งเหยาะๆ 20-30 นาที",
    },
    friday: {
        title: "วันพัก",
        icon: "🧘",
        rest: true,
        message: "Recovery Day - ยืดเส้นยืดสายเบาๆ",
    },
    saturday: {
        title: "UPPER BODY",
        subtitle: "ร่างกายส่วนบน",
        icon: "💥",
        exercises: [
            { name: "Barbell Overhead Press", sets: "4 x 8-10", weight: "บาร์เบล 23kg", video: "https://www.youtube.com/watch?v=YJ-iVdb-02s" },
            { name: "Barbell Bent Over Row", sets: "4 x 10-12", weight: "บาร์เบล 23kg", video: "https://www.youtube.com/watch?v=T2BYOgKcR-M" },
            { name: "DB Floor Press (อก)", sets: "3 x 12-15", weight: "DB 8kg", video: "https://www.youtube.com/watch?v=uUGDRwge4Fk" },
            { name: "DB Bicep Curl", sets: "3 x 10-12", weight: "DB 8kg", video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
            { name: "DB Overhead Extension", sets: "3 x 12-15", weight: "DB 8kg 1 อัน", video: "https://www.youtube.com/watch?v=YbX7WdY6-0A" },
        ],
        cardio: "เดินเร็ว/วิ่งเหยาะๆ 20-30 นาที",
    },
    sunday: {
        title: "LOWER BODY",
        subtitle: "ขาหลัง, ก้น - เน้นโซนหลัง",
        icon: "🔥",
        exercises: [
            { name: "Barbell RDL (เดดลิฟท์ขาตึง)", sets: "4 x 10-12", weight: "บาร์เบล 23kg", video: "https://www.youtube.com/watch?v=Gg3nMYd2S4E" },
            { name: "Bulgarian Split Squat", sets: "3 x 8-10/ข้าง", weight: "DB 8kg หรือมือเปล่า", video: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },
            { name: "Barbell Hip Thrust", sets: "3 x 12-15", weight: "บาร์เบล 23kg", video: "https://www.youtube.com/watch?v=SEdqd1n0cvg" },
            { name: "Weighted Sit-up", sets: "3 x 12-15", weight: "กอดแผ่นน้ำหนัก/DB", video: "https://www.youtube.com/watch?v=jDwoBqPH0jk" },
            { name: "Side Plank (แพลงก์ข้าง)", sets: "3 x 30-45 วินาที/ข้าง", weight: "ไม่ใช้น้ำหนัก", video: "https://www.youtube.com/watch?v=K2VljzCC16g" },
        ],
        cardio: "เดินเร็ว/วิ่งเหยาะๆ 20-30 นาที",
    },
};

// Day mapping
const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const dayLabels = { 
    monday: "จ.", tuesday: "อ.", wednesday: "พ.", 
    thursday: "พฤ.", friday: "ศ.", saturday: "ส.", sunday: "อา." 
};

// ==========================================
// Global State
// ==========================================
let currentDay = "";
let completedExercises = {};
let workoutHistory = []; // Track workout dates
let timerInterval = null;
let timerSeconds = 90;
let timerRunning = false;
let timerDefaultSeconds = 90;

// ==========================================
// LocalStorage Functions
// ==========================================
function loadProgress() {
    try {
        const saved = localStorage.getItem("workoutProgress");
        if (saved) {
            completedExercises = JSON.parse(saved);
        }
        
        const history = localStorage.getItem("workoutHistory");
        if (history) {
            workoutHistory = JSON.parse(history);
        }
    } catch (e) {
        console.error("Error loading progress:", e);
        completedExercises = {};
        workoutHistory = [];
    }
}

function saveProgress() {
    try {
        localStorage.setItem("workoutProgress", JSON.stringify(completedExercises));
        localStorage.setItem("workoutHistory", JSON.stringify(workoutHistory));
    } catch (e) {
        console.error("Error saving progress:", e);
    }
    updateStats();
    updateDayButtons();
}

// ==========================================
// Toast Notification
// ==========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastMessage.textContent = message;
    toastIcon.textContent = type === 'success' ? '✓' : 'ℹ️';
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ==========================================
// Statistics
// ==========================================
function updateStats() {
    let totalWorkouts = 0;
    let totalExercises = 0;

    Object.keys(completedExercises).forEach((day) => {
        if (completedExercises[day] && completedExercises[day].length > 0) {
            const workout = workoutData[day];
            if (workout && !workout.rest && workout.exercises) {
                if (completedExercises[day].length === workout.exercises.length) {
                    totalWorkouts++;
                }
                totalExercises += completedExercises[day].length;
            }
        }
    });

    // Calculate current streak
    const streak = calculateStreak();

    document.getElementById("totalWorkouts").textContent = totalWorkouts;
    document.getElementById("totalExercises").textContent = totalExercises;
    document.getElementById("currentStreak").textContent = streak;
}

function calculateStreak() {
    // Simple streak calculation based on completed days this week
    let streak = 0;
    const workoutDays = ['tuesday', 'wednesday', 'thursday', 'saturday', 'sunday'];
    
    workoutDays.forEach(day => {
        const workout = workoutData[day];
        if (!workout.rest && completedExercises[day] && workout.exercises) {
            if (completedExercises[day].length === workout.exercises.length) {
                streak++;
            }
        }
    });
    
    return streak;
}

function showStats() {
    const modal = document.getElementById('statsModal');
    const content = document.getElementById('statsContent');
    
    // Calculate stats
    let totalWorkouts = 0;
    let totalExercises = 0;
    const dayStats = {};
    
    Object.keys(workoutData).forEach(day => {
        const workout = workoutData[day];
        if (!workout.rest) {
            const completed = completedExercises[day] ? completedExercises[day].length : 0;
            const total = workout.exercises.length;
            dayStats[day] = { completed, total, percentage: Math.round((completed / total) * 100) };
            
            if (completed === total) totalWorkouts++;
            totalExercises += completed;
        }
    });
    
    // Build stats HTML
    let html = `
        <div class="stats-row">
            <span class="label">วันที่ฝึกครบ</span>
            <span class="value">${totalWorkouts} วัน</span>
        </div>
        <div class="stats-row">
            <span class="label">ท่าที่ทำทั้งหมด</span>
            <span class="value">${totalExercises} ท่า</span>
        </div>
        <div class="stats-row">
            <span class="label">Streak ปัจจุบัน</span>
            <span class="value">${calculateStreak()} วัน</span>
        </div>
        
        <div class="weekly-chart">
            <h4>ความคืบหน้ารายวัน</h4>
            <div class="chart-bars">
    `;
    
    const chartDays = ['tuesday', 'wednesday', 'thursday', 'saturday', 'sunday'];
    chartDays.forEach(day => {
        const stat = dayStats[day] || { percentage: 0 };
        const height = Math.max(10, stat.percentage);
        const isCompleted = stat.percentage === 100;
        
        html += `
            <div class="chart-bar ${isCompleted ? 'completed' : ''}" style="height: ${height}%">
                <span class="bar-label">${dayLabels[day]}</span>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    content.innerHTML = html;
    modal.classList.add('show');
}

// ==========================================
// Day Buttons
// ==========================================
function updateDayButtons() {
    const today = new Date().getDay();
    const todayKey = dayNames[today];

    Object.keys(workoutData).forEach((day) => {
        const btn = document.querySelector(`[data-day="${day}"]`);
        if (!btn) return;
        
        const workout = workoutData[day];

        // Mark today
        btn.classList.toggle("today", day === todayKey);

        // Mark completed
        const isCompleted = !workout.rest && 
            completedExercises[day] && 
            workout.exercises &&
            completedExercises[day].length === workout.exercises.length;
        btn.classList.toggle("completed", isCompleted);
    });
}

// ==========================================
// Render Workout
// ==========================================
function renderWorkout(day) {
    currentDay = day;
    const workout = workoutData[day];
    const content = document.getElementById("workoutContent");

    if (!workout) {
        content.innerHTML = '<div class="loading">ไม่พบข้อมูล</div>';
        return;
    }

    // Rest Day
    if (workout.rest) {
        content.innerHTML = `
            <div class="workout-title">
                <div class="title-icon">${workout.icon}</div>
                <div class="title-text">
                    <span>${workout.title}</span>
                </div>
            </div>
            <div class="rest-day">
                <div class="rest-day-icon">${workout.icon}</div>
                <h3>${workout.message}</h3>
                <p>วันนี้เป็นวันพักฟื้นร่างกาย ให้กล้ามเนื้อได้ซ่อมแซมตัวเอง</p>
                <div class="rest-tips">
                    <h4>สิ่งที่ควรทำในวันพัก</h4>
                    <ul>
                        <li>ยืดเหยียดกล้ามเนื้อเบาๆ 10-15 นาที</li>
                        <li>ดื่มน้ำให้เพียงพอ 2-3 ลิตร</li>
                        <li>นอนหลับให้ครบ 7-8 ชั่วโมง</li>
                        <li>ทานอาหารที่มีโปรตีนสูง</li>
                    </ul>
                </div>
            </div>
        `;
        return;
    }

    // Initialize if not exists
    if (!completedExercises[day]) {
        completedExercises[day] = [];
    }

    const completed = completedExercises[day].length;
    const total = workout.exercises.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    // Get day number for workout days
    const workoutDayIndex = ['tuesday', 'wednesday', 'thursday', 'saturday', 'sunday'].indexOf(day);
    const dayNumber = workoutDayIndex >= 0 ? workoutDayIndex + 1 : '';

    let html = `
        <div class="workout-title">
            <div class="title-icon">${workout.icon}</div>
            <div class="title-text">
                <span>Day ${dayNumber}: ${workout.title}</span>
                <small>${workout.subtitle}</small>
            </div>
        </div>
    `;

    // Render Exercises
    workout.exercises.forEach((exercise, index) => {
        const isCompleted = completedExercises[day].includes(index);
        html += `
            <div class="exercise ${isCompleted ? "completed" : ""}" data-index="${index}">
                <div class="exercise-header">
                    <div class="exercise-info">
                        <span class="exercise-number">${index + 1}</span>
                        <span class="exercise-name">${exercise.name}</span>
                        <div class="exercise-sets">${exercise.sets} • ${exercise.weight}</div>
                    </div>
                    <button class="video-btn" data-video="${exercise.video}">
                        ▶ ดูวิดีโอ
                    </button>
                </div>
                <div class="exercise-footer">
                    <div class="checkbox-wrapper ${isCompleted ? 'checked' : ''}" data-index="${index}">
                        <div class="custom-checkbox">✓</div>
                        <span class="checkbox-label">${isCompleted ? 'เสร็จแล้ว' : 'ทำเสร็จแล้ว?'}</span>
                    </div>
                    <button class="start-timer-btn" data-seconds="90">⏱️ พัก 1:30</button>
                </div>
            </div>
        `;
    });

    // Cardio Section
    if (workout.cardio) {
        html += `
            <div class="cardio-section">
                <div class="cardio-icon">🏃‍♂️</div>
                <div class="cardio-info">
                    <h4>Cardio Session</h4>
                    <p>${workout.cardio}</p>
                </div>
            </div>
        `;
    }

    // Progress Bar
    html += `
        <div class="progress-section">
            <div class="progress-header">
                <span class="progress-title">ความคืบหน้าวันนี้</span>
                <span class="progress-count">${completed}/${total} ท่า (${percentage}%)</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
        </div>
    `;

    // Celebration
    if (percentage === 100) {
        html += `
            <div class="celebration">
                <div class="confetti">🎉🏆🎉</div>
                <h3>ยอดเยี่ยมมาก!</h3>
                <p>คุณทำครบทุกท่าวันนี้แล้ว! พักผ่อนให้ดีเพื่อเตรียมพร้อมวันต่อไป 💪</p>
            </div>
        `;
    }

    content.innerHTML = html;
    
    // Attach event listeners after rendering
    attachExerciseListeners();
}

// ==========================================
// Exercise Event Listeners
// ==========================================
function attachExerciseListeners() {
    // Checkbox click handlers
    document.querySelectorAll('.checkbox-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const index = parseInt(this.dataset.index);
            toggleExercise(index);
        });
    });
    
    // Video button handlers
    document.querySelectorAll('.video-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const videoUrl = this.dataset.video;
            playVideo(videoUrl);
        });
    });
    
    // Start timer button handlers
    document.querySelectorAll('.start-timer-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const seconds = parseInt(this.dataset.seconds) || 90;
            showTimerWithSeconds(seconds);
        });
    });
}

// ==========================================
// Toggle Exercise
// ==========================================
function toggleExercise(index) {
    if (!completedExercises[currentDay]) {
        completedExercises[currentDay] = [];
    }

    const exerciseIndex = completedExercises[currentDay].indexOf(index);
    
    if (exerciseIndex > -1) {
        // Remove from completed
        completedExercises[currentDay].splice(exerciseIndex, 1);
        showToast("ยกเลิกแล้ว", 'info');
    } else {
        // Add to completed
        completedExercises[currentDay].push(index);
        showToast("บันทึกแล้ว! 💪");
        
        // Check if all completed
        const workout = workoutData[currentDay];
        if (workout && workout.exercises && 
            completedExercises[currentDay].length === workout.exercises.length) {
            // All exercises completed!
            setTimeout(() => {
                showToast("🎉 ครบทุกท่าแล้ว! เยี่ยมมาก!");
            }, 500);
        }
    }

    saveProgress();
    renderWorkout(currentDay);
}

// ==========================================
// Video Functions
// ==========================================
function playVideo(videoUrl) {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");

    if (!videoUrl) return;

    let videoId = "";
    if (videoUrl.includes("youtube.com/watch?v=")) {
        videoId = videoUrl.split("watch?v=")[1].split("&")[0];
    } else if (videoUrl.includes("youtu.be/")) {
        videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
    } else if (videoUrl.includes("youtube.com/embed/")) {
        videoId = videoUrl.split("embed/")[1].split("?")[0];
    }

    if (videoId) {
        frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        modal.classList.add('show');
    }
}

function closeVideo() {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    frame.src = "";
    modal.classList.remove('show');
}

// ==========================================
// Reset Progress
// ==========================================
function resetProgress() {
    if (confirm("คุณแน่ใจหรือว่าต้องการรีเซ็ตความคืบหน้าทั้งหมด?\n\nข้อมูลทั้งหมดจะถูกลบและไม่สามารถกู้คืนได้!")) {
        completedExercises = {};
        workoutHistory = [];
        saveProgress();
        renderWorkout(currentDay);
        showToast("รีเซ็ตเรียบร้อยแล้ว");
    }
}

// ==========================================
// Timer Functions
// ==========================================
function showTimer() {
    document.getElementById('timerSection').classList.remove('hidden');
}

function hideTimer() {
    document.getElementById('timerSection').classList.add('hidden');
    stopTimer();
}

function showTimerWithSeconds(seconds) {
    timerDefaultSeconds = seconds;
    timerSeconds = seconds;
    updateTimerDisplay();
    
    // Update active quick timer button
    document.querySelectorAll('.quick-timer-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.seconds) === seconds);
    });
    
    showTimer();
}

function toggleTimer() {
    const btn = document.getElementById('timerStartBtn');
    
    if (timerRunning) {
        // Pause
        stopTimer();
        btn.textContent = '▶';
        btn.classList.remove('pause');
        btn.classList.add('start');
    } else {
        // Start
        timerRunning = true;
        btn.textContent = '⏸';
        btn.classList.remove('start');
        btn.classList.add('pause');
        
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            
            if (timerSeconds <= 0) {
                stopTimer();
                playAlarm();
                btn.textContent = '▶';
                btn.classList.remove('pause');
                btn.classList.add('start');
                timerSeconds = timerDefaultSeconds;
                updateTimerDisplay();
            }
        }, 1000);
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerRunning = false;
}

function resetTimer() {
    stopTimer();
    timerSeconds = timerDefaultSeconds;
    updateTimerDisplay();
    
    const btn = document.getElementById('timerStartBtn');
    btn.textContent = '▶';
    btn.classList.remove('pause');
    btn.classList.add('start');
}

function setTimerSeconds(seconds) {
    stopTimer();
    timerDefaultSeconds = seconds;
    timerSeconds = seconds;
    updateTimerDisplay();
    
    const btn = document.getElementById('timerStartBtn');
    btn.textContent = '▶';
    btn.classList.remove('pause');
    btn.classList.add('start');
    
    // Update active button
    document.querySelectorAll('.quick-timer-btn').forEach(b => {
        b.classList.toggle('active', parseInt(b.dataset.seconds) === seconds);
    });
}

function updateTimerDisplay() {
    const display = document.getElementById('timerDisplay');
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Warning state when low
    display.classList.toggle('warning', timerSeconds <= 5 && timerSeconds > 0);
}

function playAlarm() {
    showToast("⏰ หมดเวลาพัก! เริ่มเซ็ตต่อไปได้เลย");
    
    // Try to play sound
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.3;
        
        oscillator.start();
        
        setTimeout(() => {
            oscillator.stop();
        }, 200);
        
        // Beep twice more
        setTimeout(() => {
            const osc2 = audioContext.createOscillator();
            osc2.connect(gainNode);
            osc2.frequency.value = 800;
            osc2.type = 'sine';
            osc2.start();
            setTimeout(() => osc2.stop(), 200);
        }, 300);
        
        setTimeout(() => {
            const osc3 = audioContext.createOscillator();
            osc3.connect(gainNode);
            osc3.frequency.value = 1000;
            osc3.type = 'sine';
            osc3.start();
            setTimeout(() => osc3.stop(), 300);
        }, 600);
        
    } catch(e) {
        console.log("Audio not supported");
    }
    
    // Vibrate if supported
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 300]);
    }
}

// ==========================================
// Event Listeners Setup
// ==========================================
function setupEventListeners() {
    // Day selector buttons
    document.querySelectorAll(".day-btn").forEach((btn) => {
        btn.addEventListener("click", function() {
            document.querySelectorAll(".day-btn").forEach((b) => b.classList.remove("active"));
            this.classList.add("active");
            renderWorkout(this.dataset.day);
        });
    });
    
    // Timer toggle button
    document.getElementById('timerToggleBtn').addEventListener('click', showTimer);
    
    // Timer close button
    document.getElementById('timerCloseBtn').addEventListener('click', hideTimer);
    
    // Timer start/pause button
    document.getElementById('timerStartBtn').addEventListener('click', toggleTimer);
    
    // Timer reset button
    document.getElementById('timerResetBtn').addEventListener('click', resetTimer);
    
    // Quick timer buttons
    document.querySelectorAll('.quick-timer-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const seconds = parseInt(this.dataset.seconds);
            setTimerSeconds(seconds);
        });
    });
    
    // Export/Stats button
    document.getElementById('exportBtn').addEventListener('click', showStats);
    
    // Reset button
    document.getElementById('resetBtn').addEventListener('click', resetProgress);
    
    // Video modal close
    document.getElementById('videoCloseBtn').addEventListener('click', closeVideo);
    document.getElementById('videoModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeVideo();
        }
    });
    
    // Stats modal close
    document.getElementById('statsCloseBtn').addEventListener('click', function() {
        document.getElementById('statsModal').classList.remove('show');
    });
    document.getElementById('statsModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVideo();
            document.getElementById('statsModal').classList.remove('show');
        }
    });
}

// ==========================================
// Initialize App
// ==========================================
function init() {
    // Load saved progress
    loadProgress();
    
    // Setup all event listeners
    setupEventListeners();
    
    // Update stats display
    updateStats();
    
    // Update day button states
    updateDayButtons();
    
    // Auto-select today's workout
    const today = new Date().getDay();
    const todayKey = dayNames[today];
    const todayBtn = document.querySelector(`[data-day="${todayKey}"]`);
    
    if (todayBtn) {
        todayBtn.click();
    }
    
    console.log("Workout Tracker initialized!");
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}