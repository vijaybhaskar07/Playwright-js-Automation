// @ts-check
const { test, expect } = require('@playwright/test');

test('EOL Login', async ({ page }) => {
  await page.goto('http://localhost/EOLDev/');

  //Log in by using CustomerTradeAurora1

  await page.getByPlaceholder('User name').fill('CustomerTradeAurora1')
  await page.locator('//*[@id="LoginForm_btnSave"]').click();
  await page.getByPlaceholder('Password').fill('Online!123')
  await page.locator('//*[@id="LoginForm_btnSave"]').click();
  await page.locator('//*[@id="Arrow"]').click();
  await page.locator('//*[@id="DivisionMasterData"]').click();
  const allFrames = page.frames()
  console.log("Number of Frames:", allFrames.length)

  const iframe = await page.frameLocator("//iframe[@name='MainWindow']")
  await iframe.locator("//a[@name='MnuBPAFlows']").click();
  await page.waitForTimeout(5000);
  await iframe.locator("//button[@id='btnImport']").click();
  //await iframe.locator("//input[@name='File']").click();
  await iframe.locator("input[type='file']").setInputFiles("./testData/Account_MultiActions.xml");
  await iframe.locator("//button[@id='btnImport']").click();
  const successMeaasge = await iframe.locator("//span[contains(text(), 'imports')]").textContent()
  console.log("The message is " + successMeaasge);

});