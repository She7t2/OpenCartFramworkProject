import { Locator, Page } from "@playwright/test"

import { HomePage } from "./HomePage"


export class logOutPage {
    private readonly page: Page

    private readonly continueBtn: Locator;


    constructor(page: Page) {
        this.page = page;

        this.continueBtn = page.getByRole("link", { name: 'Continue', exact: true })

    }


    //Actions 

    /* CLick on Continue Button After Log out  
      to navigate home page 
    */

      async clickContiue () : Promise<HomePage>
{
    await this.continueBtn.click () ;
    return new HomePage(this.page) 
}}