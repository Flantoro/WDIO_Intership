import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/MainPage.js'
import SignUpPage from '../pageobjects/SignUpPage.js'
import RandomData from '../helpers/RandomData.js'
import testData from '../fixtures/testData.js'

describe('Main Page Tests', () => {
    
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
        await expect(await MainPage.getComparePricingSection).toHaveText(testData.telnyxDiscountMessage);
    })

    it('Main title present on the Telnyx VS Twilio page', async () => {
        await MainPage.scrollToTelnyxVSTwilioButton();
        await MainPage.clickTelnyxVSTwilioButton();
        await expect(MainPage.getMainTwilioTitle).toBeDisplayed();
    })

    it('Main title present on Terms and Conditions page', async () => {
        await MainPage.scrollToTermsAndConditionsButton();
        await MainPage.clickTermsAndConditionsButton()
        await expect(MainPage.getTermsAndConditionsMainTitle).toBeDisplayed();
    })

    it('Verify the email input on the main page', async () => {
        const email = await RandomData.generateRandomEmail();
        await MainPage.scrollToEmailInput();
        await MainPage.fillEmailInput(email);
        await MainPage.clickBottomSignUpButton();
        await expect(SignUpPage.getEmailInput).toHaveValue(email);
    })
})