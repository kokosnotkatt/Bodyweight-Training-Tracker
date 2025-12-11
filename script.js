const defaultWorkoutData = {
  monday: {
    title: "❌ วันพัก",
    icon: "😴",
    rest: true,
    message: "Recovery Day - พักผ่อนให้เต็มที่",
  },
  tuesday: {
    title: "Day 1: PUSH",
    subtitle: "(อก, ไหล่, หลังแขน)",
    icon: "💪",
    exercises: [
      {
        name: "DB Floor Press (นอนดันดัมเบล)",
        sets: "4 x 12-15 (ใช้ 8kg ถ้าไหว หรือ 4.5kg)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=uUGDRwge4Fk",
      },
      {
        name: "DB Shoulder Press (ยืน/นั่งพื้น)",
        sets: "4 x 12-15 (ใช้ 4.5kg - 8kg)",
        weight: "4.5-8kg",
        video: "https://www.youtube.com/watch?v=qEwKCR5-j_Q",
      },
      {
        name: "DB Front Raise (ไหล่หน้า/อกบน)",
        sets: "3 x 12-15 (ใช้ 1-3kg)",
        weight: "1-3kg",
        video: "https://www.youtube.com/watch?v=E-8E0s9N25I",
      },
      {
        name: "DB Lateral Raise (ยกไหล่ข้าง)",
        sets: "3 x 15-20 (ใช้ 1-3kg)",
        weight: "1-3kg",
        video: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
      },
      {
        name: "DB Overhead Tricep Extension",
        sets: "4 x 12-15 (ถือ DB 8kg 1 อัน)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=YbX7WdY6-0A",
      },
    ],
    cardio: "คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที",
  },
  wednesday: {
    title: "Day 2: PULL",
    subtitle: "(หลัง, หน้าแขน)",
    icon: "🏋️",
    exercises: [
      {
        name: "Barbell Bent Over Row (บาร์เบล)",
        sets: "4 x 10–12 (ใช้บาร์เบล 23kg)",
        weight: "23kg",
        video: "https://www.youtube.com/watch?v=T2BYOgKcR-M",
      },
      {
        name: "DB Bent Over Row (ดัมเบล)",
        sets: "3 x 12–15/ข้าง (ใช้ DB 8kg)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=pYcpY20QaE8",
      },
      {
        name: "Superman (บริหารหลังล่าง)",
        sets: "3 x 15-20",
        weight: "Bodyweight",
        video: "https://www.youtube.com/watch?v=z6PJMT2y8GQ",
      },
      {
        name: "DB Bicep Curl (หน้าแขน)",
        sets: "4 x 10–12/ข้าง (ใช้ DB 8kg)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
      },
      {
        name: "DB Hammer Curl (หน้าแขนด้านข้าง)",
        sets: "3 x 12–15/ข้าง (ใช้ DB 8kg)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=zC3nLHv2hrQ",
      },
    ],
    cardio: "คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที",
  },
  thursday: {
    title: "Day 3: LEGS",
    subtitle: "(ขา, สะโพก) - เน้นความแข็งแรง",
    icon: "🦵",
    exercises: [
      {
        name: "Goblet Squat (สควอทถือดัมเบล)",
        sets: "4 x 10–12 (ถือ DB 8kg ไว้ที่อก)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=X-i3f-9-I0I",
      },
      {
        name: "DB Walking Lunge (เดินย่อเข่า)",
        sets: "3 x 12/ข้าง (ถือ DB 8kg สองข้าง หรือข้างเดียว)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
      },
      {
        name: "Barbell Glute Bridge (สะพานโค้ง)",
        sets: "4 x 12–15 (ใช้บาร์เบล 23kg วางบนสะโพก)",
        weight: "23kg",
        video: "https://www.youtube.com/watch?v=Wv-0qcGHRbQ",
      },
      {
        name: "DB Calf Raise (เขย่งน่อง)",
        sets: "4 x 15–20 (ถือ DB 8kg สองข้าง)",
        weight: "16kg",
        video: "https://www.youtube.com/watch?v=YMmgqO8Jo-k",
      },
      {
        name: "Plank (แพลงก์)",
        sets: "3 x 45-60 วินาที",
        weight: "Bodyweight",
        video: "https://www.youtube.com/watch?v=TvxNkmjdhMM",
      },
    ],
    cardio: "คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที",
  },
  friday: {
    title: "❌ วันพัก",
    rest: true,
    icon: "🧘",
    message: "Recovery Day - ยืดเส้นยืดสายเบาๆ",
  },
  saturday: {
    title: "Day 4: UPPER BODY",
    subtitle: "(ร่างกายส่วนบน)",
    icon: "💥",
    exercises: [
      {
        name: "Barbell Overhead Press (ดันข้อไหล่)",
        sets: "4 x 8–10 (ใช้บาร์เบล 23kg)",
        weight: "23kg",
        video: "https://www.youtube.com/watch?v=YJ-iVdb-02s",
      },
      {
        name: "Barbell Bent Over Row (ดึงข้อศอก)",
        sets: "4 x 10–12 (ใช้บาร์เบล 23kg)",
        weight: "23kg",
        video: "https://www.youtube.com/watch?v=T2BYOgKcR-M",
      },
      {
        name: "DB Floor Press (อก)",
        sets: "3 x 12–15 (ใช้ DB 8kg)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=uUGDRwge4Fk",
      },
      {
        name: "DB Bicep Curl (หน้าแขน)",
        sets: "3 x 10–12 (ใช้ DB 8kg)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
      },
      {
        name: "DB Overhead Extension (หลังแขน)",
        sets: "3 x 12–15 (ถือ DB 8kg 1 อัน)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=YbX7WdY6-0A",
      },
    ],
    cardio: "คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที",
  },
  sunday: {
    title: "Day 5: LOWER BODY",
    subtitle: "(ขาหลัง, ก้น) - เน้นโซนหลัง",
    icon: "🔥",
    exercises: [
      {
        name: "Barbell RDL (เดดลิฟท์ขาตึง)",
        sets: "4 x 10–12 (ใช้บาร์เบล 23kg - โฟกัสหลังขา)",
        weight: "23kg",
        video: "https://www.youtube.com/watch?v=Gg3nMYd2S4E",
      },
      {
        name: "Bulgarian Split Squat (สควอทขาเดียว)",
        sets: "3 x 8–10/ข้าง (ถือ DB 8kg หรือมือเปล่า)",
        weight: "8kg",
        video: "https://www.youtube.com/watch?v=2C-uNgKwPLE",
      },
      {
        name: "Barbell Hip Thrust (สะพานโค้งบาร์เบล)",
        sets: "3 x 12-15 (วางบาร์เบล 23kg บนสะโพก)",
        weight: "23kg",
        video: "https://www.youtube.com/watch?v=SEdqd1n0cvg",
      },
      {
        name: "Weighted Sit-up (ซิทอัพกอดน้ำหนัก)",
        sets: "3 x 12-15 (กอดแผ่นน้ำหนัก/DB ที่อก)",
        weight: "Weight",
        video: "https://www.youtube.com/watch?v=jDwoBqPH0jk",
      },
      {
        name: "Side Plank (แพลงก์ข้าง)",
        sets: "3 x 30-45 วินาที/ข้าง",
        weight: "Bodyweight",
        video: "https://www.youtube.com/watch?v=K2VljzCC16g",
      },
    ],
    cardio: "คาร์ดิโอ (เดินเร็ว/วิ่งเหยาะๆ) 20-30 นาที",
  },
};

