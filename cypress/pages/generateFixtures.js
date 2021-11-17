import faker from "faker"
import fakerbr from "faker-br"

export default class GenerateFixtures extends Base {
    static gerarUsuario() {
        cy.writeFile('cypress/fixtures/usuario.json', {
            'hits':Cypress._.times(1, () => {
              return {
                "nome": `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
                "email": `${faker.internet.email()}`,
                "cpf": `${fakerbr.br.cpf()}`,
                "senha": `${faker.internet.password()}`,
                "administrador": `${faker.datatype.boolean()}`
              }
            })
          })
    }
}
