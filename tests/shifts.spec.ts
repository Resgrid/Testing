import { test, expect } from '@playwright/test';

test.describe('shifts', () => {
  test('view shifts', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('link', { name: 'Shifts' }).click();
    await expect(page.getByRole('cell', { name: 'S Shift' })).toBeVisible();
    await expect(page.locator('tbody')).toContainText('S Shift');
    await page.getByRole('link', { name: 'Your Shifts' }).click();
    await expect(page.getByRole('cell', { name: 'S Shift' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrapper')).toContainText('S Shift');
    await page.getByRole('link', { name: 'Shifts', exact: true }).click();
  });
});