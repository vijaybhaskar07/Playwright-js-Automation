const {test, expect} = require("@playwright/test")

test ('Drop down values', async ({page}) => {

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label:"Goa"})

    await page.waitForTimeout(5000)

    await page.locator("#state").selectOption({value:"Karnataka"})

    await page.waitForTimeout(3000)

    await page.locator("#state").selectOption({index:5})

    const value = await page.locator("#state").textContent()

    console.log("Drop down values are "+value);

    await expect(value.includes("Karnataka")).toBeTruthy()

    await page.locator("#hobbies").selectOption(['Playing', 'Reading'])

   
})