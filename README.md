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

## 📁 Repository Structure

```text
├── pages/                  # Page Object classes (element locators and actions)
├── tests/                  # E2E test scripts and scenarios
└── playwright.config.ts    # Centralized configuration (browsers, workers, timeouts, reports)

