import { fakerDE as faker } from '@faker-js/faker';
import {automationmethods} from "./AutomationMethods"

class ContactPage {

    //Selectors
    constructor(){
        this.Firstname="input[placeholder='First name']";
        this.Lastname="input[placeholder='Last name']";
        this.Email="input[placeholder='E-mail address']";
        this.Mobile="input[placeholder='Phone number']";
        this.Message="textarea[placeholder='Your Message']";
        this.Slider="div[id='slider']";
        this.Checkbox="input[type='checkbox']";
        this.ErrorMessage="div[class='mf_form__errors']";
    }

    //Methods

    //Actions

    fillForm(){
        //Type firstname into the textfield using the data from faker
        automationmethods.sendText(this.Firstname, faker.person.firstName())

        //Type lastname into the textfield using the data from faker
        automationmethods.sendText(this.Lastname, faker.person.lastName())

         //Type email into the textfield using the data from faker
        automationmethods.sendText(this.Email, faker.internet.email())

        //Type mobile into the textfield using the data from faker
        automationmethods.sendText(this.Mobile, faker.phone.number())

        //Type text into the textfield using the data from faker
        automationmethods.sendText(this.Message, faker.word.words(10))

        //Check if checkbox is unchecked
        cy.get(this.Checkbox).should('not.have.attr', 'data-gtm-form-interact-field-id')

        //Click Checkbox
        automationmethods.click(this.Checkbox)

         //Check if checkbox is checked
        cy.get(this.Checkbox).should('have.attr', 'data-gtm-form-interact-field-id')

        //Use the slider to submit the form
        automationmethods.slide(this.Slider)

        //Check Error Message displayed
        cy.get(this.ErrorMessage).should('be.visible')
    }

}
export const contactpage = new ContactPage();