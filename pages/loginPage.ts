import {Page , Locator}  from "@playwright/test" 


export class  loginPage { 

private readonly page  :  Page  ; 

private readonly emailAddress : Locator  ;

private readonly password : Locator ; 

private readonly loginBtn : Locator ;


   private readonly txtErrorMessage: Locator;

constructor(page : Page)  {

    this.page = page  ; 

    this.emailAddress = page.locator("#input-email")
   
    this.password = page.locator ("#input-password") 
    
    this.loginBtn = page.getByRole ("button" ,{name : 'Login' ,exact : true})

    this.txtErrorMessage=page.locator('.alert.alert-danger.alert-dismissible');
 }


 
 // Actions 


  // set Email 

  async setEmail (email : string ) : Promise <void> {

     await this.emailAddress .fill(email)
  }


  //set password  

  async setPassword (password : string  ) : Promise<void> {

    await this.password.fill(password)
  }

  // click on login button


  async clickLogin() { 
    await this.loginBtn.click() ;
  }

   /**
     * Performs complete login action
     * @param email - Email address to enter
     * @param password - Password to enter
     */
    async login(email: string, password: string){

        await this.emailAddress.fill(email)

        await this.password.fill(password)

         await this.loginBtn.click() ;
    }
    
   async getloginErrorMessage():Promise<null | string>{
       
        return(this.txtErrorMessage.textContent());
    }
}
