// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Homepage Tests
 * Tests all items on the homepage
*/

test.describe('Homepage Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the homepage before each test
        await page.goto('https://www.demoblaze.com/');
    });
    
    test('Check homepage title', async ({ page }) => {
        // Expect a title to be "STORE".
        await expect(page).toHaveTitle('STORE');
    });
});