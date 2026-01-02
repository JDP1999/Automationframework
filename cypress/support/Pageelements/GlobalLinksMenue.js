import { automationmethods } from "../Pagebobjects/AutomationMethods";
import { cookiesDialog } from "./CookiesDialog";
import { popupdialog } from "./PopupDialog";
import { redirectbutton } from "./RedirectButton";
import { banner } from "./Banner";

class GlobalLinksMenue{
    constructor(){
        this.GlobalLinksBtn = "span[class='outer lang-current']";
    }

    clickGlobalLinksButton() {
        //Click Global Links Button
        automationmethods.click(this.GlobalLinksBtn)
    }

    clickCountryLinks() {
            var counter = 1;
            cy.fixture('localizations.json').then((countries) => {
                countries.countries.forEach(country => {
                      //Calls the Method to click the Global Links Button
                        globallinksmenue.clickGlobalLinksButton()

                        //Click Country Specific Link
                        automationmethods.firstclick("ul[id='menu-location-menu']>li>a[href*='"+country.domain+"']")

                        //Check if the new url is called
                        automationmethods.verifyPageLoaded(country.start+ '' + country.domain + '' + country.end)

                        //Check text
                        banner.verifyBannerLoaded()
                        banner.verifyBannerText(country.localization)
                        
                        //Accept Cookies
                        popupdialog.clickCloseButton()
                        redirectbutton.clickRedirectButton()
                        cookiesDialog.acceptCookies()
                    
                });
            })
        }
}
export const globallinksmenue = new GlobalLinksMenue();