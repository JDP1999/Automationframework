import { automationpage } from '../../../support/Pagebobjects/AutomationPage';
import { automationmethods } from "../../../support/Pagebobjects/AutomationMethods";
import { header } from '../../../support/Pageelements/Header'
import { redirectbutton } from '../../../support/Pageelements/RedirectButton';
import { popupdialog } from '../../../support/Pageelements/PopupDialog';
import { cookiesDialog } from '../../../support/Pageelements/CookiesDialog';

describe('CheckAutomationPage', () => {
  it('Clicks Links on the Sogeti side', () => {
    automationmethods.loadPage('/')
    automationmethods.verifyPageLoaded('/')
    popupdialog.clickCloseButton();
    redirectbutton.clickRedirectButton();
    cookiesDialog.acceptCookies();
    header.hoverServicesButton();
    header.verifyServicesButtonHovered();
    header.hoverEndToEndSolutionsSubmenu();
    header.verifyEndToEndSubmenuHovered();
    header.hoverAutomationSubmenu();
    header.verifyAutomationSubmenuHovered();
    header.clickAutomationSubmenu();
    automationpage.verifyPageLoaded();
  })
})
