import { automationmethods } from "../Pagebobjects/AutomationMethods";

class Banner{
    constructor(){
        this.Banner="div[class='banner-title']"
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