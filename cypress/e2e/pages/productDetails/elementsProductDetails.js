export class ProductsDetailsElements{
    static get buttons(){
        return{
            get ButtonAddCart(){
                return cy.get('.col-sm-12 > .btn')
            }
            
        }
    }
}