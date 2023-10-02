import { LoginData } from "../pages/Login/login.data";
import { LoginMethods } from "../pages/Login/login.methods";
import { MethodsCart } from "../pages/cart/cartMethods";
import { MethodsCommonPages } from "../pages/commonPages/commonPages.Methods";
import { DataCommonPage } from "../pages/commonPages/commonPages.data";
import { MethodsHome } from "../pages/home/home.methods";
import { DataPlaceOrder } from "../pages/placeOrder/placeOrderData";
import { MethodsPlaceOrder } from "../pages/placeOrder/placeOrderMethods";
import { ProductsDetailsMethods } from "../pages/productDetails/methodsProductsDetails";
import { MethodsThankYouPage } from "../pages/thankYouPage/thankYouPage.Methods";
import { Logger } from "../utils/logger";

const userValid = LoginData.validCredentials;
const product = 'Samsung galaxy s6';

describe(DataCommonPage.testSuites.catalogoCompras,()=>{
it('Navegación por categorías',()=>{

Logger.stepNumber(1);
Logger.step(' Iniciar sesión como usuario registrado.');
Logger.subStep('navegar a la pagina demoblaze');
MethodsCommonPages.navigateUrl();
Logger.subStep('click en "Log in"');
MethodsCommonPages.clickOnLogIn();
LoginMethods.ingresarCredenciales(userValid.username, userValid.password);

Logger.stepNumber(2);
Logger.step(' Navegar a la página de inicio.');
MethodsCommonPages.clickOnHome();

Logger.stepNumber(3);
Logger.step('Seleccionar una categoría de productos en el menú de navegación.');


})

it('Agregar producto al carrito',()=>{
Logger.stepNumber(1);
Logger.step(' Iniciar sesión como usuario registrado.');
Logger.subStep('navegar a la pagina demoblaze');
MethodsCommonPages.navigateUrl();
Logger.subStep('click en "Log in"');
MethodsCommonPages.clickOnLogIn();
LoginMethods.ingresarCredenciales(userValid.username, userValid.password);

Logger.stepNumber(2);
Logger.step(' Navegar a la página de inicio.');
MethodsCommonPages.clickOnHome();

Logger.stepNumber(3);
Logger.step('Hacer clic en un producto específico.');
MethodsHome.clickOnProduct(product);

Logger.stepNumber(4);
Logger.step(' Verificar que se muestra la página de detalles del producto.');
ProductsDetailsMethods.verifyButtonAddCartDisplayed();

Logger.stepNumber(5);
Logger.step(' Hacer clic en el botón "Add to cart".');
ProductsDetailsMethods.clickOnButtonAddCart();

Logger.stepNumber(6);
Logger.verificacion(' Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.');
ProductsDetailsMethods.productVerifyAddMessage();
MethodsCommonPages.clickOnCart();
MethodsCart.verifyProductAddedOnCart(product);

})
it(' Realizar una compra',()=>{
    Logger.stepNumber(1);
    Logger.step(' Iniciar sesión como usuario registrado.');
    Logger.subStep('navegar a la pagina demoblaze');
    MethodsCommonPages.navigateUrl();
    Logger.subStep('click en "Log in"');
    MethodsCommonPages.clickOnLogIn();
    LoginMethods.ingresarCredenciales(userValid.username, userValid.password);
    
    Logger.stepNumber(2);
    Logger.step(' Navegar a la página de inicio.');
    MethodsCommonPages.clickOnHome();
    
    Logger.stepNumber(2);
    Logger.step('vaciar carrito');
    MethodsCommonPages.clickOnCart();
    MethodsCart.emptyCart();
    MethodsCommonPages.clickOnHome();


    Logger.stepNumber(3);
    Logger.step('Hacer clic en un producto específico.');
    MethodsHome.clickOnProduct(product);
    
    Logger.stepNumber(4);
    Logger.step(' Verificar que se muestra la página de detalles del producto.');
    ProductsDetailsMethods.verifyButtonAddCartDisplayed();
    
    Logger.stepNumber(5);
    Logger.step(' Hacer clic en el botón "Add to cart".');
    ProductsDetailsMethods.clickOnButtonAddCart();
    
    Logger.stepNumber(6);
    Logger.verificacion(' Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.');
    ProductsDetailsMethods.productVerifyAddMessage();
    MethodsCommonPages.clickOnCart();
    MethodsCart.verifyProductAddedOnCart(product);

    Logger.stepNumber(7);
    Logger.step(' Hacer clic en el botón "Place Order".');
    MethodsCart.clickOnButtonPlaceOrder();

    Logger.stepNumber(8);
    Logger.step(' Completar los campos obligatorios en la página de información de envío');
    MethodsPlaceOrder.insertInformationPlaceOrder(DataPlaceOrder.DataTest);
    
    Logger.stepNumber(9);
    Logger.step('Hacer clic en el botón "Purchase".');
    MethodsPlaceOrder.ClickOnPurchase();

    Logger.stepNumber(10);
    Logger.step(' Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio');
    MethodsThankYouPage.verifyIconDisplayedD();
    cy.wait(4000);
    MethodsThankYouPage.clickOnOk();
    MethodsHome.verifyHomePageIsShown();
    
})



})