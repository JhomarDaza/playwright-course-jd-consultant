import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjets/Loginpage';


test('purchase an item', async ({ page }) => {
    
  await page.goto('https://www.saucedemo.com/');
  const login = new LoginPage(page)
  await login.loginWhitCredentials('standard_user', 'secret_sauce')
  await login.checkSuccesfulLogin()

    const itemsContainer = await page.locator('#inventory_container .inventory_item').all()
    const randomIndex = Math.floor(Math.random() * itemsContainer.length)
    const randomItem = itemsContainer[randomIndex]

    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText()
    const expectedName = await randomItem.locator('.inventory_item_name').innerText()
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText()

    console.log(`Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDescription}`)

    await randomItem.getByRole( 'button', {name:'Add to cart'}).click()

    await page.locator('a.shopping_cart_link').click()

    expect(page.getByRole('button', {name: 'Checkout'})).toBeVisible()

    const actualName = await page.locator('.inventory_item_name').innerText()
    const actualDescription = await page.locator('.inventory_item_desc').innerText()
    const actualPrice = await page.locator('.inventory_item_price').innerText()

    expect(actualDescription).toEqual(expectedDescription)
    expect(actualName).toEqual(expectedName)
    expect(actualPrice).toEqual(expectedPrice)

    await page.getByRole( 'button', {name:'Checkout'}).click()

    await page.getByRole( 'textbox', {name:'First Name'}).fill('Goku')
    await page.getByRole( 'textbox', {name:'Last Name'}).fill('Prueba')
    await page.getByRole( 'textbox', {name:'Zip/Postal Code'}).fill('1010102')
    await page.getByRole( 'button', {name:'Continue'}).click()

    const checkoutName = await page.locator('.inventory_item_name').innerText()
    const checkoutDescription = await page.locator('.inventory_item_desc').innerText()
    const checkoutPrice = await page.locator('.inventory_item_price').innerText()

    expect(checkoutDescription).toEqual(expectedDescription)
    expect(checkoutName).toEqual(expectedName)
    expect(checkoutPrice).toEqual(expectedPrice)

    //await page.pause()

    await page.getByRole( 'button', {name:'Finish'}).click()

    await expect(page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible()


  });

  test('purchase an item 2', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const login = new LoginPage(page)
    await login.loginWhitCredentials('standard_user', 'secret_sauce')
    await login.checkSuccesfulLogin()

  });

  test('Navegar', async ({ page }) => {
    
    await page.goto(`${process.env.URL}`);

    await page.pause();

    await page.screenshot({path: 'screenshots/navegar.png', fullPage: true})

    /*await page.getByRole( 'textbox', {name:'Username'}).fill('standard_user')
    await page.getByRole( 'textbox', {name:'Password'}).fill('secret_sauce')
    await page.getByRole( 'button', {name:'Login'}).click()*/

  });