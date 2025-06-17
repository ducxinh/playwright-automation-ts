import { expect, test } from '@playwright/test';


test('test', async ({ page }) => {
  const email = `ducxinh+${Date.now()}@gmail.com`
  await page.goto('https://dummy-demo-njndex.web.app/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('nguyen duc xinh');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('ducxinh006@gmail.com');
  await page.getByRole('textbox', { name: 'Password *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('secret');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('secret');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).press('ControlOrMeta+ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('Alt+ArrowRight');
  await page.getByRole('textbox', { name: 'Email *' }).fill(email);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('heading', { name: 'My Profile' })).toBeVisible();
  await expect(page.getByRole('main').locator('input[type="text"]')).toHaveValue('nguyen duc xinh');
  await expect(page.locator('input[type="email"]')).toHaveValue(email);
  await page.screenshot({ path: 'tests/screenshots/signup-generated.png' });
});