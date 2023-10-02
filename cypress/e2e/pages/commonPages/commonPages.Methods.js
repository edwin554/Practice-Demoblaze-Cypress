import { ElementsCommonPages } from "./commonPages.Elements";
import { DataCommonPage } from "./commonPages.data";

export class MethodsCommonPages {
    static navigateUrl() {
        // Borra todas las cookies
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit(DataCommonPage.url);
    }
    static clickOnHome() {
        ElementsCommonPages.menu.home.click();
    }
    static clickOnAbout() {
        ElementsCommonPages.menu.about.click();
    }
    static clickOnContact() {
        ElementsCommonPages.menu.contact.click();
    }
    static clickOnCart() {
        ElementsCommonPages.menu.cart.click();
    }
    static clickOnLogIn() {
        ElementsCommonPages.menu.logIn.click();
    }
    static clickOnSignUp() {
        ElementsCommonPages.menu.signUp.click();
    }
    static verifyAlert(textMessage){
        cy.on('window:alert', (text) => {
            expect(text).to.equal(textMessage);
          });

    }
    static generateRandomStringh() {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let randomString = '';
        const nameLength = Math.floor(Math.random() * 10) + 10; // Longitud del nombre entre 5 y 10 caracteres
      
        for (let i = 0; i < nameLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomString += characters.charAt(randomIndex);
        }
      
        return randomString;
      }
      static verifySignedUser(username){
        ElementsCommonPages.signedLogin.should('have.text','Welcome ' + username);
      }
      
      static LogOut(){
        cy.get('body').then($body=>{
            if ($body.find('#logout2').length>0){
                ElementsCommonPages.menu.LogOut.click();
            }

        })
        
        
      }
}