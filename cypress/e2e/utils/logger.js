export class Logger {
    static stepNumber(number) {
        const text = 'step # '+ number;
        cy.log(text);
        cy.allure().step(text);
    }
    static step(description) {
        const text = 'step - '+ description;
        cy.log(text);
        cy.allure().step(text);
    }
    static verificacion(verificacion) {
        const text = 'verificacion - ' + verificacion;
        cy.log(text);
        cy.allure().step(text);
    }
    static subStep(description) {
        const text = 'Substep # ' + description;
        cy.log(text);
        cy.allure().step(text);
    }
    static subVerficacion(description) {
        const text = 'subVerificacion ' + description;
        cy.log(text);
        cy.allure().step(text);
    }
    static postCondition (description) {
        const text = 'POSTCONDICION # ' + description;
        cy.log(text);
        cy.allure().step(text);
    }
}