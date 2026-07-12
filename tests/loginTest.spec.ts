/**
 * Test Case : Login With Valid Credentials
 * Tags  : @master @sanity @regression
 * 
 * steps  : 
 * 1)  Navigate to Application URL 
 * 
 * 2)  Navigate to Login Page vis Home Page 
 * 
 * 3) Enetr Vlaid Cerdential and login in
 * 
 * 4)  verefiy Succeful Login in by cheking "my Account  Page " presence 
  * 
 */

import { test, expect } from "@playwright/test"

import { HomePage } from "../pages/HomePage"

import { loginPage } from "../pages/loginPage"

import { MyAccountPage } from "../pages/myAccountPage"

import { TestConfig } from "../test.config"


let Config: TestConfig;

let homePage: HomePage;

let login: loginPage

let myAccountPage: MyAccountPage;
// Hooks  

test.beforeEach(async ({ page }) => {
    Config = new TestConfig()

    await page.goto(Config.appUrl)


    homePage = new HomePage(page)

    login = new loginPage(page);

    myAccountPage = new MyAccountPage(page)

})

test.afterEach(async ({ page }) => {
 await    page.close()
}) 

test ('User  Login With Valid Credentials @master @sanity @regression ' ,async ()=>{
   await  homePage.clickMyAccountLink(); 

   await homePage.ClickOnLoginLink () ;

   //Enetr Vlaid Cerdential and login ine  

  await login.login(Config.email , Config.password) 

   // verefiy Succeful Login in by cheking "my Account  Page " presence 


   const Islogedin = myAccountPage.isMyAccountPageExists () ; 

   await expect(Islogedin).toBeTruthy()


})