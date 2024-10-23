import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {

    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly shoppingCarIcon: Locator

    constructor (page: Page){
        this.usernameTextbox = page.getByRole( 'textbox', {name:'Username'})
        this.passwordTextbox = page.getByRole( 'textbox', {name:'Password'})
        this.loginButton = page.getByRole( 'button', {name:'Login'})
        this.shoppingCarIcon = page.locator("xpath=//a[contains{@class, 'shopping_cart_link'}]")

    }

    async fillUsername(username: string){
       await this.usernameTextbox.fill(username)
    }

    async fillPassword(password: string){
       await this.passwordTextbox.fill(password)
        
    }

    async clickOnLogin(){
       await this.loginButton.click()
    }

    async loginWhitCredentials(username: string, password: string){
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }

    async checkSuccesfulLogin(){
        expect(this.shoppingCarIcon).toBeVisible
    }


}

export class tablePage{

    page: Page;

    private readonly countriesTable: Locator
    //await page.locator("xpath=//table[@id='countries']")

    constructor(page: Page){
        this.countriesTable = page.locator("xpath=//table[@id='countries']")
        this.page = page
    }

    async findTeable(){
        await this.countriesTable.isEnabled()
    }
}