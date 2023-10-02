import { LoginData } from "../pages/Login/login.data";
import { LoginMethods } from "../pages/Login/login.methods";
import { ElementsCommonPages } from "../pages/commonPages/commonPages.Elements";
import { MethodsCommonPages } from "../pages/commonPages/commonPages.Methods";
import { DataCommonPage } from "../pages/commonPages/commonPages.data";
import { MethodsHome } from "../pages/home/home.methods";
import { Logger } from "../utils/logger";

describe (DataCommonPage.testSuites.autenticacion,()=>{
it('Inicio de sesion exitoso',()=>{
    Logger.stepNumber(1);
    Logger.step(' Navegar a la página de inicio.');
    MethodsCommonPages.navigateUrl();

    Logger.stepNumber(2);
    Logger.step(' Hacer clic en "Log in" en la barra de navegación.');
    MethodsCommonPages.clickOnLogIn();

    Logger.stepNumber(3);
    Logger.step('Ingresar un nombre de usuario y contraseña válidos.');
    LoginMethods.insertUser(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(4);
    Logger.step(' Hacer clic en "Log in" para iniciar sesión.');
    LoginMethods.clickButtonLogin();

    Logger.stepNumber(5);
    Logger.step(' Verificar que se redirige al usuario a la página de inicio.');
    MethodsCommonPages.verifySignedUser(LoginData.validCredentials.username);

    Logger.postCondition('Hacer log out');
    MethodsCommonPages.LogOut();




})
xit(' Inicio de sesión inválido',()=>{
    Logger.stepNumber(1);
    Logger.step(' Navegar a la página de inicio.');
    MethodsCommonPages.navigateUrl();

    Logger.stepNumber(2);
    Logger.step(' Hacer clic en "Log in" en la barra de navegación.');
    MethodsCommonPages.clickOnLogIn();

    Logger.stepNumber(3);
    Logger.step(' Ingresar un nombre de usuario y/o contraseña inválidos');
    LoginMethods.insertUser(LoginData.validCredentials.username);
    LoginMethods.insertPassword('123456');

    Logger.stepNumber(4);
    Logger.step(' Hacer clic en "Log in" para iniciar sesión.');
    LoginMethods.clickButtonLogin();

    Logger.stepNumber(5);
    Logger.step(' Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado.');
    LoginMethods.verifyWrongPassword();

})
})