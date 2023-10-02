import { MethodsCommonPages } from "../commonPages/commonPages.Methods";
import { ProductsDetailsElements } from "./elementsProductDetails";

export class ProductsDetailsMethods{
    static clickOnButtonAddCart(){
        ProductsDetailsElements.buttons.ButtonAddCart.click();
    }
    static verifyButtonAddCartDisplayed(){
        ProductsDetailsElements.buttons.ButtonAddCart.should('be.visible');
    }
    static productVerifyAddMessage(){
        MethodsCommonPages.verifyAlert('Product added.');
    }
}