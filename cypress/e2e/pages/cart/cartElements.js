export class ElementsCart{

static get buttons(){
    return{

        get placeOrder(){
            return  cy.contains('button', 'Place Order');
        
        }
      
    }
}
static get links(){
    return{
        delete(nameProduct){
            return cy.contains('td',nameProduct).closest('tr').find('a');
        },
        allDelete(){
            return cy.get('a[onclick*="deleteItem"]');

        }
    }
}

}