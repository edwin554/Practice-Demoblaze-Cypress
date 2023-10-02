import '@shelex/cypress-allure-plugin';
import 'cypress-xpath';

// Resto de tus comandos personalizados de Cypress



Cypress.Commands.add('logInAllure', (status, message) => {
  cy.allure().logStep(message, status);
});

Cypress.Commands.add('logInAllureWithAttachments', (status, message, attachments) => {
  cy.allure().logStep(message, status, attachments);
});

Cypress.Commands.add('logInAllureAs', (status, message, issueLink, tmsLink) => {
  cy.allure().logAs(message, status, issueLink, tmsLink);
});
import '@shelex/cypress-allure-plugin';

Cypress.Commands.add('logInAllure', (status, message) => {
  cy.allure().logStep(message, status);
});

Cypress.Commands.add('logInAllureWithAttachments', (status, message, attachments) => {
  cy.allure().logStep(message, status, attachments);
});

Cypress.Commands.add('logInAllureAs', (status, message, issueLink, tmsLink) => {
  cy.allure().logAs(message, status, issueLink, tmsLink);
});

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    cy.allure().createAttachment(screenshotFileName, () => {
      return cy.screenshot();
    });
  }
});

Cypress.on('window:before:load', (win) => {
  // Este bloque evita problemas de CORS durante la ejecución de Cypress
  // Puedes ajustarlo según tus necesidades específicas
  win.onerror = null;
  win._appErr = win.console.error;
  win.console.error = function (...args) {
    const error = args && args.length > 0 ? args[0] : 'No message';
    if (error && error.toString().includes('Uncaught SecurityError')) {
      return;
    }
    return win._appErr.apply(win, args);
  };
});
