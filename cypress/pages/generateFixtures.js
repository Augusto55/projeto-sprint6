import faker from "faker"
import fakerbr from "faker-br"
const { fakerBr } = require('js-brasil');
import Base from './_base.page'

export default class GenerateFixtures extends Base {
    static gerarUsuario() {
        cy.writeFile('cypress/fixtures/usuario.json', {
            'valido' :
                 {
                "nome": `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
                "data": `${fakerBr.data()}`,
                "cpf": `${fakerBr.cpf()}`,
                "telefoneFixo": `${fakerBr.telefone()}`,
                "telefoneCelular": `${fakerBr.celular()}`,
                "email": `${fakerbr.internet.email()}`,
                "senha": `${faker.internet.password()}`
              }
            
          })
    }

    static gerarUsuarioInvalido() {
      cy.writeFile('cypress/fixtures/usuarioInvalido.json',  {
          'Invalido' :
               {
              "nome": `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
              "data": `${fakerBr.data()}`,
              "cpf": `${fakerbr.name.firstName()}`,
              "telefoneFixo": `${fakerBr.telefone()}`,
              "telefoneCelular": `${fakerBr.celular()}`,
              "email": `${fakerbr.internet.email()}`,
              "senha": `${faker.internet.password()}`
            }
          
        })
  }

  static gerarCep() {
    cy.writeFile('cypress/fixtures/endereco.json',  {
      'valido' :
           {
          "cep": `${fakerBr.cep()}`,
          "numero": `${faker.datatype.number()}`
        }
      
    })
  }
}