// Day mapping
const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const dayLabels = { 
    monday: "จันทร์", tuesday: "อังคาร", wednesday: "พุธ", 
    thursday: "พฤหัส", friday: "ศุกร์", saturday: "เสาร์", sunday: "อาทิตย์" 
};

// ==========================================
// Global State
// ==========================================
let workoutData = {};
let currentDay = "";
let completedExercises = {};
let timerInterval = null;
let timerSeconds = 90;
let timerRunning = false;
let timerDefaultSeconds = 90;
let swapSelection = [];

// ==========================================
// Data Management (LocalStorage)
// ==========================================
function loadData() {
    // 1. Load Workout Data (Custom or Default)
    try {
        const savedWorkouts = localStorage.getItem("myWorkoutData");
        if (savedWorkouts) {
            workoutData = JSON.parse(savedWorkouts);
            console.log("Loaded custom workout data");
        } else {
            workoutData = JSON.parse(JSON.stringify(defaultWorkoutData)); // Deep copy
            console.log("Loaded default workout data");
        }
    } catch (e) {
        console.error("Error loading workouts:", e);
        workoutData = JSON.parse(JSON.stringify(defaultWorkoutData));
    }

    // 2. Load Progress
    try {
        const savedProgress = localStorage.getItem("workoutProgress");
        if (savedProgress) {
            completedExercises = JSON.parse(savedProgress);
        }
    } catch (e) {
        console.error("Error loading progress:", e);
        completedExercises = {};
    }
}

