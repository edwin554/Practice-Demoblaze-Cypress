export class LoginElements {
    static get textbox() {
        return {
            get username() {
                return cy.get('#loginusername')
            },
            get password() {
                return cy.get('#loginpassword')
            },

        };

    }
    static get buttons() {
        return {
            get close() {
                return cy.contains('button', 'Close').eq(1)
            },
            get login() {
                return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            }
        }
    }
}

