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
        this.phoneLink = page.getByRole('link', { name: 'Phones' });
        this.laptopsLink = page.getByRole('link', { name: 'Laptops' });
        this.monitorsLink = page.getByRole('link', { name: 'Monitors' });
        // Carousel
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.previousButton = page.getByRole('button', { name: 'Previous' });
    }
    // fyi. actions here include a click, which is a testable item (can a user click this navigation link?)
    // should any fail, then its likely the link is somehow inactive to the user
    async goTo() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async goToContact() {
        await this.contactLink.click();
    }

    async goToAboutUs() {
        await this.aboutUsLink.click();
    }

    async goToLogin() {
        await this.loginLink.click();
    }

    async goToSignUp() {
        await this.signUpLink.click();
    }

    async goToPhones() {
        await this.phoneLink.click();
    }

    async goToLaptops() {
        await this.laptopsLink.click();
    }

    async goToMonitors() {
        await this.monitorsLink.click();
    }
    
    async clickNextCarousel() {
        await this.nextButton.click();
    }

    async clickPreviousCarousel() {
        await this.previousButton.click();
    }
    
}

module.exports = {HomePage};