function saveWorkoutData() {
    localStorage.setItem("myWorkoutData", JSON.stringify(workoutData));
    renderWorkout(currentDay);
    renderDaySelector();
}

function saveProgress() {
    localStorage.setItem("workoutProgress", JSON.stringify(completedExercises));
    updateStats();
    updateDayButtons();
}

function resetScheduleToDefault() {
    if(confirm("คุณต้องการรีเซ็ตตารางฝึกเป็นค่าเริ่มต้นใช่หรือไม่? การแก้ไขทั้งหมดจะหายไป")) {
        workoutData = JSON.parse(JSON.stringify(defaultWorkoutData));
        saveWorkoutData();
        renderSwapGrid(); // refresh swap modal if open
        showToast("รีเซ็ตตารางเรียบร้อย");
    }
}

// ==========================================
// Day Selector
// ==========================================
function renderDaySelector() {
    const selector = document.getElementById("daySelector");
    selector.innerHTML = "";

    const daysOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    
    daysOrder.forEach(day => {
        const data = workoutData[day];
        const btn = document.createElement("button");
        btn.className = `day-btn ${data.rest ? 'rest' : ''}`;
        btn.dataset.day = day;
        btn.innerHTML = `
            <span class="day-name">${dayLabels[day]}</span>
            <span class="day-type">${data.rest ? 'พัก' : (data.title.includes(':') ? data.title.split(':')[1].trim() : data.title)}</span>
        `;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".day-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderWorkout(day);
        });
        selector.appendChild(btn);
    });
}

// ==========================================
// Render Workout (Display Mode)
// ==========================================
function renderWorkout(day) {
    currentDay = day;
    const workout = workoutData[day];
    const content = document.getElementById("workoutContent");

    // Update active button state visually
    document.querySelectorAll(".day-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.day === day);
    });

    if (!workout) {
        content.innerHTML = '<div class="loading">ไม่พบข้อมูล</div>';
        return;
    }

    let html = `
        <div class="workout-title">
            <div class="workout-title-content">
                <div class="title-icon">${workout.icon || '💪'}</div>
                <div class="title-text">
                    <span>${workout.title}</span>
                    <small>${workout.subtitle || ''}</small>
                </div>
            </div>
            <button class="edit-btn" onclick="renderEditForm('${day}')">✏️ แก้ไข</button>
        </div>
    `;

    // Rest Day
    if (workout.rest) {
        html += `
            <div class="rest-day">
                <div class="rest-day-icon">${workout.icon}</div>
                <h3>${workout.message || "Recovery Day"}</h3>
                <p>วันนี้เป็นวันพักฟื้นร่างกาย ให้กล้ามเนื้อได้ซ่อมแซมตัวเอง</p>
            </div>
        `;
        content.innerHTML = html;
        return;
    }

    // Initialize completion array
    if (!completedExercises[day]) {
        completedExercises[day] = [];
    }

    // Exercises
    workout.exercises.forEach((exercise, index) => {
        const isCompleted = completedExercises[day].includes(index);
        html += `
            <div class="exercise ${isCompleted ? "completed" : ""}" data-index="${index}">
                <div class="exercise-header">
                    <div class="exercise-info">
                        <span class="exercise-number">${index + 1}</span>
                        <span class="exercise-name">${exercise.name}</span>
                        <div class="exercise-sets">${exercise.sets} • ${exercise.weight || '-'}</div>
                    </div>
                    ${exercise.video ? `<button class="video-btn" onclick="playVideo('${exercise.video}')">▶ ดูวิดีโอ</button>` : ''}
                </div>
                <div class="exercise-footer">
                    <div class="checkbox-wrapper ${isCompleted ? 'checked' : ''}" onclick="toggleExercise(${index})">
                        <div class="custom-checkbox">✓</div>
                        <span class="checkbox-label">${isCompleted ? 'เสร็จแล้ว' : 'ทำเสร็จแล้ว?'}</span>
                    </div>
                    <button class="start-timer-btn" onclick="showTimerWithSeconds(90)">⏱️ พัก 1:30</button>
                </div>
            </div>
        `;
    });

    // Cardio
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

    content.innerHTML = html;
}

