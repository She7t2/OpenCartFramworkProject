
import{Page ,  Locator } from "@playwright/test"
import {  logOutPage } from "./logOutPage"

export class MyAccountPage  { 

    private  readonly  page :Page ; 

    private readonly msgHeading  :Locator ; 

    private readonly  logoutBtn : Locator ;
     
    constructor (page : Page) { 
        this.page  = page  ; 

        this.msgHeading  = page.getByRole('heading', { level: 2, name: 'My Account' });
      
        this.logoutBtn =  page.getByRole ("link" ,{name :'Logout' , exact : true }) 

    }

     /**
     * Verifies if My Account page is displayed
     * @returns Promise<boolean> - Returns true if heading is visible
     */

        async isMyAccountPageExists(): Promise<boolean> {
        try {
            const isVisible = await this.msgHeading.isVisible();
            return isVisible;
        } catch (error) {
            console.log(`Error checking My Account page heading visibility: ${error}`);
            return false;
        }
    }


        /**
     * Clicks on Logout link
     * @returns Promise<LogoutPage> - Returns instance of LogoutPage
     */
    async clickLogout(): Promise<logOutPage> {
        try {
            await this.logoutBtn.click();
            return new logOutPage(this.page);
        } catch (error) {
            console.log(`Unable to click Logout link: ${error}`);
            throw error; // Re-throw the error to fail the test
        }
    }


     /**
     * Alternative method to return page exists using title
     * @returns Promise<boolean> - Returns true if page title matches
     */
    async getPageTitle(): Promise<string> {
        return (this.page.title());
    }
}