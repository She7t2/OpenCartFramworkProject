
import { Page, Locator } from "@playwright/test"

export class registerationPage {

    private readonly page: Page;

    private readonly Fname: Locator;

    private readonly Lname: Locator;

    private readonly Email: Locator;

    private readonly Password: Locator;

    private readonly privacyPolicyCheckbox: Locator;

    private readonly continueBtn: Locator;


    private readonly msgConfirmation: Locator;



    constructor(page: Page) {
        this.page = page;

        this.Fname = page.locator("#input-firstname")

        this.Lname = page.locator("#input-lastname")

        this.Email = page.locator("#input-email")

        this.Password = page.locator("#input-password")

        this.privacyPolicyCheckbox = page.locator('input[name="agree"] ');

        this.continueBtn = page.getByRole("button", { name: 'Continue' })

        this.msgConfirmation = page.locator("h1:has-text('Your Account Has Been Created!')")

    }


    //Set user Data  


       async setFirstName  (firstName : string )  { 
      await  this.Fname .fill (firstName)
       }


       
       async setLastName  (lastNmae : string )  { 
      await  this.Lname .fill (lastNmae) 
       }

       
       
       async setEmail  (mail : string )  { 
      await  this.Email .fill (mail ) 
       }

       
       
       async setPasswrod  (password : string )  { 
      await  this.Password .fill (password) 
       }


    async completeRegistration(usrData: {

        Fname: string,
        Lname: string,
        password: string,
        Email: string

    }): Promise<void> {
        await this.Fname.fill(usrData.Fname)

        await this.Lname.fill(usrData.Lname)

        await this.Email.fill(usrData.Email)

        await this.Password.fill(usrData.password)
    }

    // check box 

    async setprivacyPolicy() {

        await this.privacyPolicyCheckbox.check() ;
    }


    // ste Continue btn 

    async setContinuebtn() {
        await this.continueBtn.click();
    }


    // check confirmation msg 

    async checkConfirmationMsg(): Promise<string> {
        return await this.msgConfirmation.textContent() ?? ' '

    }
}