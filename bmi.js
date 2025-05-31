// BMI Calculator JS
// Handles form submission, calculates BMI, and displays result

import {
  calculateBMI,
  getBMICategory,
  calculateBMR,
  calculateCalorie,
  calculateWater,
  calculateProtein,
  calculateBodyFat
} from './bmi-utils.js';

document.addEventListener('DOMContentLoaded', function () {
  // Redirect to login if not authenticated
  if (!sessionStorage.getItem('bmi_logged_in')) {
    window.location.href = 'login.html';
    return;
  }
  const form = document.getElementById('bmiForm');
  const bmiCard = document.getElementById('bmiCard');
  const dashboard = document.getElementById('dashboard');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    if (!height || !weight || height <= 0 || weight <= 0 || !age || age <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อมูลไม่ถูกต้อง',
        text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
        confirmButtonColor: '#a259e6'
      });
      return;
    }
    // Calculate
    const bmi = calculateBMI(weight, height);
    const bmiInfo = getBMICategory(bmi);
    const bmr = calculateBMR(weight, height, age, gender);
    const calorie = calculateCalorie(bmr);
    const water = calculateWater(weight);
    const protein = calculateProtein(weight);
    const bodyFat = calculateBodyFat(bmi, age, gender);
    // Show SweetAlert2 for BMI
    Swal.fire({
      icon: bmiInfo.icon,
      title: `BMI ของคุณคือ ${bmi.toFixed(2)}`,
      html: `<b>อยู่ในเกณฑ์:</b> <span style='color:${bmiInfo.color}'>${bmiInfo.category}</span><br><br><b>คำแนะนำ:</b> <span>${bmiInfo.advice}</span>`,
      confirmButtonColor: bmiInfo.color
    }).then(() => {
      // Show dashboard
      bmiCard.style.display = 'none';
      dashboard.style.display = 'block';
      dashboard.innerHTML = `
        <div class="card doctor-card p-4 mx-auto" style="max-width: 500px;">
          <h2 class="h5 doctor-title text-center mb-4">Health Dashboard</h2>
          <ul class="list-group list-group-flush mb-3">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span><b>BMI</b></span> <span>${bmi.toFixed(2)} (${bmiInfo.category})</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span><b>BMR</b> (Basal Metabolic Rate)</span> <span>${bmr.toFixed(0)} kcal/day</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span><b>แคลอรี่ที่ควรได้รับ/วัน</b></span> <span>${calorie} kcal</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span><b>น้ำที่ควรดื่ม/วัน</b></span> <span>${water} ลิตร</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span><b>โปรตีนที่ควรได้รับ/วัน</b></span> <span>${protein} กรัม</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span><b>%Body Fat (ประมาณ)</b></span> <span>${bodyFat}%</span>
            </li>
          </ul>
          <div class="text-center mt-3">
            <button class="btn btn-primary rounded-pill px-4" id="recalcBtn">คำนวณใหม่</button>
          </div>
        </div>
      `;
      document.getElementById('recalcBtn').onclick = function() {
        dashboard.style.display = 'none';
        bmiCard.style.display = 'block';
      };
    });
  });
});
