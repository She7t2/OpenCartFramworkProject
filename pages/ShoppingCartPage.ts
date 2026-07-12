import { Page, Locator } from '@playwright/test';
// import { CheckoutPage } from './CheckoutPage'; // قم بإلغاء التعليق عند الحاجة إليه

export class ShoppingCartPage {
    private readonly page: Page;
    
    // Locators
    private readonly lblTotalPrice: Locator;
    private readonly btnCheckout: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // ✨ تم استبدال الـ XPath القديم بـ XPath مرن يبحث عن كلمة Total ويجلب الخلية المجاورة لها مباشرة
       this.lblTotalPrice = page.locator("td:has-text('Total:') + td, tr:has-text('Total:') td:last-child").last();
        
        // محدد زر الـ Checkout
        this.btnCheckout = page.locator("a.btn.btn-primary");
    }

    /**
     * Get the total price from the shopping cart
     * @returns Promise<string | null> - The total price text (e.g., "$1,204.00")
     */
      async getTotalPrice(): Promise<string | null> {
        try {
            return await this.lblTotalPrice.textContent();
        } catch (error) {
            console.log(`Unable to retrieve total price: ${error}`);
            return null;
        }
    }


    /**
     * Click on the Checkout button
     * @returns Promise<CheckoutPage> - CheckoutPage instance
     */
    // async clickOnCheckout(): Promise<CheckoutPage> {
    //     await this.btnCheckout.click();
    //     return new CheckoutPage(this.page);
    // }

    /**
     * Verify if shopping cart page is loaded
     * @returns Promise<boolean> - true if page is loaded
     */
    async isPageLoaded(): Promise<boolean> {
        try {
            // ننتظر ثوانٍ معدودة للتأكد من رؤية الزر بدلاً من التحقق اللحظي السريع
            await this.btnCheckout.waitFor({ state: 'visible', timeout: 3000 });
            return await this.btnCheckout.isVisible();
        } catch (error) {
            return false;
        }
    }
}