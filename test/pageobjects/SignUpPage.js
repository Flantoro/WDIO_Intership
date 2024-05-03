class SignUpPage{

  get getEmailValidationMessage(){
      return $('[id="email_message"]');
  }

  get getMinPasswordValidationMessage(){
      return $('[id="passwordMinLength"]');
  }

  get getRecaptchaError(){
      return $('[aria-describedby="error"]');
  }

  get getConditionsTitle(){
      return $('[contenttype="heroOverview"] h1');
  }

  get getFirstNameValidationMessage(){
      return $('[id="first_name_message"]');
  }

  get getLastNameValidationMessage(){
      return $('[id="last_name_message"]');
  }

  get getPasswordValidationMessage(){
      return $('[id="password_message"]');
  }

  get getTermsAndConditionsValidationMessage(){
      return $('[id="terms_and_conditions_message"]');
  }

  get getEmailInput(){
      return $('[id="email"]');
  }

  get getValidationError(){
      return $('[id="error"]');
  }

  get getOneLastStepMessage(){
    return $('main h1');
  }

  async fillEmailInput(email){
    (await $('[id="email"]')).setValue(email);
  }

  async fillFirstNameInput(firstName){
    (await $('[id="first_name"]')).setValue(firstName);
  }

  async fillLastNameInput(lastName){
    (await $('[id="last_name"]')).setValue(lastName);
  }

  async fillPasswordInput(password){
    (await $('[id="password"]')).setValue(password);
  }

  async checkTermsAndConditionsCheckbox(){
    (await $('[id="terms_and_conditions"]')).click();
  }

  async clickSignUpButton(){
    await $('[type="submit"]').click();
  }

  async doubleClickSignUpButton(){
      $('[type="submit"]').click();
      await browser.pause(100);
      $('[type="submit"]').click();
  }

  async clickTermsAndConditionsButton(){
      const element = await $('[href="https://telnyx.com/legal/terms-and-conditions-of-service/terms-and-conditions-of-service-2023-09-26"]');
      await element.click();
  }
}

export default new SignUpPage();