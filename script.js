// Workout Data
const workoutData = {
    monday: {
        title: '❌ วันพัก',
        rest: true,
        message: 'Recovery Day - พักผ่อนให้เต็มที่'
    },
    tuesday: {
        title: 'Day 1: PUSH (อก, ไหล่, หลังแขน)',
        exercises: [
            { name: 'Incline Push-up (วิดพื้นบนโต๊ะ/เก้าอี้)', sets: '4 x AMRAP (ทำจนหมดแรง)', video: 'https://www.youtube.com/watch?v=8zIu0jvY7jM' },
            { name: 'Push-up (วิดพื้นปกติ หรือ วางเข่า)', sets: '4 x AMRAP', video: 'https://www.youtube.com/watch?v=TvxNkmjdhMM' },
            { name: 'DB Lateral Raise (ดัมเบล 1.5kg)', sets: '3 x 20–30 (หรือจนล้า)', video: 'https://www.youtube.com/watch?v=3VcKaXpzqRo' },
            { name: 'Pike Push-up (เน้นไหล่)', sets: '3 x AMRAP', video: 'https://www.youtube.com/watch?v=3-1_tDYI-Fw' },
            { name: 'Chair Dip (เล่นกับเก้าอี้)', sets: '4 x AMRAP', video: 'https://www.youtube.com/watch?v=0326dy_-CzM' }
        ],
        cardio: 'คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที'
    },
    wednesday: {
        title: 'Day 2: PULL (หลัง, หน้าแขน)',
        exercises: [
            { name: 'Towel Row (ดึงผ้าขนหนู)', sets: '4 x 15–20 (เกร็งสู้แรงตัวเอง)', video: 'https://www.youtube.com/watch?v=v18n4j0zY1U' },
            { name: 'DB Bent Over Row (ดัมเบล 1.5kg)', sets: '4 x 25–30/ข้าง (เน้นบีบสะบัก)', video: 'https://www.youtube.com/watch?v=pYcpY20QaE8' },
            { name: 'Superman (บริหารหลังล่าง)', sets: '3 x 20', video: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ' },
            { name: 'DB Bicep Curl (ดัมเบล 1.5kg)', sets: '4 x 20–30/ข้าง (ช้าๆ โฟกัส)', video: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo' },
            { name: 'DB Hammer Curl (ดัมเบล 1.5kg)', sets: '3 x 20–30/ข้าง', video: 'https://www.youtube.com/watch?v=zC3nLHv2hrQ' }
        ],
        cardio: 'คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที'
    },
    thursday: {
        title: 'Day 3: LEGS (ขา, ท้อง)',
        exercises: [
            { name: 'Bodyweight Squat (หรือ Goblet Squat ถือ DB)', sets: '4 x AMRAP', video: 'https://www.youtube.com/watch?v=X-i3f-9-I0I' },
            { name: 'Lunge (ถือดัมเบล 1.5kg)', sets: '3 x 15–20/ข้าง', video: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U' },
            { name: 'Glute Bridge (วาง DB บนสะโพก)', sets: '4 x 25–30', video: 'https://www.youtube.com/watch?v=m2Zx-57cSok' },
            { name: 'Calf Raise (เขย่งน่อง ถือ DB)', sets: '4 x AMRAP', video: 'https://www.youtube.com/watch?v=YMmgqO8Jo-k' },
            { name: 'Plank', sets: '3 x 60 วินาที (หรือจนหมดแรง)', video: 'https://www.youtube.com/watch?v=TvxNkmjdhMM' },
            { name: 'Lying Leg Raise (นอนยกขา)', sets: '3 x AMRAP', video: 'https://www.youtube.com/watch?v=Wp4BlxcAcHI' }
        ],
        cardio: 'คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที'
    },
    friday: {
        title: '❌ วันพัก',
        rest: true,
        message: 'Recovery Day - ยืดเส้นยืดสายเบาๆ'
    },
    saturday: {
        title: 'Day 4: UPPER BODY (ร่างกายส่วนบน)',
        exercises: [
            { name: 'Push-up (วิดพื้นปกติ)', sets: '4 x AMRAP', video: 'https://www.youtube.com/watch?v=TvxNkmjdhMM' },
            { name: 'DB Renegade Row (ดัมเบล 1.5kg)', sets: '3 x 15–20/ข้าง', video: 'https://www.youtube.com/watch?v=z-3-461kKNk' },
            { name: 'DB Shoulder Press (ยืน/นั่ง)', sets: '4 x 20-30 (หรือจนล้า)', video: 'https://www.youtube.com/watch?v=qEwKCR5-j_Q' },
            { name: 'DB Bicep Curl (ดัมเบล 1.5kg)', sets: '3 x 20–30/ข้าง', video: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo' },
            { name: 'DB Overhead Tricep Extension (ถือ DB 1 อัน)', sets: '3 x 20–30', video: 'https://www.youtube.com/watch?v=YbX7WdY6-0A' }
        ],
        cardio: 'คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที'
    },
    sunday: {
        title: 'Day 5: LOWER BODY (ขา, ท้อง)',
        exercises: [
            { name: 'Bulgarian Split Squat (Bodyweight)', sets: '4 x 15–20/ข้าง', video: 'https://www.youtube.com/watch?v=2C-uNgKwPLE' },
            { name: 'Single Leg Glute Bridge', sets: '3 x 15–20/ข้าง', video: 'https://www.youtube.com/watch?v=8bbE64NuDTU' },
            { name: 'Wall Sit (นั่งพิงกำแพง)', sets: '3 x 60 วินาที (หรือจนหมดแรง)', video: 'https://www.youtube.com/watch?v=-cdph8hv0O0' },
            { name: 'Plank Shoulder Taps', sets: '3 x AMRAP (ใน 60 วิ)', video: 'https://www.youtube.com/watch?v=K2VljzCC16g&t=57s' },
            { name: 'Side Plank (แพลงก์ข้าง)', sets: '3 x 45 วินาที/ข้าง', video: 'https://www.youtube.com/watch?v=K2VljzCC16g' }
        ],
        cardio: 'คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที'
    }
};

// Global Variables
let currentDay = '';
let completedExercises = {};

// Load Progress from LocalStorage
function loadProgress() {
    const saved = localStorage.getItem('workoutProgress');
    if (saved) {
        completedExercises = JSON.parse(saved);
    }
}

// Save Progress to LocalStorage
function saveProgress() {
    localStorage.setItem('workoutProgress', JSON.stringify(completedExercises));
    updateStats();
    updateDayButtons();
}

// Update Statistics
function updateStats() {
    let totalWorkouts = 0;
    let totalExercises = 0;

    Object.keys(completedExercises).forEach(day => {
        if (completedExercises[day].length > 0) {
            const workout = workoutData[day];
            if (!workout.rest && completedExercises[day].length === workout.exercises.length) {
                totalWorkouts++;
            }
            totalExercises += completedExercises[day].length;
        }
    });

    document.getElementById('totalWorkouts').textContent = totalWorkouts;
    document.getElementById('totalExercises').textContent = totalExercises;
    document.getElementById('weekStreak').textContent = Math.floor(totalWorkouts / 5);
}

// Update Day Buttons (Show completed checkmark)
function updateDayButtons() {
    Object.keys(workoutData).forEach(day => {
        const btn = document.querySelector(`[data-day="${day}"]`);
        const workout = workoutData[day];
        
        if (!workout.rest && completedExercises[day] && 
            completedExercises[day].length === workout.exercises.length) {
            btn.classList.add('completed');
        } else {
            btn.classList.remove('completed');
        }
    });
}

// Render Workout
function renderWorkout(day) {
    currentDay = day;
    const workout = workoutData[day];
    const content = document.getElementById('workoutContent');

    // Rest Day
    if (workout.rest) {
        content.innerHTML = `
            <h2 class="workout-title">${workout.title}</h2>
            <div class="rest-day">
                <div class="rest-day-icon">😴</div>
                <p>${workout.message}</p>
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

    let html = `<h2 class="workout-title">${workout.title}</h2>`;

    // Render Exercises
    workout.exercises.forEach((exercise, index) => {
        const isCompleted = completedExercises[day].includes(index);
        html += `
            <div class="exercise ${isCompleted ? 'completed' : ''}" id="exercise-${index}">
                <div class="exercise-header">
                    <div>
                        <div class="exercise-name">${exercise.name}</div>
                        <div class="exercise-sets">${exercise.sets}</div>
                    </div>
                    <button class="video-btn" onclick="playVideo('${exercise.video}')">
                        ▶ ดูวิดีโอ
                    </button>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" class="checkbox"
                           id="check-${index}"
                           ${isCompleted ? 'checked' : ''}
                           onchange="toggleExercise(${index})">
                    <label class="checkbox-label" for="check-${index}">
                        ทำเสร็จแล้ว
                    </label>
                </div>
            </div>
        `;
    });

    // Cardio Section
    if (workout.cardio) {
        html += `
            <div class="cardio-section">
                <div class="cardio-title">🏃‍♂️ Cardio</div>
                <div>${workout.cardio}</div>
            </div>
        `;
    }

    // Progress Bar
    html += `
        <div class="progress-container">
            <div class="progress-label">
                <span>ความคืบหน้า</span>
                <span>${completed}/${total} ท่า</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%">
                    ${percentage}%
                </div>
            </div>
        </div>
    `;

    // Celebration
    if (percentage === 100) {
        html += `
            <div class="celebration pulse">
                <h3>🎉 เยี่ยมมาก!</h3>
                <p>คุณทำครบทุกท่าวันนี้แล้ว! ภูมิใจในตัวเอง 💪</p>
            </div>
        `;
    }

    content.innerHTML = html;
}

function toggleExercise(index) {
    if (!completedExercises[currentDay]) {
        completedExercises[currentDay] = [];
    }

    const exerciseIndex = completedExercises[currentDay].indexOf(index);
    if (exerciseIndex > -1) {
        completedExercises[currentDay].splice(exerciseIndex, 1);
    } else {
        completedExercises[currentDay].push(index);
    }

    saveProgress();
    renderWorkout(currentDay);
}

function playVideo(videoUrl) {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');

    let videoId = '';
    if (videoUrl.includes('youtube.com/watch?v=')) {
        videoId = videoUrl.split('watch?v=')[1].split('&')[0];
    } else if (videoUrl.includes('youtu.be/')) {
        videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
    } else if (videoUrl.includes('youtube.com/embed/')) {
        videoId = videoUrl.split('embed/')[1].split('?')[0];
    }

    frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    modal.style.display = 'flex';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    frame.src = '';
    modal.style.display = 'none';
}

function resetProgress() {
    if (confirm('คุณแน่ใจหรือว่าต้องการรีเซ็ตความคืบหน้าทั้งหมด?')) {
        completedExercises = {};
        saveProgress();
        renderWorkout(currentDay);
    }
}

document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideo();
    }
});

document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderWorkout(this.dataset.day);
    });
});

loadProgress();
updateStats();
updateDayButtons();

const today = new Date().getDay();
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const todayKey = days[today];

document.querySelector(`[data-day="${todayKey}"]`).click();