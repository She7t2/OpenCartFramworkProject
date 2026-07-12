/**
 * Test Case  : search Product  
 * 
 * tages : @master @regression 
 * 
 * Steps  : 
 * 1) Naviagte to App Url 
 * 2) entr the Product Name in the Search fild
 * 3) click on seacrh btn 
 * 4) vefify prodcut name is dispalyed in test result 
 * 
 * 
 */


import {test , expect }  from "@playwright/test" 

import { HomePage } from "../pages/HomePage"

import { SearchResultsPage } from "../pages/SearchResultsPage" 


import { TestConfig } from "../test.config" 

import { ProductPage } from "../pages/ProductPage";


let config : TestConfig  ; 

let homePage : HomePage   ; 

export let SeacrhResult : SearchResultsPage ;


test.beforeEach (async ({page} )=> { 
    config = new TestConfig () 
    await page.goto(config.appUrl) ; 

    homePage = new HomePage(page) 

    SeacrhResult = new SearchResultsPage(page) 
})

test.afterEach (async({page}) => {
   await  page.close ()
})


test("Product Search test @master  @regression" , async ({})=>{
    

    await homePage.entrProdctName(config.productName ) 

    await homePage.clickOnSeaechBtn () ;
  
    //  Verify if the search results page exists 

     expect (await SeacrhResult.isSearchResultsPageExists()).toBeTruthy ()


     //Check if a product exists in the search results by its name 

    const isProdcutNameFound = await SeacrhResult.isProductExist(config.productName) 

    expect (isProdcutNameFound).toBeTruthy()



})
