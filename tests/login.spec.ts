import { test, expect } from '@playwright/test';

test('Go to Sauce Demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const username = page.getByPlaceholder('Username');
    const password = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });
    
    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Swag Labs')).toContainText('Swag Labs');
});