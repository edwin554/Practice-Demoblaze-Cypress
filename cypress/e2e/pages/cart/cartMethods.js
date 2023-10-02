import { ElementsCart } from "./cartElements";

export class MethodsCart{

    static clickOnDelete(nameProduct){
        ElementsCart.links.delete(nameProduct).click();
    }
    static verifyProductAddedOnCart(nameProduct){
        ElementsCart.links.delete(nameProduct).should('be.visible');
    }
    static clickOnButtonPlaceOrder(){
        ElementsCart.buttons.placeOrder.click();
    }
    static emptyCart(){
        if (cy.get('a[onclick*="deleteItem"]').should('exist')) {
           cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.trigger('click');
            cy.wait(4000);
           })
        }
    }
}