// ==========================================
// Edit Mode (Editing Exercises)
// ==========================================
function renderEditForm(day) {
    const workout = workoutData[day];
    const content = document.getElementById("workoutContent");
    
    let html = `
        <h3>📝 แก้ไขตารางฝึก: ${dayLabels[day]}</h3>
        <div class="edit-form">
            <div class="form-group">
                <label class="form-label">ชื่อวันฝึก (Title)</label>
                <input type="text" class="form-input" id="editTitle" value="${workout.title}">
            </div>
            <div class="form-group">
                <label class="form-label">คำอธิบายรอง (Subtitle)</label>
                <input type="text" class="form-input" id="editSubtitle" value="${workout.subtitle || ''}">
            </div>
            <div class="form-group">
                <label class="form-label">สถานะวันพัก</label>
                <select class="form-select" id="editRest">
                    <option value="false" ${!workout.rest ? 'selected' : ''}>ฝึก (Active)</option>
                    <option value="true" ${workout.rest ? 'selected' : ''}>วันพัก (Rest Day)</option>
                </select>
            </div>
            
            <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 10px 0;">
            
            <div id="exercisesList">
                ${!workout.rest && workout.exercises ? workout.exercises.map((ex, idx) => `
                    <div class="edit-exercise-item">
                        <button class="remove-exercise-btn" onclick="removeExerciseItem(this)">×</button>
                        <div class="form-group">
                            <label class="form-label">ชื่อท่าฝึก</label>
                            <input type="text" class="form-input exercise-name-input" value="${ex.name}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">จำนวนเซ็ต/ครั้ง</label>
                            <input type="text" class="form-input exercise-sets-input" value="${ex.sets}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">น้ำหนัก/คำแนะนำ</label>
                            <input type="text" class="form-input exercise-weight-input" value="${ex.weight || ''}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">ลิงก์วิดีโอ (YouTube)</label>
                            <input type="text" class="form-input exercise-video-input" value="${ex.video || ''}">
                        </div>
                    </div>
                `).join('') : '<p style="color:var(--text-muted)">ไม่มีท่าฝึกในวันพัก</p>'}
            </div>
            
            ${!workout.rest ? `<button class="action-btn secondary" onclick="addExerciseItem()" style="width:100%">+ เพิ่มท่าฝึก</button>` : ''}
            
            <div class="form-group" style="margin-top: 15px;">
                <label class="form-label">Cardio</label>
                <input type="text" class="form-input" id="editCardio" value="${workout.cardio || ''}">
            </div>

            <div class="edit-actions">
                <button class="action-btn secondary" onclick="renderWorkout('${day}')">ยกเลิก</button>
                <button class="action-btn primary" onclick="saveEdit('${day}')">บันทึก</button>
            </div>
        </div>
    `;
    
    content.innerHTML = html;
    
    // Add event listener to Rest dropdown to toggle exercises visibility
    document.getElementById('editRest').addEventListener('change', function() {
        if(this.value === 'true') {
             document.getElementById('exercisesList').innerHTML = '<p style="color:var(--text-muted)">วันพักจะไม่มีท่าฝึก</p>';
        } else {
             // If switching to active, add one empty item if empty
             document.getElementById('exercisesList').innerHTML = '';
             addExerciseItem();
        }
    });
}

function addExerciseItem() {
    const list = document.getElementById('exercisesList');
    const div = document.createElement('div');
    div.className = 'edit-exercise-item';
    div.innerHTML = `
        <button class="remove-exercise-btn" onclick="removeExerciseItem(this)">×</button>
        <div class="form-group">
            <label class="form-label">ชื่อท่าฝึก</label>
            <input type="text" class="form-input exercise-name-input" placeholder="เช่น Dumbbell Press">
        </div>
        <div class="form-group">
            <label class="form-label">จำนวนเซ็ต/ครั้ง</label>
            <input type="text" class="form-input exercise-sets-input" placeholder="เช่น 4 x 12">
        </div>
        <div class="form-group">
            <label class="form-label">น้ำหนัก/คำแนะนำ</label>
            <input type="text" class="form-input exercise-weight-input" placeholder="เช่น 8kg">
        </div>
        <div class="form-group">
            <label class="form-label">ลิงก์วิดีโอ (YouTube)</label>
            <input type="text" class="form-input exercise-video-input" placeholder="URL">
        </div>
    `;
    list.appendChild(div);
}

