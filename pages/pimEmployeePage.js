const BasePage = require("./basePage");

class PIMPage extends BasePage {
  async navigateToAddEmployee() {
    await this.page.getByRole("button", { name: " Add" }).click();
  }

  async deleteEmployee(firstName, lastName) {
    await this.page.getByRole("link", { name: "Employee List" }).click();
    await this.page.getByPlaceholder("Type for hints...")
      .first()
      .fill(firstName + " " + lastName);
    await this.page.getByRole("button", { name: "Search" }).click();
    await this.page
      .locator(".oxd-table-header-cell .oxd-checkbox-input-icon")
      .click();
    await this.page.getByRole("button", { name: " Delete Selected " }).click();
    await this.page.getByRole("button", { name: "Yes, Delete" }).click();
  }

  // Add other PIM page specific methods
}

module.exports = PIMPage;