// @ts-check
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


  // By TagName
  await page.locator("header")

  // By ID
  await page.locator("#select-class-example")

  await page.locator("mousehover")

  // By Class Name

  await page.locator(".mouse-hover")

  //By Multiple classes

  await page.locator(".ui-menu ui-widget.ui-widget-content.ui-autocomplete ui-front")


  await page.getByTitle("Practice Page")




});