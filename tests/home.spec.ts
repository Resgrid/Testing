import { test, expect } from '@playwright/test';

test('home test status and staffing', async ({ page }) => {
  await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
  await expect(page.locator('body')).toContainText('Enter your username and password to login.');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
  await page.getByRole('button', { name: 'Log On' }).click();
  await expect(page.getByRole('rowgroup')).toContainText('Shawn Jackson');
  await page.getByRole('link', { name: 'Standing By', exact: true }).click();
  await expect(page.getByRole('rowgroup')).toContainText('Standing By');
  await page.getByRole('link', { name: 'Responding', exact: true }).click();
  await expect(page.getByRole('rowgroup')).toContainText('Responding');
  await page.getByRole('button', { name: 'Set Staffing Level' }).click();
  await expect(page.getByRole('rowgroup')).toContainText('Available');
  await page.locator('#UserStateEnum').selectOption('Unavailable');
  await page.getByRole('button', { name: 'Set Staffing Level' }).click();
  await expect(page.getByRole('rowgroup')).toContainText('Unavailable');
});