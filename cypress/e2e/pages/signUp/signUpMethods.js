import { LoginElements } from "../Login/login.elements";
import { MethodsCommonPages } from "../commonPages/commonPages.Methods";
import { ElementsSignUp, elementsSignUp } from "./signUpElements";

export class SignUpMethods{
    static insertUsername(username){
        ElementsSignUp.textbox.username.invoke('val',username);
    }
    static insertPassword(password){
        ElementsSignUp.textbox.password.invoke('val',password);
    }
    static clickSignUpModal(){
        ElementsSignUp.buttons.signUp.click();
    }
    static clickOnCloseButton(){
        ElementsSignUp.buttons.close.click();
    }

    static signUp(username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickSignUp()
    }
    static verifyAlertDisplayed(){
        MethodsCommonPages.verifyAlert('Sign up successful.');
    }
    static verifyThatThisMessageThisUserAlreadyExist(){
        MethodsCommonPages.verifyAlert('This user already exist.')
    }

}