import { test, expect } from '@playwright/test';

test('mapping view map', async ({ page }) => {
  await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('link', { name: ' Mapping' }).click();
  await expect(page.getByTitle('Test Call')).toBeVisible();
  await expect(page.locator('ol')).toContainText('Mapping');
});

test('mapping new layer', async ({ page }) => {
  await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('link', { name: ' Mapping' }).click();
  await page.getByRole('link', { name: 'Manage Layers' }).click();
  await expect(page.locator('ol')).toContainText('Layers');
  await page.getByRole('link', { name: 'New Layer' }).click();
  await expect(page.locator('#newLayerForm')).toContainText('Name');
});