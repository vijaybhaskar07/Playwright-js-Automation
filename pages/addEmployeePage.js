const BasePage = require("./basePage");

class AddEmployeePage extends BasePage {
  async addEmployee(firstName, lastName) {
    await this.page.getByPlaceholder("First Name").fill(firstName);
    await this.page.getByPlaceholder("Last Name").fill(lastName);
    await this.page.getByRole("button", { name: "Save" }).click();
    // Continue adding methods for interacting with the PIM page
  }
}

module.exports = AddEmployeePage;