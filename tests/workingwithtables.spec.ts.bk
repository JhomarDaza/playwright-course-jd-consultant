import { test } from '@playwright/test';
import { LoginPage, tablePage } from './pageobjets/Loginpage';

test('test web table', async ({ page }) => {
    
    await page.goto ('https://cosmocode.io/automation-practice-webtable/');

    const tableCotainer = new tablePage(page)
    await tableCotainer.findTeable()
    //const tableCotainer = await page.locator("xpath=//table[@id='countries']")

    const rows = await tableCotainer.page.locator("xpath=.//tr").all()

    const countries: Country [] = []

    console.log(rows.length)

   for (let row of rows) {
        let country: Country ={
            name: await row.locator('xpath=.//td[2]').innerText(),
            capital: await row.locator('xpath=.//td[3]').innerText(),
            currency: await row.locator('xpath=.//td[4]').innerText(),
            primaryLenguage: await row.locator('xpath=.//td[5]').innerText()
        }

        countries.push(country)
    
    //console.log(await row.innerText())
        
    }

    // for para imprimir el arreglo
    /*for(let seeCountry of countries){
        console.log(seeCountry);
        
    }*/

    const countryWherePeopleSpeakPortuguese = countries.filter(country => country.primaryLenguage === 'Portuguese')
    console.log('Contries where people speak portuguese', countryWherePeopleSpeakPortuguese);
    
   /*const row1 = rows.at(1)

   const countryName = await row1?.locator('xpath=.//td[2]').innerText()
   const countryCapital = await row1?.locator('xpath=.//td[3]').innerText()
   const countryCurrency = await row1?.locator('xpath=.//td[4]').innerText()

   console.log(countryName, countryCapital, countryCurrency);*/
   
  });

  interface Country{
    name: string
    capital: string
    currency: string
    primaryLenguage: string
  }

  /*
  
  Elemento conteiner: //table[@id='countries']
  Filas: //tr
  Check:            //table[@id='countries']//tr[3]//td[1]
  Country:          //table[@id='countries']//tr[3]//td[2]
  Capital:          //table[@id='countries']//tr[3]//td[3]
  Currency:         //table[@id='countries']//tr[3]//td[4]
  Primary lenguage: //table[@id='countries']//tr[3]//td[5]
  */