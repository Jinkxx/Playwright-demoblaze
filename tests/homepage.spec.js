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

    test('Check homepage logo', async ({ page }) => {
        // Expect the homepage logo to be visible.
        const logo = page.locator('#nava');
        await expect(logo).toBeVisible();
    });
    // should be looking for ".list-group-item", not the .list-group container div.
    //  The count of list group items are 4, this includes the title "Categories"
    test('Check homepage categories', async ({ page }) => {
        // Expect the homepage categories to be visible.
        const categories = page.locator('.list-group-item');
        await expect(categories).toHaveCount(4);
    });

    test('Check homepage carousel', async ({ page }) => {
        // Expect the homepage carousel to be visible.
        const carousel = page.locator('#carouselExampleIndicators');
        await expect(carousel).toBeVisible();
    });

    test('Check homepage footer', async ({ page }) => {
        // Expect the homepage footer to be visible.
        const footer = page.locator('footer');
        await expect(footer).toBeVisible();
    });

    test('Check homepage contact link', async ({ page }) => {
        // Click the contact link.
        await page.getByRole('link', { name: 'Contact' }).click();  
    });

    test('Check homepage about us link', async ({ page }) => {
        // Click the about us link.
        await page.getByRole('link', { name: 'About us' }).click();  
    });

    test('Check homepage cart link', async ({ page }) => {
        // Click the cart link.
        await page.getByRole('link', { name: 'Cart' }).click();  
    });

    test('Check homepage login link', async ({ page }) => {
        // Click the login link.
        await page.getByRole('link', { name: 'Log in' }).click();  
    }); 

    test('Check homepage sign up link', async ({ page }) => {
        // Click the sign up link.
        await page.getByRole('link', { name: 'Sign up' }).click();  
    });

    test('Check homepage categories links', async ({ page }) => {
        // Click the categories links.
        await page.getByRole('link', { name: 'Phones' }).click();  
        await page.getByRole('link', { name: 'Laptops' }).click();  
        await page.getByRole('link', { name: 'Monitors' }).click();  
    });
    
    test('Check homepage carousel controls', async ({ page }) => {
        // Click the carousel controls.
        await page.getByRole('button', { name: 'Next' }).click();  
        await page.getByRole('button', { name: 'Previous' }).click();  
    });

    test('Check homepage carousel indicators', async ({ page }) => {
        // Click the carousel indicators.
        await page.getByRole('button', { name: 'Slide 1' }).click();  
        await page.getByRole('button', { name: 'Slide 2' }).click();  
        await page.getByRole('button', { name: 'Slide 3' }).click();  
    });
    
    test('Check homepage carousel images', async ({ page }) => {
        // Expect the homepage carousel images to be visible.
        const carouselImages = page.locator('.carousel-inner img');
        await expect(carouselImages).toHaveCount(3);
    });

    test('Check homepage carousel captions', async ({ page }) => {
        // Expect the homepage carousel captions to be visible.
        const carouselCaptions = page.locator('.carousel-caption');
        await expect(carouselCaptions).toHaveCount(3);
    });

});