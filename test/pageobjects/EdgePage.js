class EdgePage{
    get getKelsieProfilePicture(){
        return $('[alt="Kelsie_Anderson"]');
    }

    get getSuccesMessage(){
        return $('[class="c-iaFiUj"] p');
    }

    get getAllAcrticlesSection(){
        return $('main h2');
    }

    async fillEmailInput(email){
        $('[id="Email"]').setValue(email);
        await browser.pause(200);
    }

    async clickSubscribeButton(){
        $('[type="submit"]').click();
    }

    async scrollToEmailInput(){
        $('[id="Email"]').scrollIntoView();
    }

    async scrollToAllArticleSection(){
       this.getAllAcrticlesSection.scrollIntoView();
    }
}

export default new EdgePage();