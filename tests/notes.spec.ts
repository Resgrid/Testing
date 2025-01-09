import { test, expect } from '@playwright/test';

test.describe('notes', () => {
  test('view notes list', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('link', { name: ' Notes' }).click();
    await expect(page.locator('#page-wrapper')).toContainText('Jj test');
    await page.getByRole('link', { name: 'New Note' }).click();
    await expect(page.locator('#newNoteForm')).toContainText('Category');
    await page.getByText('Title Category None Body').click();
  });
});