export class ElementsSignUp{
    static get textbox() {
        return {
            get username() {
                return cy.get('#sign-username')
            },
            get password() {
                return cy.get('#sign-password')
            }
        }

    }
    static get buttons(){
        return{
            get signUp(){
                return cy.contains('button', 'Sign up')
            },
            get close(){
                return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
            }
        }
    }
}

