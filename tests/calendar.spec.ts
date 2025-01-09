import { test, expect } from '@playwright/test';

test.describe('calendar', () => {
  test('view calendar and types', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.getByRole('link', { name: 'Calendar' }).click();
    await expect(page.locator('#page-wrapper')).toContainText('Training');
    await page.getByRole('link', { name: 'Manage Types' }).click();
    await expect(page.locator('tbody')).toContainText('#bf4a4a');
  });
});