function removeExerciseItem(btn) {
    btn.parentElement.remove();
}

function saveEdit(day) {
    const title = document.getElementById('editTitle').value;
    const subtitle = document.getElementById('editSubtitle').value;
    const isRest = document.getElementById('editRest').value === 'true';
    const cardio = document.getElementById('editCardio').value;
    
    const exercises = [];
    if (!isRest) {
        const items = document.querySelectorAll('.edit-exercise-item');
        items.forEach(item => {
            exercises.push({
                name: item.querySelector('.exercise-name-input').value,
                sets: item.querySelector('.exercise-sets-input').value,
                weight: item.querySelector('.exercise-weight-input').value,
                video: item.querySelector('.exercise-video-input').value,
            });
        });
    }

    workoutData[day] = {
        ...workoutData[day],
        title,
        subtitle,
        rest: isRest,
        cardio,
        exercises: isRest ? [] : exercises,
        icon: isRest ? "😴" : "💪" // Simple icon logic
    };
    
    // Update Icons based on keywords (Optional enhancement)
    if(title.toUpperCase().includes('PUSH')) workoutData[day].icon = "💪";
    if(title.toUpperCase().includes('PULL')) workoutData[day].icon = "🏋️";
    if(title.toUpperCase().includes('LEG')) workoutData[day].icon = "🦵";
    
    saveWorkoutData();
    showToast("บันทึกการแก้ไขแล้ว");
}

// ==========================================
// Swap Schedule Feature
// ==========================================
function renderSwapGrid() {
    const grid = document.getElementById("swapGrid");
    grid.innerHTML = "";
    
    const daysOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    
    daysOrder.forEach(day => {
        const data = workoutData[day];
        const div = document.createElement("div");
        div.className = "swap-item";
        div.dataset.day = day;
        div.onclick = () => handleSwapSelect(day, div);
        
        div.innerHTML = `
            <span class="swap-day-label">${dayLabels[day]}</span>
            <span class="swap-workout-name">${data.rest ? "วันพัก" : data.title}</span>
            <span>${swapSelection.includes(day) ? "✅" : "⇄"}</span>
        `;
        
        if (swapSelection.includes(day)) {
            div.classList.add("selected");
        }
        
        grid.appendChild(div);
    });
}

function handleSwapSelect(day, element) {
    if (swapSelection.includes(day)) {
        // Deselect
        swapSelection = swapSelection.filter(d => d !== day);
    } else {
        // Select
        if (swapSelection.length < 2) {
            swapSelection.push(day);
        }
    }
    
    renderSwapGrid();
    
    // If 2 selected, swap!
    if (swapSelection.length === 2) {
        setTimeout(() => {
            performSwap();
        }, 300);
    }
}

function performSwap() {
    const day1 = swapSelection[0];
    const day2 = swapSelection[1];
    
    if (confirm(`คุณต้องการสลับตารางของ "${dayLabels[day1]}" กับ "${dayLabels[day2]}" ใช่หรือไม่?`)) {
        // Swap data
        const temp = JSON.parse(JSON.stringify(workoutData[day1]));
        workoutData[day1] = JSON.parse(JSON.stringify(workoutData[day2]));
        workoutData[day2] = temp;
        
        // Also swap progress? Maybe simpler to clear progress for these days
        // Let's keep progress array but it might mismatch exercises. 
        // Best practice: Clear progress for swapped days to avoid bug
        completedExercises[day1] = [];
        completedExercises[day2] = [];
        
        saveWorkoutData();
        saveProgress(); // to save cleared progress
        showToast("สลับตารางเรียบร้อย!");
    }
    
    swapSelection = [];
    renderSwapGrid();
}

