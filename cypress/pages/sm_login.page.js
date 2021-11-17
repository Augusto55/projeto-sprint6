import Base from './_base.page';


export default class CSLogin extends Base {
    static acessarCommerceSuite() {
        cy.visit(`${Cypress.env('baseURL')}`)
    }
}