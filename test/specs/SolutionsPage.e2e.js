import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/MainPage.js'
import SolutionsPage from '../pageobjects/SolutionsPage.js'

describe('Contact Us Page Tests', () => {
    
    beforeEach(async ()=> {
        await browser.setWindowSize(1920, 1080);
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookies();
    })

    it('Travel title shown on the "Travel and Hospitality" page', async () => {
        await MainPage.clickSolutionsButton();
        await SolutionsPage.scrollToTravelSection();
        await SolutionsPage.clickTravelSection();
        await expect(SolutionsPage.getTravelMainTitle).toBeDisplayed();
    })

    it('Main title shown on the Solutions page', async () => {
        await MainPage.clickSolutionsButton();
        await expect(SolutionsPage.getMainTitle).toBeDisplayed();
    })
})