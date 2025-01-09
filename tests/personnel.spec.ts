import { test, expect } from '@playwright/test';

test.describe('personnel', () => {
  test('view users and set', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.goto('https://qaweb.resgrid.dev/User/Home/Dashboard');
    await page.getByRole('link', { name: ' Personnel' }).click();
    await expect(page.locator('#personnelGroups_-1')).toContainText('Bill Hayden');
    await page.getByRole('treeitem', { name: ' Ungrouped Personnel' }).click();
    await expect(page.locator('#personnelGroups_0')).toContainText('Max Swift');
    await page.getByRole('button', { name: 'Set Staffing' }).nth(1).click();
    await page.locator('#PersonnelStaffingDropdown').selectOption('1');
    await page.locator('#savingPersonnelStaffingButton').click();
    await page.getByRole('treeitem', { name: ' Ungrouped Personnel' }).click();
    await page.getByRole('button', { name: 'Set Status' }).nth(1).click();
    await page.locator('#PersonnelStatusDropdown').selectOption('1');
    await page.locator('#savingPersonnelStatusButton').click();
  });

  test('view roles', async ({ page }) => {
    await page.goto('https://qaweb.resgrid.dev/Account/LogOn');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.PW_LOGIN_USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PW_LOGIN_PASSWORD);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('link', { name: ' Personnel' }).click();
    await page.getByRole('link', { name: 'Manage Roles' }).click();
    await expect(page.locator('tbody')).toContainText('Engineer');
    await page.getByRole('row', { name: 'Engineer Apparatuses Operator' }).getByRole('link').first().click();
    await expect(page.getByRole('rowgroup')).toContainText('Andy Biasotti');
  });
});