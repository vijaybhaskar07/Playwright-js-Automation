const { test, expect } = require("@playwright/test");
require("../pages/basePage");
const LoginPage = require("../pages/loginPage");
const DashboardPage = require("../pages/dashboardPage");

test("Logout Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
  await loginPage.login("Admin", "admin123");
  await loginPage.validateDashboardPagename();
  await loginPage.validateLogout();

  
});