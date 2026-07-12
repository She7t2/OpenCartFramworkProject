/* test Case   : Account Registeration 

* tags : @master @sanity @ regression 

*steps : 
1- navigate to app url
2- go to my ACOUNT and click on registeration
3- fill in regsiteration details with random data
4- agree privacy and ploicy and click on continue btn 
5-validate the comfirmation meg 

*/

import { test, expect } from "@playwright/test"

import { HomePage } from "../pages/HomePage"

import { registerationPage } from "../pages/registerationPage"

import { rondmData } from "../utils/rondomeData"

import { TestConfig } from "../test.config"

// create hooks  
let homePage: HomePage;
let RegsiterationPage: registerationPage;
test.beforeEach(async ({ page }) => {

    // Naviaget to the url 
    const Url = new TestConfig();

    await page.goto(Url.appUrl)

    homePage = new HomePage(page)


    RegsiterationPage = new registerationPage(page);


})


test.afterEach(async ({ page }) => {
    await page.close()
})



test("User Registeration test  @master @sanity @regression ", async () => {


    //Go To MyAccount and Click on Register
    await homePage.clickMyAccountLink()

    await homePage.ClickOnRegsiterLink()


    // fill in Registeration delatlis with random data 




    await RegsiterationPage.completeRegistration({
        Fname: rondmData.getFirstName(),
        Lname: rondmData.getLastName(),
        Email: rondmData.getmail(),
        password: rondmData.getPassword()
    });

    await RegsiterationPage.setprivacyPolicy();

    await RegsiterationPage.setContinuebtn()

    const Message = await RegsiterationPage.checkConfirmationMsg()

    await expect(Message).toContain('Your Account Has Been Created!')
})
