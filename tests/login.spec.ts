import { test } from '@playwright/test';

test('Go to Sauce Demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const username = page.getByPlaceholder('Username');
    const loginButton = page.getByRole('button', { name: 'Login' });
});
