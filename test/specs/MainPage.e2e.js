import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/MainPage.js'
import SignUpPage from '../pageobjects/SignUpPage.js'
import RandomData from '../helpers/RandomData.js'

describe('Main Page Tests', () => {
    
    beforeEach(async ()=> {
        await browser.setWindowSize(1920, 1080);
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookies();
    })

    it('"Download full coverage" message shown on the Global coverage page', async () => {
        await MainPage.scollToGlobalCoverageButton();
        await MainPage.clickGlobalCoverageButton();
        await expect (await MainPage.getDownloadFullCoverageText).toBeDisplayed();
    })

    it('Features section shown on the Our Network page', async () => {
        await MainPage.scrollToOurNetworkButton();
        await MainPage.clickOurNetworkButton();
        await MainPage.scrollToNetworkMapSection();
        await expect (await MainPage.getNetworkMapSection).toBeDisplayed();
    })

    it('Telnyx message discount shown on the Talnyx VS Twilio page', async () => {
        await MainPage.scrollToTelnyxVSTwilioButton();
        await MainPage.clickTelnyxVSTwilioButton();
        await MainPage.scrollToComparePricingSection();
        await expect(await MainPage.getComparePricingSection).toHaveText('Save 47% per message by switching to Telnyx');
    })

    it('Verify the email input on the main page', async () => {
        const email = await RandomData.generateRandomEmail();
        await MainPage.scrollToEmailInput();
        await MainPage.fillEmailInput(email);
        await MainPage.clickBottomSignUpButton();
        await expect(SignUpPage.getEmailInput).toHaveValue(email);
    })
})