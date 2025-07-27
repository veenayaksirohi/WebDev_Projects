# Web Development Projects Collection

This repository contains a collection of various web development projects showcasing different technologies and concepts. Each project demonstrates specific skills and implementations.

## Projects Overview

### 1. Blogs Website
**Location:** `Blogs Website/`
- **Files:** `index.html`
- **Description:** A blog website implementation
- **Technologies:** HTML

### 2. Dummy Data Generator
**Location:** `Dummy Data Generator/`
- **Files:** `index.js`, `dummy.js`, `package.json`, `package-lock.json`
- **Description:** A Node.js application that generates dummy employee data using MongoDB and Mongoose
- **Technologies:** Node.js, Express.js v5.1.0, MongoDB, Mongoose v8.16.5
- **Module Type:** ES6 Modules (type: "module" in package.json)

**Features:**
- **Robust Database Connection:** Async MongoDB connection with comprehensive error handling and process exit on failure
- **Employee Data Schema:** Structured schema for employee information with validation
- **Random Data Generation:** Utility functions for generating random numbers within specified ranges
- **ES6 Module Support:** Modern JavaScript module system implementation

**Technical Implementation:**

**Database Schema (dummy.js):**
```javascript
const dummySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  salary: { type: Number },
  language: { type: String },
  city: { type: String },
  isManager: { type: Boolean }
});
```

**Connection Handler (index.js):**
- Implements async/await pattern for database connection
- Includes try-catch error handling with descriptive console messages
- Uses `process.exit(1)` for graceful application termination on connection failure
- Success/error indicators with emoji for better UX

**Utility Functions:**
- `getRandomInt(min, max)`: Generates random integers within specified range using `Math.floor(Math.random())`
- Supports data seeding and testing scenarios

**Dependencies:**
- Express.js v5.1.0 for web server functionality
- Mongoose v8.16.5 for MongoDB object modeling

### 3. Event Webpage
**Location:** `Event_webpage/`
- **Files:** `index.html`
- **Description:** An event-focused webpage
- **Technologies:** HTML

### 4. Exercise5 Code with Harry
**Location:** `Exercise5_code_with_harry/`
- **Files:** `index.html`
- **Description:** Programming exercise implementation
- **Technologies:** HTML

### 5. GitHub Profile Searcher
**Location:** `GitHub Profile Searcher/`
- **Files:** `index.html`, `script.js`, `styles.css`, `github-mark.svg`
- **Description:** A web application to search and display GitHub profiles
- **Technologies:** HTML, CSS, JavaScript
- **Features:** GitHub API integration with custom styling and GitHub branding

### 6. Hacker's Terminal Sigma Web
**Location:** `Hacker's Terminal Sigma Web/`
- **Files:** `index.html`
- **Description:** A terminal-themed web interface
- **Technologies:** HTML

### 7. Lorem Ipsum Generator
**Location:** `Lorem Ipsum Generator/`
- **Files:** `index.html`, `script.js`, `style.css`, `package.json`, `package-lock.json`
- **Description:** A Lorem Ipsum text generator application
- **Technologies:** HTML, CSS, JavaScript, Node.js
- **Features:** Dynamic text generation with custom styling

### 8. Multi Step Progress Bar
**Location:** `Multi Step Progress Bar/`
- **Files:** `index.html`, `script.js`, `style.css`
- **Description:** An interactive multi-step progress bar component
- **Technologies:** HTML, CSS, JavaScript

**Key Features:**
- **Progress Tracking:** Visual progress bar that updates based on current step
- **Step Navigation:** Next/Previous buttons for step control
- **Dynamic Content:** Shows/hides content based on current step
- **Responsive Design:** Clean, modern styling with smooth transitions
- **Interactive Elements:** Click handlers for navigation buttons

**Implementation Details:**
- Progress calculation: `(currentstep / (steps.length - 1)) * 100`
- Color-coded step indicators (grey default, dark green for completed)
- Content visibility management for each step
- Boundary checking to prevent navigation beyond valid steps

### 9. Netflix Clone
**Location:** `Netflix_Clone/`
- **Files:** `index.html`, `style.css`, `faq-accordion.js`, `simple-language-picker.js`, `updated_resume.tex`
- **Description:** A Netflix homepage clone with interactive features
- **Technologies:** HTML, CSS, JavaScript
- **Features:**
  - FAQ accordion functionality
  - Language picker component
  - Responsive design mimicking Netflix's interface

### 10. Parallax Webpage
**Location:** `Parallax Webpage/`
- **Files:** `index.html`
- **Description:** A webpage demonstrating parallax scrolling effects
- **Technologies:** HTML, CSS

### 11. Portfolio Gallery
**Location:** `Portfolio Gallery/`
- **Files:** `index.html`
- **Description:** A portfolio gallery showcase
- **Technologies:** HTML

### 12. Price Range Slider
**Location:** `Price Range Slider/`
- **Files:** `index.html`
- **Description:** An interactive price range slider component
- **Technologies:** HTML, CSS, JavaScript

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Package Management:** npm
- **Version Control:** Git (implied by .vscode folders)
