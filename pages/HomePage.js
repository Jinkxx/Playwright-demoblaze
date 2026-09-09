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
         // should be looking for ".list-group-item", not the .list-group container div.
    //  The count of list group items are 4, this includes the title "Categories"
        this.categories = page.locator('.list-group-item');
        this.carouselContainer = page.locator('#carouselExampleIndicators');
        this.footer = page.locator('footer');
        // Navigation links
        this.cartLink = page.getByRole('link', { name: 'Cart' });
        this.contactLink = page.getByRole('link', { name: 'Contact' });
        this.aboutUsLink = page.getByRole('link', { name: 'About us' });
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.signUpLink = page.getByRole('link', { name: 'Sign up' });
        // Category links
        this.phonesLink = page.getByRole('link', { name: 'Phones' });
        this.laptopsLink = page.getByRole('link', { name: 'Laptops' });
        this.monitorsLink = page.getByRole('link', { name: 'Monitors' });
        // Carousel
        //in here I have to scope out the specific carousel to prevent other 'Next' buttons from being used
        //by its containerID, which is optimal considering I have the id= "carouselExampleIndicators"
        this.nextButton = this.carouselContainer.getByRole('button', { name: 'Next' });
        this.previousButton = this.carouselContainer.getByRole('button', { name: 'Previous' });
        //carousel slide containers/indicators
        // Locate each carousel slide by alt text
        this.firstSlide = this.carouselContainer
        .locator('.carousel-item')
        .filter({ has: page.getByAltText('First slide') });
        this.secondSlide = this.carouselContainer
        .locator('.carousel-item')
        .filter({ has: page.getByAltText('Second slide') });
        this.thirdSlide = this.carouselContainer
        .locator('.carousel-item')
        .filter({ has: page.getByAltText('Third slide') });
        // modals from homepage/ top banner
        this.contactModal = page.locator('#exampleModal');
        this.loginModal = page.locator('#logInModal');
        this.signUpModal = page.locator('#signInModal');
        this.aboutUsModal = page.locator('#videoModal');
    }
    // actions
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
        await this.phonesLink.click();
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
