import { test, expect } from '@playwright/test';

test.describe('trainings', () => {
  test('view trainings list', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.getByRole('link', { name: ' Trainings' }).click();
    await expect(page.locator('tbody')).toContainText('Protocol training for ebola.');
    await page.getByRole('link', { name: 'View Training' }).nth(1).click();
    await expect(page.locator('#page-wrapper')).toContainText('11/10/2014');
  });
});