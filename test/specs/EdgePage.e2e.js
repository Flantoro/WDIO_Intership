import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/MainPage.js'
import EdgePage from '../pageobjects/EdgePage.js'
import RandomData from '../helpers/RandomData.js'

describe('Edge Page Tests', () => {
    
    beforeEach(async ()=> {
        await browser.setWindowSize(1920, 1080);
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookies();
    })

    xit('Kelsie Anderson profile picture shown on the Edge page', async () => {
        await expect(MainPage.getResourcesButton).toBeClickable();
        await MainPage.clickResourcesButton();
        await MainPage.clickBlogButton();
        await MainPage.clickArticleButton();
        await expect(await EdgePage.getKelsieProfilePicture).toBeDisplayed();
    })

    xit('Success message shown after subscribing for a latest articles via Edge page', async () => {
        await expect(MainPage.getResourcesButton).toBeClickable();
        await MainPage.clickResourcesButton();
        await MainPage.clickBlogButton();
        await MainPage.clickArticleButton();
        await EdgePage.scrollToEmailInput();
        await EdgePage.fillEmailInput(await RandomData.generateRandomEmail());
        await EdgePage.clickSubscribeButton();
        await expect(await EdgePage.getSuccesMessage).toBeDisplayed();
    })

    xit('Related articles section is present on the Edge page', async () => {
        await expect(MainPage.getResourcesButton).toBeClickable();
        await MainPage.clickResourcesButton();
        await MainPage.clickBlogButton();
        await MainPage.clickArticleButton();
        await EdgePage.scrollToAllArticleSection();
        await expect (await EdgePage.getAllAcrticlesSection).toBeDisplayed();
    })

    xit('Main title is present on the Blog page', async () => {
        await expect(MainPage.getResourcesButton).toBeClickable();
        await MainPage.clickResourcesButton();
        await MainPage.clickBlogButton();
        await expect(EdgePage.getMainTitle).toBeDisplayed();
    })
})