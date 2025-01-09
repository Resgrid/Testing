import { test, expect } from '@playwright/test';

test.describe('inventory', () => {
  test('view inventory', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('link', { name: ' Inventory' }).click();
    await expect(page.locator('tbody')).toContainText('Station 2');
    await page.getByRole('link', { name: 'View History' }).click();
    await expect(page.locator('tbody')).toContainText('523');
    await page.getByRole('link', { name: 'Inventory', exact: true }).click();
    await page.getByRole('link', { name: 'Adjust Inventory' }).click();
    await expect(page.getByRole('form')).toContainText('Unit');
    await page.getByRole('link', { name: 'Inventory', exact: true }).click();
    await page.getByRole('link', { name: 'Manage Types' }).click();
    await expect(page.locator('tbody')).toContainText('Packet');
  });
});