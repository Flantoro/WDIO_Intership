import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/MainPage.js'
import SolutionsPage from '../pageobjects/SolutionsPage.js'

describe('Solutions Page Tests', () => {

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