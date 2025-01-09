import { test, expect } from '@playwright/test';

test.describe('units', () => {
  test('view units list', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.getByRole('link', { name: ' Units' }).click();
    await expect(page.locator('#DataTables_Table_0')).toContainText('Engine 1');
    await page.getByRole('treeitem', { name: ' Ungrouped Units' }).click();
    await expect(page.locator('#DataTables_Table_1')).toContainText('BC Buggy');
  });

  test('set unit status', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.getByRole('link', { name: ' Units' }).click();
    await page.getByRole('treeitem', { name: ' Ungrouped Units' }).click();
    await page.getByRole('button', { name: 'Set Status' }).click();
    await page.locator('#UnitStatusDropdown').selectOption('3');
    await page.locator('#savingUnitStatusButton').click();
    await page.getByRole('treeitem', { name: ' Ungrouped Units' }).click();
    await expect(page.locator('#DataTables_Table_1')).toContainText('Committed');
  });
});