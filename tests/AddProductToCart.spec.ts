/**
 * Test Case : Add Product to cart ! 
 * 1)Navigate to the url 
 * 2)Enter exsiting Prodcut name in the search box
 * 3)click on search btn 
 * 4)verify the product appers in the seacrh result  
 * 5)select the  Prodcut
 * 6) set qauntity 
 * 7) add prodcut to cart 
 * 8) verify  the succes message 
 * 
 * 
 */

import { test, expect } from "@playwright/test"

import { TestConfig } from "../test.config"

import { HomePage  } from "../pages/HomePage"
 
import { SearchResultsPage } from "../pages/SearchResultsPage"

import { ProductPage } from "../pages/ProductPage"

let config : TestConfig ; 

let homePage : HomePage  ; 

let SeacrhResult : SearchResultsPage ; 

let prodcutPage  :  ProductPage  ; 

test.beforeEach (async({page}) =>  {
    
    config = new TestConfig () ; 

    await page.goto (config.appUrl) ; 
 
    homePage = new HomePage ( page)
    
    SeacrhResult  = new SearchResultsPage (page) 

    prodcutPage = new ProductPage (page) 
})

test.afterEach (async({page})=>{
   await  page.close ()
})


test ("Add Product To Cart " , async ({}) => { 


    
await homePage.entrProdctName(config.productName) 

    await homePage.clickOnSeaechBtn () ;
     
       //  Verify if the search results page exists 
   
        expect ( await SeacrhResult.isSearchResultsPageExists()).toBe(true)
   
   
        //Check if a product exists in the search results by its name 
   
       const isProdcutNameFound = await SeacrhResult.isProductExist(config.productName) 
   
       expect (isProdcutNameFound).toBeTruthy()


       
    if (await SeacrhResult.isProductExist(config.productName)) { 

       await SeacrhResult.selectProduct(config.productName) 

       await  prodcutPage.setQuantity (config.productQuantity) 
       await prodcutPage.addToCart()
    }
await prodcutPage.clickViewCart()

await prodcutPage.clickViewCart()
    expect ( await prodcutPage.isConfirmationMessageVisible()).toBeTruthy ()
})