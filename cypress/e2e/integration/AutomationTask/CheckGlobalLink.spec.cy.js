import { automationmethods } from '../../../support/Pagebobjects/AutomationMethods'
import { globallinksmenue } from '../../../support/Pageelements/GlobalLinksMenue'
import { redirectbutton } from '../../../support/Pageelements/RedirectButton'
import { popupdialog } from '../../../support/Pageelements/PopupDialog'
import { cookiesDialog } from '../../../support/Pageelements/CookiesDialog'
describe('CheckGlobalLink', () => {
    it('Asserts that the global links are working', () => {
      automationmethods.loadPage('/')
      automationmethods.verifyPageLoaded('/')
      popupdialog.clickCloseButton();
      redirectbutton.clickRedirectButton();
      cookiesDialog.acceptCookies();
      globallinksmenue.clickGlobalLinks();
    })
  })