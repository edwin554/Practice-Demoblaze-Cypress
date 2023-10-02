import { ElementsThankYouPage } from "./thankYouPage.Elements";

export class MethodsThankYouPage{
    static clickOnOk(){
        ElementsThankYouPage.buttons.Ok.click();
    }
    static verifyIconDisplayedD (){
        ElementsThankYouPage.icon.iconExit.should('exist');
    }
}