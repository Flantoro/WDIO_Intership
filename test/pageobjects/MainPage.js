class MainPage {

  get getDownloadFullCoverageText(){
      return $('main div div div p');
  }

  get getNetworkMapSection(){
      return $('[id="network-map-section"]');
  }

  get getResourcesButton(){
      return $('[id="radix-:Rmljm:"]');
  }

  get getComparePricingSection(){
    return $('[id="radix-:R19d3llm:"] p strong');
  }

  async scrollToComparePricingSection(){
      this.getComparePricingSection.scrollIntoView();
  }

  async clickResourcesButton(){
      (await this.getResourcesButton).click();
  }

  async clickArticleButton(){
      $('[href="/resources/enterprise-cloud-data-storage"]').click();
  }

  async clickBlogButton(){
      $('[href="/resources"]').click();
  }

  async scrollToNetworkMapSection(){
      this.getNetworkMapSection.scrollIntoView();
  }

  async scrollToOurNetworkButton(){
      $('footer [href="/our-network"]').scrollIntoView();
  }

  async scrollToEmailInput(){
      $('[id="email"]').scrollIntoView();
  }

  async clickOurNetworkButton(){
      $('footer [href="/our-network"]').click();
  }

  async scollToGlobalCoverageButton(){
      $('footer [href="/global-coverage"]').scrollIntoView();
  }

  async clickGlobalCoverageButton(){
      $('footer [href="/global-coverage"]').click();
  }

  async scrollToExploreText(){
      $('[action="/sign-up"]').scrollIntoView();
  }

  async clickAcceptCookies(){
      $('[id="onetrust-accept-btn-handler"]').click();
  }

  async clickSolutionsButton(){
      $('[href="/solutions"]').first().click();
  }

  async clickContactUsButton(){
      $('[href="/contact-us"]').click();
  }

  async clickSignUpButton(){
      $('[id="header-sign-up"]').click();
  }

  async fillEmailInput(email){
      $('[id="email"]').setValue(email);
  }

  async clickBottomSignUpButton(){
      $('[action="/sign-up"] button').click();
  }

  async scrollToTelnyxVSTwilioButton(){
      $('[href="/the-better-twilio-alternative"]').scrollIntoView();
  }

  async clickTelnyxVSTwilioButton(){
      $('[href="/the-better-twilio-alternative"]').click();
  }

}

export default new MainPage();
