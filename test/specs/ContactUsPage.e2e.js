import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/MainPage.js'
import ContactUsPage from '../pageobjects/ContactUsPage.js'

describe('Contact Us Page Tests', () => {
    
    beforeEach(async ()=> {
        await browser.setWindowSize(1920, 1080);
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookies();
    })

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
        await expect(browser).toHaveUrl('https://telnyx.com/report-abuse');
    })
})