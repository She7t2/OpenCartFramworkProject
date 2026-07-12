import { Locator, Page } from "@playwright/test"



export class HomePage {

  private readonly page: Page;
  //Locators 

  private readonly MyAccountLink: Locator;

  private readonly RegisterLink: Locator;

  private readonly LoginLink: Locator;

  private readonly textSearchBox: Locator;

  private readonly btnSearch: Locator;



  // Constructor  

  constructor(page: Page) {


    this.page = page;

    this.MyAccountLink = page.locator('span').filter({ hasText: 'My Account' } )

    this.RegisterLink = page.getByRole('link', { name: 'Register', exact: true });

    this.LoginLink = page.getByRole("link", { name: 'Login', exact: true })

    this.textSearchBox = page.getByRole('textbox', { name: /Search/i })

    this.btnSearch = page.locator(".btn.btn-light.btn-lg")
  }


  //Actions  


  // checks if HomePage Exists
  async isHomePageExists() {

    const Title: string = await this.page.title();

    if (Title) {
      return true
    }

    else
      return false;
  }


  // Click "My Acount " Link

  async clickMyAccountLink() {

    try {
      await this.MyAccountLink.click()
    }
    catch (error) {
      console.log(`Exception Occured While Clicking 'My Account ' :  ${error}'`)
      throw error
    }
  }


  //Click On Regsiter Link  

  async ClickOnRegsiterLink() {

    try {
      await this.RegisterLink.click();
    }

    catch (error) {
      console.log(`Exception While Clicking on RegisterLink: ${error}  `)
      throw error;
    }
  }



  //clikc on Log in  link 


  async ClickOnLoginLink() {
    try {
      await this.LoginLink.click()
    }

    catch (error) {
      console.log(`Exception While Clicking on LginLink: ${error}  `)
      throw error;
    }

  }


  // enetr Product Name to text box  (search Faild )


  async entrProdctName(productName: string) {
    try {
      if (await this.textSearchBox.isVisible()) {

        await this.textSearchBox.clear();

        await this.textSearchBox.fill(productName)
      }

    }
    catch (error) {

      console.log(`Exception While Entring Pname : ${error}  `)
      throw error
    }


  }


  // Click on seacrh btn  

  async clickOnSeaechBtn() {
    try {
      await this.btnSearch.click()
    }

    catch (error) {
      console.log(`Exception While Clicking On Search btn  : ${error}  `)
    }

  }
}  