// @ts-check
const { test, expect } = require('@playwright/test');

test('OrangeHRM PIMAddEmployee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  //Log in by using valid credentials
  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')
  await page.locator('//button[@type="submit"]').click();
  await page.locator("//a[contains(@href, 'viewPimModule')]").click();
  await page.locator("//a[contains(text(), 'Add Employee')]").click();
  await page.getByPlaceholder('First Name').fill('Rohit')
  await page.getByPlaceholder('Middle Name').fill('Gurunath')
  await page.getByPlaceholder('Last Name').fill('Sharma')
  await page.locator("//button[@type ='submit']").click();
  const empName = await page.locator("//a[contains(@href, 'viewPersonalDetails')]").textContent()
  console.log("The emp name is "+empName)
  expect (empName?.includes("Personal")).toBeTruthy()
  expect(empName==="Personal Details").toBeTruthy()
  page.close()



 

});