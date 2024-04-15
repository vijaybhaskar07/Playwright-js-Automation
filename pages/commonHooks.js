import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  //await loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 

});


test.afterAll(async ({ page }) => {
  await page.close();

})