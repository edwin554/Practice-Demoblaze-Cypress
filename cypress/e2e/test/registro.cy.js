import { LoginData } from "../pages/Login/login.data";
import { ElementsCommonPages } from "../pages/commonPages/commonPages.Elements";
import { MethodsCommonPages } from "../pages/commonPages/commonPages.Methods";
import { DataCommonPage } from "../pages/commonPages/commonPages.data";
import { SignUp, SignUpMethod, SignUpMethods, iniciarSesion } from "../pages/signUp/signUpMethods";
import { Logger } from "../utils/logger";

const user = MethodsCommonPages.generateRandomStringh();
const passWord= MethodsCommonPages.generateRandomStringh();
const existingUser = LoginData.validCredentials.username;
const existingPassword = LoginData.validCredentials.password;

describe(DataCommonPage.testSuites.registro, () => {
    it('Registro usuario valido', () => {
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        MethodsCommonPages.navigateUrl();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Sign up" en la barra de navegación');
        MethodsCommonPages.clickOnSignUp();

        Logger.stepNumber(3);
        Logger.step(' Completar algunos campos con información inválida.');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer').should('be.visible');
        SignUpMethods.insertUsername(existingUser);
        SignUpMethods.insertPassword(existingPassword);
        SignUpMethods.clickSignUpModal();
        
        
        Logger.stepNumber(4);
         Logger.step('Hacer clic en "Sign up" para registrar el usuario.');
         SignUpMethods.clickSignUpModal();
         Logger.verificacion('Verificar que se muestra un mensaje de error indicando los campos inválidos.')
         SignUpMethods.verifyAlertDisplayed();

    })
    it('Registro usuario invalido', () => {
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        MethodsCommonPages.navigateUrl();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Sign up" en la barra de navegación');
        MethodsCommonPages.clickOnSignUp();

        Logger.stepNumber(3);
        Logger.step('Completar todos los campos obligatorios con información válida.');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer').should('be.visible');
        SignUpMethods.insertUsername(existingUser);
        SignUpMethods.insertPassword(passWord);
        SignUpMethods.clickSignUpModal();
        
        
        Logger.stepNumber(4);
         Logger.step('Hacer clic en "Sign up" para registrar el usuario.');
         SignUpMethods.clickSignUpModal();
         Logger.verificacion('Verificar que se muestre el mensaje Sign up successful.');
         SignUpMethods.verifyThatThisMessageThisUserAlreadyExist();
         

    })
})

