import { automationmethods } from "./AutomationMethods";
class AutomationPage{

    //Verifications
    verifyPageLoaded(){
        //Check that the new URL is called
        automationmethods.verifyPageLoaded('next-gen-workplace-automation')
    }

}
export const automationpage = new AutomationPage();