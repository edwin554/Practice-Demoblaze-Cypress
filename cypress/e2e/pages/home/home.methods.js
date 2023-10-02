import { ElementsHome } from "./home.elements";

export class MethodsHome{
    static get clickOnPhonesOptions(){
        ElementsHome.categoriesMenu.phones.click();
    }
    static get clickOnLaptosOptions(){
        ElementsHome.categoriesMenu.laptos.click();
    }
    static get clickOnMonitosOptions(){
        ElementsHome.categoriesMenu.monitor.click();
    }
    static clickOnProduct(nameProduct){
        ElementsHome.products(nameProduct).click();
    }
    static get clickOnCategories(){
        ElementsHome.categoriesMenu.categories.click();
    }
    static verifyHomePageIsShown(){
        cy.url().should('include', 'index.html');
    }

}
