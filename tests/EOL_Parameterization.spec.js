
const { test, expect } = require('@playwright/test');
const tuser = JSON.parse(JSON.stringify(require("../testlogin.json")))

test.describe("Data Driven Login Test", function () 
{

    for (const data of tuser) {
        test.describe(`Login with Users ${data.id}`, function ()
         {

            test('EOL Login Parameterization', async ({ page }) => {

                await page.goto("http://localhost/EOLDev/")
                await page.locator("//input[@id='LoginForm_UserName']").fill(data.username)
                await page.locator('//*[@id="LoginForm_btnSave"]').click();
                await page.waitForTimeout(5000)
                await page.locator("//input[@id='LoginForm_Password']").fill(data.password)
                await page.locator('//*[@id="LoginForm_btnSave"]').click();
                await page.waitForTimeout(3000)
                await page.locator("//span[@id='MyArrow']").click();
                await page.locator("//a[@id='LogOffLink']").click();
                await page.waitForTimeout(3000)


            })

        })

    }
})