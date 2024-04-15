const { test, expect } = require("@playwright/test");
require("../pages/basePage");
require("../pages/commonHooks");


const LoginPage = require("../pages/loginPage");
const DashboardPage = require("../pages/dashboardPage");
const PIMPage = require("../pages/pimEmployeePage");
const AddEmployeePage = require("../pages/addEmployeePage");

test("Valid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  //await loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
  await loginPage.login();
  await loginPage.validateDashboardPagename();

  
})

  test.skip("Logout Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  //await loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
  await loginPage.login("Admin", "admin123");
  await loginPage.validateDashboardPagename();
  await loginPage.validateLogout(); 

  
});