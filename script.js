// Workout Data
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

// Global Variables
let currentDay = "";
let completedExercises = {};
let timerInterval = null;
let timerSeconds = 90;
let timerRunning = false;

// Load Progress from LocalStorage
function loadProgress() {
    const saved = localStorage.getItem("workoutProgress");
    if (saved) {
        completedExercises = JSON.parse(saved);
    }
}

// Save Progress to LocalStorage
function saveProgress() {
    localStorage.setItem("workoutProgress", JSON.stringify(completedExercises));
    updateStats();
    updateDayButtons();
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Update Statistics
function updateStats() {
    let totalWorkouts = 0;
    let totalExercises = 0;

    Object.keys(completedExercises).forEach((day) => {
        if (completedExercises[day] && completedExercises[day].length > 0) {
            const workout = workoutData[day];
            if (!workout.rest && completedExercises[day].length === workout.exercises.length) {
                totalWorkouts++;
            }
            totalExercises += completedExercises[day].length;
        }
    });

    document.getElementById("totalWorkouts").textContent = totalWorkouts;
    document.getElementById("totalExercises").textContent = totalExercises;
    document.getElementById("weekStreak").textContent = Math.floor(totalWorkouts / 5);
}

// Update Day Buttons (Show completed checkmark and today indicator)
function updateDayButtons() {
    const today = new Date().getDay();
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const todayKey = days[today];

    Object.keys(workoutData).forEach((day) => {
        const btn = document.querySelector(`[data-day="${day}"]`);
        const workout = workoutData[day];

        // Mark today
        if (day === todayKey) {
            btn.classList.add("today");
        } else {
            btn.classList.remove("today");
        }

        // Mark completed
        if (!workout.rest && completedExercises[day] && completedExercises[day].length === workout.exercises.length) {
            btn.classList.add("completed");
        } else {
            btn.classList.remove("completed");
        }
    });
}

// Render Workout
function renderWorkout(day) {
    currentDay = day;
    const workout = workoutData[day];
    const content = document.getElementById("workoutContent");

    // Rest Day
    if (workout.rest) {
        content.innerHTML = `
            <div class="workout-title">
                <div class="title-icon">${workout.icon}</div>
                <span>${workout.title}</span>
            </div>
            <div class="rest-day">
                <div class="rest-day-icon">${workout.icon}</div>
                <h3>${workout.message}</h3>
                <p>วันนี้เป็นวันพักฟื้นร่างกาย ให้กล้ามเนื้อได้ซ่อมแซมตัวเอง</p>
                <div class="rest-tips">
                    <h4>💡 สิ่งที่ควรทำในวันพัก</h4>
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

    let html = `
        <div class="workout-title">
            <div class="title-icon">${workout.icon}</div>
            <div>
                <span>Day ${['tuesday', 'wednesday', 'thursday', 'saturday', 'sunday'].indexOf(day) + 1}: ${workout.title}</span>
                <small style="display: block; color: var(--text-secondary); font-size: 0.6em; font-weight: 400;">${workout.subtitle}</small>
            </div>
        </div>
    `;

    // Render Exercises
    workout.exercises.forEach((exercise, index) => {
        const isCompleted = completedExercises[day].includes(index);
        html += `
            <div class="exercise ${isCompleted ? "completed" : ""}" id="exercise-${index}">
                <div class="exercise-header">
                    <div class="exercise-info">
                        <span class="exercise-number">${index + 1}</span>
                        <span class="exercise-name">${exercise.name}</span>
                        <div class="exercise-sets">${exercise.sets} • ${exercise.weight}</div>
                    </div>
                    <button class="video-btn" onclick="playVideo('${exercise.video}')">
                        ▶ ดูวิดีโอ
                    </button>
                </div>
                <div class="exercise-footer">
                    <label class="checkbox-container" onclick="toggleExercise(${index})">
                        <input type="checkbox" ${isCompleted ? "checked" : ""}>
                        <div class="custom-checkbox">✓</div>
                        <span class="checkbox-label">เสร็จแล้ว</span>
                    </label>
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
}

// Toggle Exercise Completion
function toggleExercise(index) {
    if (!completedExercises[currentDay]) {
        completedExercises[currentDay] = [];
    }

    const exerciseIndex = completedExercises[currentDay].indexOf(index);
    if (exerciseIndex > -1) {
        completedExercises[currentDay].splice(exerciseIndex, 1);
        showToast("ยกเลิกการทำเสร็จ");
    } else {
        completedExercises[currentDay].push(index);
        showToast("บันทึกแล้ว! 💪");
    }

    saveProgress();
    renderWorkout(currentDay);
}

// Play Video
function playVideo(videoUrl) {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");

    let videoId = "";
    if (videoUrl.includes("youtube.com/watch?v=")) {
        videoId = videoUrl.split("watch?v=")[1].split("&")[0];
    } else if (videoUrl.includes("youtu.be/")) {
        videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
    } else if (videoUrl.includes("youtube.com/embed/")) {
        videoId = videoUrl.split("embed/")[1].split("?")[0];
    }

    frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    modal.style.display = "flex";
}

// Close Video
function closeVideo() {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    frame.src = "";
    modal.style.display = "none";
}

// Reset Progress
function resetProgress() {
    if (confirm("คุณแน่ใจหรือว่าต้องการรีเซ็ตความคืบหน้าทั้งหมด?\n\nข้อมูลทั้งหมดจะถูกลบ!")) {
        completedExercises = {};
        saveProgress();
        renderWorkout(currentDay);
        showToast("รีเซ็ตเรียบร้อย");
    }
}

// Timer Functions
function showTimer() {
    document.getElementById('timerSection').classList.remove('hidden');
}

function hideTimer() {
    document.getElementById('timerSection').classList.add('hidden');
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
    }
}

function toggleTimer() {
    const btn = document.getElementById('timerStartBtn');
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        btn.textContent = '▶';
        btn.classList.remove('pause');
        btn.classList.add('start');
    } else {
        timerRunning = true;
        btn.textContent = '⏸';
        btn.classList.remove('start');
        btn.classList.add('pause');
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                timerRunning = false;
                btn.textContent = '▶';
                btn.classList.remove('pause');
                btn.classList.add('start');
                playAlarm();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = 90;
    updateTimerDisplay();
    const btn = document.getElementById('timerStartBtn');
    btn.textContent = '▶';
    btn.classList.remove('pause');
    btn.classList.add('start');
}

function setTimer(seconds) {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = seconds;
    updateTimerDisplay();
    const btn = document.getElementById('timerStartBtn');
    btn.textContent = '▶';
    btn.classList.remove('pause');
    btn.classList.add('start');
}

function updateTimerDisplay() {
    const display = document.getElementById('timerDisplay');
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timerSeconds <= 10 && timerSeconds > 0) {
        display.classList.add('warning');
    } else {
        display.classList.remove('warning');
    }
}

