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
        //assertion to verify that the cart page is visible
        await expect(homePage.page).toHaveURL(/cart/);
    });

    test('navigate to contact link', async () => {
        await homePage.goToContact();
        //assertion to verify that the contact modal is visible
        await expect(homePage.contactModal).toBeVisible();
    });

    test('navigate to about us link', async () => {
        await homePage.goToAboutUs();
        //assertion to verify that the about us modal is visible
        await expect(homePage.aboutUsModal).toBeVisible();
    });

    test('navigate to log in link', async () => {
        await homePage.goToLogin();
        //assertion to verify that the login modal is visible
        await expect(homePage.loginModal).toBeVisible();
    });

    test('navigate to sign up link', async () => {
        await homePage.goToSignUp();
        //assertion to verify that the sign up modal is visible
        await expect(homePage.signUpModal).toBeVisible();
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

    test('Check homepage carousel next button moves to second slide', async () => {
    //then verify the "active" class changes as the carousel navigates.    
        await expect(homePage.firstSlide).toHaveClass(/active/);
        await homePage.clickNextCarousel();
        await expect(homePage.secondSlide).toHaveClass(/active/);
    });
    //verify the "active" class changes as the carousel navigates.
    test ('Check homepage carousel previous button moves to first slide', async () => {
        await expect(homePage.firstSlide).toHaveClass(/active/);
        await homePage.clickNextCarousel();
        await expect(homePage.secondSlide).toHaveClass(/active/);
        await homePage.clickPreviousCarousel();
        await expect(homePage.firstSlide).toHaveClass(/active/);
    });
});
