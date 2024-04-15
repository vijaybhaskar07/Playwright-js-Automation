const { test, expect } = require("@playwright/test");
require("../pages/basePage");
require("../pages/commonHooks");
const LoginPage = require("../pages/loginPage");
const DashboardPage = require("../pages/dashboardPage");
const PIMPage = require("../pages/pimEmployeePage");
const AddEmployeePage = require("../pages/addEmployeePage");

test("Add and Delete Employee", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const pimPage = new PIMPage(page);
  const addEmployeePage = new AddEmployeePage(page);

  //await loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
  await loginPage.login("Admin", "admin123");
  await dashboardPage.navigateTo("PIM");
  await pimPage.navigateToAddEmployee();
  await addEmployeePage.addEmployee("Test", "Playwright");
  await pimPage.deleteEmployee("Test", "Playwright");
})

