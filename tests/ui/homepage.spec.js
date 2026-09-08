// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');

/**
 * Homepage Tests
 * Tests all items on the homepage
*/

test.describe('Homepage Tests', () => {
    /** @type {HomePage} */
    let homePage;

    test.beforeEach(async ({ page }) => {
        // Go to the homepage before each test
        homePage = new HomePage(page);
        await homePage.goTo();
    });

    test('check homepage title', async () => {
        await expect(homePage.page).toHaveTitle('STORE');
    });
});
