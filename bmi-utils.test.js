import assert from 'assert';
import {
  calculateBMI,
  getBMICategory,
  calculateBMR,
  calculateCalorie,
  calculateWater,
  calculateProtein,
  calculateBodyFat
} from './bmi-utils.js';

describe('BMI Utils', function () {
  it('should calculate BMI correctly', function () {
    assert.strictEqual(calculateBMI(70, 170).toFixed(2), '24.22');
  });

  it('should return correct BMI category', function () {
    assert.strictEqual(getBMICategory(17).category, 'น้ำหนักน้อย/ผอม');
    assert.strictEqual(getBMICategory(21).category, 'น้ำหนักปกติ');
    assert.strictEqual(getBMICategory(24).category, 'น้ำหนักเกิน');
    assert.strictEqual(getBMICategory(27).category, 'โรคอ้วนระดับ 1');
    assert.strictEqual(getBMICategory(32).category, 'โรคอ้วนระดับ 2');
  });

  it('should calculate BMR for male', function () {
    assert.strictEqual(Math.round(calculateBMR(70, 170, 30, 'male')), 1706);
  });

  it('should calculate BMR for female', function () {
    assert.strictEqual(Math.round(calculateBMR(60, 160, 25, 'female')), 1382);
  });

  it('should calculate daily calorie', function () {
    assert.strictEqual(calculateCalorie(1500), 1800);
  });

  it('should calculate water intake', function () {
    assert.strictEqual(calculateWater(70), '2.10');
  });

  it('should calculate protein intake', function () {
    assert.strictEqual(calculateProtein(70), '84.0');
  });

  it('should calculate body fat (male)', function () {
    assert.strictEqual(calculateBodyFat(24.22, 30, 'male'), '22.7');
  });

  it('should calculate body fat (female)', function () {
    assert.strictEqual(calculateBodyFat(24.22, 30, 'female'), '33.5');
  });
});
