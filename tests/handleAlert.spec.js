const{test, expect} = require("@playwright/test");

test('Handle Alert', async({page})=>{

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.on('dialog', async (alertWindow) => {
    expect(alertWindow.type()).toContain("alert")
    expect(alertWindow.message()).toContain("I am a JS Alert")
    await alertWindow.accept()

})

await page.locator("//button[text()='Click for JS Alert']").click()

})

test("Handle Confirm", async({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async (confirmWindow) => {
        expect(confirmWindow.type()).toContain("confirm")
        expect(confirmWindow.message()).toContain("I am a JS Confirm")
        await confirmWindow.dismiss()


})
await page.locator("//button[text()='Click for JS Confirm']").click()

})

test("Handle Prompt Window", async({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async (promptWindow) => {
        expect(promptWindow.type()).toContain("prompt")
        expect(promptWindow.message()).toContain("I am a JS prompt")
        await promptWindow.accept("Vijay")


})
await page.locator("//button[text()='Click for JS Prompt']").click()
await page.waitForTimeout(5000)

})