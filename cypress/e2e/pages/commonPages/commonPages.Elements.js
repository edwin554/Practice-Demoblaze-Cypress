export class ElementsCommonPages{
    static get menu(){
        return{
            get home(){
                return cy.contains('a','Home')
            },
            get contact(){
                return cy.get('a','Contact')
            },
            get about(){
                return cy.get('a','About')
            },
            get cart(){
                return cy.get('#cartur')
            },
            get logIn(){
                return cy.get('#login2')
            },
            get signUp(){
                return cy.get('#signin2')
            },
            get LogOut(){
                return cy.get('#logout2')
            }
        }
    }
    static get signedLogin(){
        return cy.get('#nameofuser')
    }
}