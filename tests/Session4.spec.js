// @ts-check
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  await page
  
     .locator("label")     
     .filter({hasText: "radio2"})
     .getByLabel("radio")
     .click();
        


  


});