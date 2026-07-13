# OpenCart E-Commerce Test Automation Framework 🚀

This is a robust, scalable, and maintainable **End-to-End Test Automation Framework** built from scratch for the **OpenCart** e-commerce platform. The project leverages the power of **Playwright** with **TypeScript** to ensure fast, reliable, and stable test execution.

---

## 🛠️ Tech Stack & Concepts Applied

*   **Language:** TypeScript
*   **Testing Tool:** Playwright
*   **Design Pattern:** Page Object Model (POM) – ensuring maximum code reusability and clean separation between test logic and UI elements.
*   **Target Application:** OpenCart (Focusing heavily on the **Cart Cycle** from adding products to checkout).
*   **Execution Handling:** Managed **Serial Execution** for sequential test steps and optimized **Workers configuration** to prevent flakiness and balance parallelism.

---

## 📁 Repository Structure

*   `pages/` - Contains Page Object classes with element locators and page-specific actions.
*   `tests/` - Contains the actual E2E test scripts/scenarios.
*   `playwright.config.ts` - Centralized configuration for browsers, workers, timeouts, and reporting.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Clone the Repository
```bash
git clone [https://github.com/She7t2/OpenCartFramworkProject.git](https://github.com/She7t2/OpenCartFramworkProject.git)
cd OpenCartFramworkProject

3. Install Dependencies
Install all the required packages including Playwright:
Bash
npm install
4. Install Playwright Browsers
Bash
npx playwright install

You can execute the tests using the following commands:
Run all tests in Headless mode:

npx playwright test
Run tests with UI Mode (Interactive):

npx playwright test --ui

Run a specific test file:
Bash
npx playwright test tests/your-test-file.spec.ts

📊 Reporting
After the test execution finishes, Playwright automatically generates an HTML report. To view the report, run

Bash
npx playwright show-report


