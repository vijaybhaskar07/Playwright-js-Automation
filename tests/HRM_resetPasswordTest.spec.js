const { test, expect } = require("@playwright/test");
require("../pages/basePage");
const LoginPage = require("../pages/loginPage");

test("Reset Password", async ({ page }) => {
  const loginPage = new LoginPage(page);  
  await loginPage.navigate("https://opensource-demo.orangehrmlive.com/");  
  await loginPage.validateResetPassword();
  page.close()

  
});