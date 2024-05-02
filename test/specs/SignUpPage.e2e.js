import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/MainPage.js'
import SignUpPage from '../pageobjects/SignUpPage.js'
import RandomData from '../helpers/RandomData.js'

describe('Sign Up Page Tests', () => {
    
    beforeEach(async ()=> {
        await browser.setWindowSize(1920, 1080);
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookies();
        await MainPage.clickSignUpButton();
    })

    it('Validation error message shown after registration details filled with 11 chars password', async () => {
        await SignUpPage.fillEmailInput(await RandomData.generateRandomEmail());
        await SignUpPage.fillFirstNameInput(await RandomData.generateRandomString());
        await SignUpPage.fillLastNameInput(await RandomData.generateRandomString());
        await SignUpPage.fillPasswordInput(await RandomData.generateRandomInvalidPassword());
        await SignUpPage.checkTermsAndConditionsCheckbox();
        await SignUpPage.clickSignUpButton();
        await expect(await SignUpPage.getMinPasswordValidationMessage).toBeDisplayed();
    })

    it('Validation errors shown if no credentials entered in Sign Up form', async () => {
        await SignUpPage.clickSignUpButton();
        await expect(await SignUpPage.getEmailValidationMessage).toBeDisplayed();
        await expect(await SignUpPage.getFirstNameValidationMessage).toBeDisplayed();
        await expect(await SignUpPage.getLastNameValidationMessage).toBeDisplayed();
        await expect(await SignUpPage.getPasswordValidationMessage).toBeDisplayed();
        await expect(await SignUpPage.getTermsAndConditionsValidationMessage).toBeDisplayed();
    })

    it('Validation error message shown after registration details filled except email', async () => {
        await SignUpPage.fillFirstNameInput(await RandomData.generateRandomString());
        await SignUpPage.fillLastNameInput(await RandomData.generateRandomString());
        await SignUpPage.fillPasswordInput(await RandomData.generateRandomPassword());
        await SignUpPage.checkTermsAndConditionsCheckbox();
        await SignUpPage.clickSignUpButton();
        await expect(await SignUpPage.getEmailValidationMessage).toBeDisplayed();
    })

    it('Validation message shown after registration form fulled in', async () => {
        await SignUpPage.fillEmailInput(await RandomData.generateRandomEmail());
        await SignUpPage.fillFirstNameInput(await RandomData.generateRandomString());
        await SignUpPage.fillLastNameInput(await RandomData.generateRandomString());
        await SignUpPage.fillPasswordInput(await RandomData.generateRandomPassword());
        await SignUpPage.checkTermsAndConditionsCheckbox();
        await SignUpPage.doubleClickSignUpButton();
        await expect(await SignUpPage.getValidationError).toBeDisplayed();
    })

    it('The conditions header shown on the "Terms & Conditions" page', async () => {
        await SignUpPage.clickTermsAndConditionsButton();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[handles.length - 1]);  
        await expect (await SignUpPage.getConditionsTitle).toBeDisplayed();
    })
})