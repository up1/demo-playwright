// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://demo-frontend-reactjs.vercel.app/');
  await expect(page).toHaveTitle('Vite + React');
});

test('Check h1 text', async ({ page }) => {
  await page.goto('https://demo-frontend-reactjs.vercel.app/');
  const h1Text = await page.textContent('h1');
  expect(h1Text).toBe('Call REST API');
});

test('Check p tag text', async ({ page }) => {
  await page.goto('https://demo-frontend-reactjs.vercel.app/');
  
  await page.waitForSelector('p');
  const pText = await page.textContent('p');
  expect(pText).toBe('Hello World!');
});
