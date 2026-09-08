// @ts-check

// Should house all elements on the homepage for reuse in test cases

class HomePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;

        // Page elements
        this.logo = page.locator('#nava');
        this.categories = page.locator('.list-group-item');
        this.carousel = page.locator('#carouselExampleIndicators');
        this.footer = page.locator('footer');
        // Navigation links
        this.cartLink = page.getByRole('link', { name: 'Cart' });
        this.contactLink = page.getByRole('link', { name: 'Contact' });
        this.aboutUsLink = page.getByRole('link', { name: 'About Us' });
        this.loginLink = page.getByRole('link', { name: 'Login' });
        this.signUpLink = page.getByRole('link', { name: 'Sign Up' });
        // Category links
        // Carousel
    }
}

module.exports = {HomePage};
