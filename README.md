<<<<<<< HEAD
# bmi-test
=======
# BMI Test

A modern BMI & Health Calculator web app for medical professionals, built with HTML, CSS (Bootstrap), JavaScript, and Node.js for unit testing.

## Features
- Login system (username: `demo`, password: `112233`)
- BMI calculation with health advice and SweetAlert2 result
- Calculates:
  - BMI & category
  - Daily calorie needs
  - Daily water intake
  - Daily protein intake
  - BMR (Basal Metabolic Rate)
  - %Body Fat (estimate)
- Health dashboard after calculation
- Responsive, elegant UI (Bootstrap + custom CSS)
- Unit tests for all calculation functions (Node.js + Mocha)

## Getting Started

### 1. Clone the repository
```
git clone https://github.com/your-username/bmi-test.git
cd bmi-test
```

### 2. Install dependencies (for testing)
```
npm install
```

### 3. Run unit tests
```
npm test
```

### 4. Run the app
Just open `index.html` in your browser.

## File Structure
- `index.html` — Main BMI & health dashboard
- `login.html` — Login page
- `bmi.js` — Main JS logic (module)
- `bmi-utils.js` — Calculation functions (imported by bmi.js)
- `bmi-utils.test.js` — Unit tests (Mocha)
- `login.js` — Login logic
- `style.css` — Custom styles

## License
MIT
>>>>>>> 070322b (Initial commit: BMI Calculator project)