function playAlarm() {
    showToast("⏰ หมดเวลาพัก! เริ่มเซ็ตต่อไปได้เลย");
    // Play sound if available
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleRkALIrZ7qt+HAAqj9vtq3ocACuQ2+2releJkoxkXlZfjL2xkWA6OWSQyNa8cBwKKYzY6atyGgAsj9vsqnwbACuQ3O2rexsAK5Dc7at7GwArkNzuqnwbACuQ3O2rexsAK5Dc7qt7GwArkNzuq3sbACuQ3O6rexsAK5Dc7qt8GwArj9zuq3wbACuP3O+rfBsAK4/c76t8GwArj9zvq3wbACuP3O+rfBsAK4/c76t8GwArj9zvq3wbACuP3O+rfBsAK4/c76t8GwArkNzvq3wbACuQ3O+rfBsAK5Dc76t8GwArkNzuq3wbACuQ3O6rexsAK5Dc7qt7GwArkNzuq3sbACuQ3O6rex');
        audio.play();
    } catch(e) {}
}

// Event Listeners
document.getElementById("videoModal").addEventListener("click", function(e) {
    if (e.target === this) {
        closeVideo();
    }
});

document.querySelectorAll(".day-btn").forEach((btn) => {
    btn.addEventListener("click", function() {
        document.querySelectorAll(".day-btn").forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        renderWorkout(this.dataset.day);
    });
});

// Initialize
loadProgress();
updateStats();
updateDayButtons();

// Auto-select today
const today = new Date().getDay();
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const todayKey = days[today];
document.querySelector(`[data-day="${todayKey}"]`).click();