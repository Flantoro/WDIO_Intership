class ContactUsPage{
    get getContactUsTitle(){
        return $('[title="Contact us"] h1');
    }

    get getReasonForContact(){
        return $('[id="Reason_for_Contact__c"]');
    }

    get getValidationMessage(){
        return $('[id="ValidMsgReason_for_Contact__c"]');
    }

    async clickSubmitButton(){
        $('[type="submit"]').click();
    }

    async scrollToReportAbuse(){
        (await $('div>a[href="https://telnyx.com/report-abuse"]')).scrollIntoView();
    }

    async clickReportAbuseButton(){
        (await $('div>a[href="https://telnyx.com/report-abuse"]')).click();
    }
}

export default new ContactUsPage();