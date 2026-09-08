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
    // Smoke tests validating homepage UI components expected

    test('check homepage title', async () => {
        await expect(homePage.page).toHaveTitle('STORE');
    });

    test('check homepage logo', async () => {
        await expect(homePage.logo).toBeVisible();
    });

    test('check homepage categories', async () => {
        await expect(homePage.categories).toHaveCount(4);
    });

    test('check homepage carousel', async () => {
        await expect(homePage.carouselContainer).toBeVisible();
    });

    test('check homepage footer', async () => {
        await expect(homePage.footer).toBeVisible();
    });

    // navigation tests from the homepage
    test('navigate to cart link', async () => {
        await homePage.goToCart();
    });

    test('navigate to contact link', async () => {
        await homePage.goToContact();
    });

    test('navigate to about us link', async () => {
        await homePage.goToAboutUs();
    });

    test('navigate to log in link', async () => {
        await homePage.goToLogin();
    });

    test('navigate to sign up link', async () => {
        await homePage.goToSignUp();
    });
//NEEDS ASSERTIONS
    test('navigate to phones link', async () => {
        await homePage.goToPhones();
    });

    test('navigate to laptops link', async () => {
        await homePage.goToLaptops();
    });

    test('navigate to monitors link', async () => {
        await homePage.goToMonitors();
    });

    test('Check homepage carousel controls', async () => {
        await expect(homePage.nextButton).toBeVisible();
        await expect(homePage.previousButton).toBeVisible();
    });
});
