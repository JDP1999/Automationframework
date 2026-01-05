import { automationmethods } from "../Pagebobjects/AutomationMethods";

class Header {

    constructor(){
        this.ServicesBtn = "nav[class='header-nav']>ul>li>a[href*='services']";
        this.ServicesSubmenu ="nav[class='header-nav']>ul>li[class='t1-menu-li active']";
        this.EndToEndSolutionsSubmenuBtn ="a[aria-label='<strong>End-to-End Solutions</strong> menu']";
        this.EndToEndSolutionsSubmenu = "li[aria-label='<strong>End-to-End Solutions</strong> Submenu']"
        this.AutomationSubmenuBtn = "a[aria-label='Next-Gen Workplace Automation menu']";
        this.AutomationSubmenu = "li[aria-label='Next-Gen Workplace Automation Submenu']"
    }

    //Actions
    hoverServicesButton(){
         //Hover over the Services Button
        automationmethods.hover(this.ServicesBtn)
    }

    hoverEndToEndSolutionsSubmenu(){
        //hover over the EndToEndSolutions Button
        automationmethods.hover(this.EndToEndSolutionsSubmenuBtn)
    }

    hoverAutomationSubmenu(){
        automationmethods.hover(this.AutomationSubmenuBtn)
    }

    clickServicesButton() {
        //Click Services Button
        automationmethods.click(this.ServicesBtn)
    }

    clickAutomationSubmenu(){
        automationmethods.firstclick(this.AutomationSubmenuBtn)
    }

    //Verifications
    verifyServicesButtonHovered(){
        //Check Services Button hovered
        cy.get(this.ServicesSubmenu).should('have.class', 't1-menu-li active')
    }

    verifyEndToEndSubmenuHovered(){
        //Check EndToEndSolutions Button hovered
        cy.get(this.EndToEndSolutionsSubmenu).should('have.class', 't1-menu-li menu-parent active')
    }

    verifyAutomationSubmenuHovered(){
        cy.get(this.AutomationSubmenu).should('have.class','t1-menu-li active')
    }

    verifyNewUrlLoaded(){
        //Check that the new url is called
        automationmethods.verifyPageLoaded('services')
    }
}
export const header = new Header()