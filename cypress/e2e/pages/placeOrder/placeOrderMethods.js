import { ElementsPlaceOrder } from "./placeOrderElements";

export class MethodsPlaceOrder {
    static insertName(name) {
        ElementsPlaceOrder.textBoxt.name.invoke('val', name);
    }
    static insertCountry(country) {
        ElementsPlaceOrder.textBoxt.country.invoke('val', country)
    }
    static insertCity(city) {
        ElementsPlaceOrder.textBoxt.city.invoke('val', city)
    }
    static inserCard(crediCart) {
        ElementsPlaceOrder.textBoxt.crediCart.invoke('val', crediCart)
    }
    static insertMont(month) {
        ElementsPlaceOrder.textBoxt.month.invoke('val', month)
    }
    static insertYear(year) {
        ElementsPlaceOrder.textBoxt.year.invoke('val', year)
    }
    static ClickOnClose() {
        ElementsPlaceOrder.buttons.close.click();
    }
    static ClickOnPurchase() {
        ElementsPlaceOrder.buttons.purchase.click();
    }
    static insertInformationPlaceOrder(data){
        this.insertName(data.name);
        this.insertCountry(data.country);
        this.insertCity(data.city);
        this.inserCard(data.crediCartNumber);
        this.insertMont(data.month);
        this.insertYear(data.year);
    }
}