import { test, expect } from '@playwright/test';

test.describe('messages', () => {
  test('view inbox', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('link', { name: ' View Your Message Inbox' }).click();
    await expect(page.locator('tbody')).toContainText('Test for WebJob Worker');
    await page.getByRole('row', { name: 'test Carl Barrett 01/31/2016' }).locator('#message').check();
    await page.getByText('Mark Selected as Read').click();
    await page.getByRole('button', { name: 'OK' }).click();
  });

  test('inbox view message', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.goto('https://qaweb.resgrid.dev/User/Messages/Inbox');
    await page.getByRole('row', { name: 'test Carl Barrett 01/31/2016' }).getByRole('link').first().click();
    await expect(page.locator('h3')).toContainText('Subject: test');
  });

  test('inbox view outbox', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('link', { name: ' View Your Message Inbox' }).click();
    await page.getByRole('link', { name: ' Sent Messages' }).click();
    await expect(page.locator('tbody')).toContainText('Test Message');
  });

  test('send message', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('link', { name: ' View Your Message Inbox' }).click();
    await page.getByRole('link', { name: 'Compose Message' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Messages/Compose');
    await page.getByPlaceholder('The subject/title of the').click();
    await page.getByPlaceholder('The subject/title of the').fill('test automation');
    await page.locator('#editor-container div').first().click();
    await page.locator('#editor-container div').first().fill('just a test!');
    await page.locator('div:nth-child(3) > .k-widget > .k-multiselect-wrap > .k-input').click();
    await page.getByRole('option', { name: 'Carl Barrett' }).click();
    await page.getByRole('button', { name: ' Send' }).click();
  });
});