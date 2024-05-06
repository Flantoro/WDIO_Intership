import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/MainPage.js'
import ContactUsPage from '../pageobjects/ContactUsPage.js'
import testData from '../fixtures/testData.js'

describe('Contact Us Page Tests', () => {

    it('"Talk to an expert" title shown on the Contact-Us page', async () => {
        await MainPage.clickContactUsButton();
        await expect (await ContactUsPage.getContactUsTitle).toBeDisplayed();
    })

    it('"Validation error is shown on the Contact Us page without specifying details', async () => {
        await MainPage.clickContactUsButton();
        await ContactUsPage.clickSubmitButton();
        await expect (await ContactUsPage.getValidationMessage).toBeDisplayed();
    })

    it('Open Report Abuse Form', async () => {
        await MainPage.clickContactUsButton();
        await ContactUsPage.scrollToReportAbuse();
        await ContactUsPage.clickReportAbuseButton();
        await expect(browser).toHaveUrl(testData.reportAbuseUrl);
    })
})