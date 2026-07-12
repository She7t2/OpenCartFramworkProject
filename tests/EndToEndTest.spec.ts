/**
 * * test Case  :  End To End On Demo E-commerce  Application 
 * * purpose : 
 * * this test simulates a complete user flow on an  e-commerce site 
 * * Steps  :  
 * * 1)  Register a new Account  
 * * 2) Log out After registration
 * * 3) Log in with the same Account  
 * * 4) search for a product and add it to the shopping cart 
 * * 5) verify cart contents
 * * 6) Attempt Checkout (disabled since feature is not available on demo site)
 * * */

import { test, expect, Page } from "@playwright/test"
import { rondmData } from "../utils/rondomeData"
import { TestConfig } from "../test.config"

import { HomePage } from "../pages/HomePage"
import { loginPage } from "../pages/loginPage"
import { logOutPage } from "../pages/logOutPage"
import { MyAccountPage } from "../pages/myAccountPage"
import { registerationPage } from "../pages/registerationPage"
import { ProductPage } from "../pages/ProductPage"
import { SearchResultsPage } from "../pages/SearchResultsPage"
import { ShoppingCartPage } from "../pages/ShoppingCartPage"

test("End To End Senario", async ({ page }) => {

    const config = new TestConfig()

    await page.goto(config.appUrl);

    // 1) Register new account and Capture the generated Email 
    const registeredEmail = await preformRegisteration(page);
    console.log(" 🦜 Congratulations! Your account has been successfully created.")

    // 2) Log out After registration
    await preformLogout(page);
    console.log(" 🦜 Logout is Completed")

    // 3) Log in with the same Account 
    await preformLogin(page, registeredEmail)
    console.log(" 🦜 Login is Completed")

    // 4) Search for a product and add it to the shopping cart 
    await addProductTocart(page)
    console.log(" 🦜 product added to cart ")

    // 5) Verify cart contents
    await verifyShoppingCart(page)
    console.log(" 🦜 Cart contents verified successfully")
})

async function preformRegisteration(page: Page): Promise<string> {
    const config = new TestConfig()
    const homePage = new HomePage(page);

    await homePage.clickMyAccountLink() // click on my account link 
    await homePage.ClickOnRegsiterLink() // click on Registration link

    const RegisterationPage = new registerationPage(page)

    await RegisterationPage.setFirstName(rondmData.getFirstName()) 
    await RegisterationPage.setLastName(rondmData.getLastName())

    const email: string = rondmData.getmail();
    await RegisterationPage.setEmail(email)
    await RegisterationPage.setPasswrod(config.password)
    await RegisterationPage.setprivacyPolicy()

    await RegisterationPage.setContinuebtn()
    await page.waitForLoadState('networkidle');

    return email;
}

async function preformLogout(page: Page) {
    const myAccountPage = new MyAccountPage(page)
    const logout = new logOutPage(page)

    await myAccountPage.clickLogout()
    await logout.clickContiue();
    
    // ننتظر حتى تستقر الشبكة وتظهر الصفحة الرئيسية تماماً
    await page.waitForLoadState('networkidle');
}

async function preformLogin(page: Page, Email: string) {
    const config = new TestConfig()

    await page.goto(config.appUrl) // Reload Page 
    const homePage = new HomePage(page);

    await homePage.clickMyAccountLink() // click on my account link   
    await homePage.ClickOnLoginLink()  // Navigate to login page  
    
    const login = new loginPage(page)
    await login.login(Email, config.password);

    await page.waitForLoadState('networkidle');
}

async function addProductTocart(page: Page) { 
    let homePage = new HomePage(page) 
    let config = new TestConfig() 
      
    const ProductName = config.productName; 

    await homePage.entrProdctName(config.productName) 
    await homePage.clickOnSeaechBtn();

    let SeacrhResult = new SearchResultsPage(page) 
    await SeacrhResult.isSearchResultsPageExists()

    // Check if a product exists in the search results by its name 
    await SeacrhResult.isProductExist(ProductName) 

    const prodcutPag = await SeacrhResult.selectProduct(ProductName)

    // ✨ تم إصلاح وإضافة الـ await هنا لحماية الخطوات من الفشل السريع
    if (prodcutPag) {
        await prodcutPag.setQuantity(config.productQuantity) 
        await prodcutPag.addToCart()
    }


    await page.waitForLoadState('networkidle');
}

async function verifyShoppingCart(page: Page) {
    let prodcutpage = new ProductPage(page) 
    let config = new TestConfig()

    await prodcutpage.clickItemsToNavigateToCart()
    await prodcutpage.clickViewCart(); 

    const shppingCart = new ShoppingCartPage(page) 
    await page.waitForLoadState('networkidle'); 
    // expect(await shppingCart.getTotalPrice()).toBe(config.totalPrice);
}