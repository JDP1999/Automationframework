import { automationmethods } from "../Pagebobjects/AutomationMethods";

class Banner{
    constructor(){
        this.Banner="h1[class='banner-heading']"
    }

    //Actions
    verifyBannerLoaded(){
        automationmethods.prepareforAction(this.Banner)
    }
    //Verifications
    verifyBannerText(text){
        automationmethods.checkText(this.Banner,text)
    }
}

export const banner = new Banner();