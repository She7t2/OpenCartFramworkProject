# OpenCart E-Commerce Test Automation Framework 🚀

This is a robust, scalable, and maintainable **End-to-End Test Automation Framework** built from scratch for the **OpenCart** e-commerce platform. The project leverages the power of **Playwright** with **TypeScript** to ensure fast, reliable, and stable test execution.

---

## 🛠️ Tech Stack & Concepts Applied

* **Language:** TypeScript
* **Testing Tool:** Playwright
* **Design Pattern:** Page Object Model (POM) – ensuring maximum code reusability and clean separation between test logic and UI elements.
* **Target Application:** OpenCart (Focusing heavily on the **Cart Cycle** from adding products to checkout).
* **Execution Handling:** Managed **Serial Execution** for sequential test steps and optimized **Workers configuration** to prevent flakiness and balance parallelism.

---

## 🚀 Getting Started

### Prerequisites
Before setting up the project, ensure you have the following installed on your local machine:
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [Git](https://git-scm.com/) (for cloning the repository)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/She7t2/apiTestingProeject.git](https://github.com/She7t2/apiTestingProeject.git)
   cd apiTestingProeject


## 📁 Repository Structure

```text
├── .github/workflows/      # CI/CD Pipelines (GitHub Actions configurations)
├── .vscode/                # VS Code workspace settings and configurations
├── pages/                  # Page Object classes (element locators and UI actions)
├── testData/               # Test data files (JSON, constants, and mock data)
├── tests/                  # E2E test scripts and scenarios
├── utils/                  # Helper functions and utility classes
├── .gitignore              # Files and folders ignored by Git
├── package.json            # Project dependencies and script shortcuts
├── playwright.config.ts    # Centralized Playwright configuration
├── test.config.ts          # Environment and test-specific custom settings
└── tsconfig.json           # TypeScript compilation configuration

