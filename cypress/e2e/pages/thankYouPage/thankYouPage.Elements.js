export class ElementsThankYouPage {
    static get buttons() {
        return {
            get Ok() {
                return cy.get('.confirm');
            }
        }
    }
    static get icon() {
        return {
            get iconExit() {
                return cy.get('div.sa-placeholder')
            }
        }
    }
}