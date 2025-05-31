// bmi-utils.js
// Utility functions for health calculations

export function calculateBMI(weight, height) {
  return weight / ((height / 100) ** 2);
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return { category: 'น้ำหนักน้อย/ผอม', icon: 'warning', color: '#f59e42', advice: 'ควรรับประทานอาหารให้ครบ 5 หมู่ และออกกำลังกายอย่างเหมาะสม' };
  if (bmi < 23) return { category: 'น้ำหนักปกติ', icon: 'success', color: '#4ade80', advice: 'รักษาน้ำหนัก ออกกำลังกายสม่ำเสมอ และรับประทานอาหารที่มีประโยชน์' };
  if (bmi < 25) return { category: 'น้ำหนักเกิน', icon: 'warning', color: '#fbbf24', advice: 'ควรควบคุมอาหาร ลดของหวาน มัน เค็ม และออกกำลังกายเพิ่มขึ้น' };
  if (bmi < 30) return { category: 'โรคอ้วนระดับ 1', icon: 'error', color: '#f87171', advice: 'ควรปรึกษาแพทย์ ควบคุมอาหาร และออกกำลังกายอย่างจริงจัง' };
  return { category: 'โรคอ้วนระดับ 2', icon: 'error', color: '#ef4444', advice: 'ควรพบแพทย์เพื่อรับคำแนะนำเฉพาะทาง และปรับเปลี่ยนพฤติกรรมสุขภาพอย่างเร่งด่วน' };
}

export function calculateBMR(weight, height, age, gender) {
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
}

export function calculateCalorie(bmr) {
  return Math.round(bmr * 1.2);
}

export function calculateWater(weight) {
  return (weight * 0.03).toFixed(2);
}

export function calculateProtein(weight) {
  return (weight * 1.2).toFixed(1);
}

export function calculateBodyFat(bmi, age, gender) {
  let bodyFat = 1.2 * bmi + 0.23 * age - 10.8 * (gender === 'male' ? 1 : 0) - 5.4;
  return bodyFat.toFixed(1);
}
