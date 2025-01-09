import { test, expect } from '@playwright/test';

test.describe('reports', () => {
  test('view personnel report', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.getByRole('link', { name: ' Reports' }).click();
    await expect(page.locator('ol')).toContainText('Reporting');
    await page.getByRole('row', { name: 'Personnel Report View all the' }).getByRole('link').nth(1).click();
    await expect(page.getByRole('heading')).toContainText('Resgrid Personnel Report');
  });
});