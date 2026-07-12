


/**
 * Test Case  : user Logout 
 * tages : @master @regression 
 * 
 * Steps  : 
 * 1) Naviagte to App Url 
 * 2) go to login page from home  page 
 * 3) login with valid cerdentials  
 * 4)verify "my Account page"  
 * 5)click on logout  
 * 6) click on continue btn  
 * 7)verify User rediercted to home page  
 * 
 * 
 */


import { test, expect } from "@playwright/test"

import { HomePage } from "../pages/HomePage"

import { loginPage } from "../pages/loginPage"

import { MyAccountPage } from "../pages/myAccountPage"

import { logOutPage } from "../pages/logOutPage"

import { TestConfig } from "../test.config"


// Declare Shared Varibles 

let config: TestConfig;
let homePage: HomePage;
let login: loginPage
let logout: logOutPage;
let myAccountPage: MyAccountPage;


//Hooks   
test.beforeEach(async ({ page }) => {

    config = new TestConfig()
    await page.goto(config.appUrl)

    homePage = new HomePage(page);

    login = new loginPage(page)

    logout = new logOutPage(page)

    myAccountPage = new MyAccountPage(page)

})


test.afterEach(async ({ page }) => {

    page.close();

})


test("User Log Out  @master @regression", async () => {


    await homePage.clickMyAccountLink();

    await homePage.ClickOnLoginLink();

    //Enetr Vlaid Cerdential and login ine  

    login.login(config.email, config.password)

    // verefiy Succeful Login in by cheking "my Account  Page " presence 


    const Islogedin = myAccountPage.isMyAccountPageExists();

    await expect(Islogedin).toBeTruthy()

    ///click on logout   

    await myAccountPage.clickLogout()


    // click on continue btn 

    homePage = await logout.clickContiue();

    await expect(await homePage.isHomePageExists()).toBe(true)




})