// ==========================================
// Basic Functions (Toast, Stats, Toggle)
// ==========================================
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function toggleExercise(index) {
    if (!completedExercises[currentDay]) completedExercises[currentDay] = [];
    
    const idx = completedExercises[currentDay].indexOf(index);
    if (idx > -1) {
        completedExercises[currentDay].splice(idx, 1);
    } else {
        completedExercises[currentDay].push(index);
        
        // Check complete
        const workout = workoutData[currentDay];
        if (workout.exercises && completedExercises[currentDay].length === workout.exercises.length) {
            showToast("🎉 ครบทุกท่าแล้ว! เยี่ยมมาก!");
        }
    }
    saveProgress();
    renderWorkout(currentDay); // Re-render to update checkbox visuals
}

// Stats & Timer functions from previous version (simplified for brevity here)
// ... Include updateStats, showStats, Timer logic here ...
// Copying essential parts:

function updateStats() {
    let totalWorkouts = 0;
    let totalExercises = 0;
    
    const days = Object.keys(completedExercises);
    days.forEach(day => {
        if(workoutData[day] && !workoutData[day].rest && completedExercises[day]) {
            totalExercises += completedExercises[day].length;
             if(workoutData[day].exercises && completedExercises[day].length === workoutData[day].exercises.length) {
                 totalWorkouts++;
             }
        }
    });

    document.getElementById("totalWorkouts").textContent = totalWorkouts;
    document.getElementById("totalExercises").textContent = totalExercises;
}

function showStats() {
    document.getElementById('statsModal').classList.add('show');
    // Implement chart rendering if needed
}

// ==========================================
// Initialization
// ==========================================
function init() {
    loadData();
    renderDaySelector();
    updateStats();
    
    // Event Listeners
    document.getElementById('swapModalBtn').addEventListener('click', () => {
        swapSelection = [];
        renderSwapGrid();
        document.getElementById('swapModal').classList.add('show');
    });
    
    document.getElementById('swapCloseBtn').addEventListener('click', () => {
        document.getElementById('swapModal').classList.remove('show');
    });
    
    document.getElementById('statsCloseBtn').addEventListener('click', () => {
        document.getElementById('statsModal').classList.remove('show');
    });
    
    document.getElementById('exportBtn').addEventListener('click', showStats);
    
    document.getElementById('timerToggleBtn').addEventListener('click', () => {
        document.getElementById('timerSection').classList.remove('hidden');
    });
    
    document.getElementById('timerCloseBtn').addEventListener('click', () => {
        document.getElementById('timerSection').classList.add('hidden');
    });

    document.getElementById('videoCloseBtn').addEventListener('click', () => {
        const modal = document.getElementById("videoModal");
        modal.querySelector('iframe').src = "";
        modal.classList.remove('show');
    });

    document.getElementById('timerStartBtn').addEventListener('click', toggleTimer);
    document.getElementById('timerResetBtn').addEventListener('click', () => {
        timerSeconds = timerDefaultSeconds;
        updateTimerDisplay();
        timerRunning = false;
        if(timerInterval) clearInterval(timerInterval);
        document.getElementById('timerStartBtn').textContent = "▶";
    });
    
    document.querySelectorAll('.quick-timer-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            timerDefaultSeconds = parseInt(this.dataset.seconds);
            timerSeconds = timerDefaultSeconds;
            updateTimerDisplay();
            document.querySelectorAll('.quick-timer-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Auto-select today
    const today = dayNames[new Date().getDay()];
    renderWorkout(today);
}

// Timer Logic helpers
function toggleTimer() {
    const btn = document.getElementById('timerStartBtn');
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        btn.textContent = "▶";
    } else {
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            if(timerSeconds <= 0) {
                clearInterval(timerInterval);
                timerRunning = false;
                showToast("⏰ หมดเวลาพัก!");
                timerSeconds = timerDefaultSeconds;
                updateTimerDisplay();
                btn.textContent = "▶";
            }
        }, 1000);
        timerRunning = true;
        btn.textContent = "⏸";
    }
}

function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const s = (timerSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${m}:${s}`;
}

function showTimerWithSeconds(s) {
    timerDefaultSeconds = s;
    timerSeconds = s;
    updateTimerDisplay();
    document.getElementById('timerSection').classList.remove('hidden');
}

function playVideo(url) {
    let videoId = "";
    if (url.includes("youtube.com/watch?v=")) videoId = url.split("watch?v=")[1].split("&")[0];
    else if (url.includes("youtu.be/")) videoId = url.split("youtu.be/")[1].split("?")[0];
    
    if (videoId) {
        document.getElementById("videoFrame").src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        document.getElementById("videoModal").classList.add("show");
    }
}

// Run
init();