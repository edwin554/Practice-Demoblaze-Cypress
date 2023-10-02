import { Logger } from "../../utils/logger";
import { MethodsCommonPages } from "../commonPages/commonPages.Methods";
import { LoginElements } from "./login.elements";

export class LoginMethods {
    static insertUser(username) {
        LoginElements.textbox.username.invoke('val', username)
    }
    static insertPassword(password) {
        LoginElements.textbox.password.invoke('val', password)
    }
    static clickButtonLogin() {
        LoginElements.buttons.login.click();
    }
    static ingresarCredenciales(username, password) {
        Logger.subStep('ingresa el usuario');
        this.insertUser(username);
        Logger.subStep('ingresa el password');
        this.insertPassword(password);
        Logger.subStep('click en login')
        this.clickButtonLogin();

    }
    static verifyWrongPassword(){
        MethodsCommonPages.verifyAlert('Wrong password.')
    }
    
}