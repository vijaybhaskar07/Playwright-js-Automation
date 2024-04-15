// @ts-check
const { test, expect } = require('@playwright/test');

test('OrangeHRM PIM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  //Log in by using valid credentials
  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')
  await page.locator('//button[@type="submit"]').click();
  await page.locator("//a[contains(@href, 'viewPimModule')]").click();
  const empPage = await page.locator('//h5[contains(@class, "oxd-text oxd-text--h5 oxd-table-filter-title")]').textContent()
  console.log("The page name is "+empPage)
  expect (empPage?.includes("Information")).toBeTruthy()
  expect(empPage==="Employee Information").toBeTruthy()



 

});