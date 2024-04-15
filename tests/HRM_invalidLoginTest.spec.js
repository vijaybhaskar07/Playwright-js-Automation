const { test, expect } = require("@playwright/test");
require("../pages/basePage");
const LoginPage = require("../pages/loginPage");
const DashboardPage = require("../pages/dashboardPage");
const PIMPage = require("../pages/pimEmployeePage");
const AddEmployeePage = require("../pages/addEmployeePage");

test("invalid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
  await loginPage.login("Admin", "admin1234");
  await loginPage.validateErrorMessage();
  
});