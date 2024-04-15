const BasePage = require("./basePage");
const tdata = JSON.parse(JSON.stringify(require("../testData.json")))

class LoginPage extends BasePage {
  async navigate(url) {
    await this.page.goto(url);
  }
  async login(username, password) {
    await this.page.getByPlaceholder("Username").fill(tdata.username);
    await this.page.getByPlaceholder("Password").fill(tdata.password);
    await this.page.getByRole("button", { name: "Login" }).click();   
    
  
  }

  async validateDashboardPagename(){
    const pagename = await this.page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').textContent()
    console.log("The page name is "+pagename)

  }

  async validateErrorMessage (){
    const errorMessage = await this.page.locator("//p[contains(@class, 'alert-content-text')]").textContent()
    console.log("The error message is "+errorMessage)
  }
  
  async validateLogout(){
   
    await this.page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await this.page.locator("//a[contains(@href, 'logout')]").click();
    const loginPageTitle = await this.page.locator("//h5[@class='oxd-text oxd-text--h5 orangehrm-login-title']").textContent();
    console.log("The Loginpage Title is "+loginPageTitle)

  }

  async validateResetPassword(){
      await this.page.locator("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click();
      await this.page.locator("//input[@name='username']").fill('Admin');
      await this.page.locator("//button[contains(@class, 'reset')]").click();
      const resetPasswordMessage = await this.page.locator("//h6[contains(@class, 'forgot')]").textContent();
      console.log("The Reset Password Message is "+resetPasswordMessage)


  }

}

module.exports = LoginPage;