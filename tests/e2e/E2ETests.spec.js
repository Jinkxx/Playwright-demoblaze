// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * End 2 End Tests
 * Tests workflows of the application from start to finish
*/
/**
test.describe('End 2 End Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the homepage before each test
        await page.goto('https://www.demoblaze.com/');
    });

    test('Check homepage to cart workflow', async ({ page }) => {
        // Click the cart link.
        await page.getByRole('link', { name: 'Cart' }).click();
        // Expect the cart page to be visible.
        const cartPage = page.locator('#page-wrapper');
        await expect(cartPage).toBeVisible();
    });

    test('Check homepage to contact workflow', async ({ page }) => {
        // Click the contact link.
        await page.getByRole('link', { name: 'Contact' }).click();  
        // Expect the contact page to be visible.
        const contactPage = page.locator('#page-wrapper');
        await expect(contactPage).toBeVisible();
    });

    test('Check homepage to about us workflow', async ({ page }) => {
        // Click the about us link.
        await page.getByRole('link', { name: 'About us' }).click();
        // Expect the about us page to be visible.
        const aboutUsPage = page.locator('#page-wrapper');
        await expect(aboutUsPage).toBeVisible();
    });
});
*/