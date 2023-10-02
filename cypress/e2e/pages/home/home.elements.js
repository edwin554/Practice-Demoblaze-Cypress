export class ElementsHome{

    static get categoriesMenu(){
        return{
            get phones(){
                return cy.contains('a', 'Phones');
            },
            get laptos(){
                return cy.get('a#itemc').eq(1)
            },
            get monitor(){
                return cy.contains('a', 'Monitors');
            },
            get categories(){
                return cy.get('a#cat');
            }
        }
        
    }
    static products(nameProduct){
        return cy.contains("a",nameProduct)
    }
}

