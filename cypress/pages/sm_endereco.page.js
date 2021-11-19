import Base from './_base.page';
import GenerateFixtures from '../pages/generateFixtures.js'
import {HOMEPAGE as HP} from './components/cadastro.elements.js'
import {LOGINPAGE as LP} from './components/login.elements.js'
import {ENDERECO as E} from './components/endereco.elements.js'

export default class CSEndereco extends Base {
    static validarEntrarEndereco() {
        cy.wait(2000)
        super.validarElemento(LP.BTN_SAIR, 3)
        super.clickOnElement(LP.BTN_SAIR, 3)
        cy.readFile(`cypress/fixtures/usuario.json`).then((usuario) => {
            super.validateElementText(E.TXT_USER, usuario.valido.nome)
        })
        super.validarElemento(E.BTN_EDITAR)
        super.clickOnElement(E.BTN_EDITAR, 0)
        super.validarElemento(E.INPUT_CEP)
    }
    
    static cadastrarEndereco() {
        GenerateFixtures.gerarCep()
        cy.readFile(`cypress/fixtures/endereco.json`).then((endereco) => {
            super.typeValue(E.INPUT_CEP, endereco.valido.cep)
        })
        cy.wait(2000)
        super.typeValue(E.INPUT_NOMEENDERECO, "valido")
        cy.readFile(`cypress/fixtures/endereco.json`).then((endereco) => {
            super.typeValue(E.INPUT_NUMERO, endereco.valido.numero)
        })
        super.clickOnElement(E.BTN_SALVAR)
        cy.wait(2000)
        cy.url().then((url) => {
            if (url.includes('/addresses/edit')) {
                cy.reload()
                cy.wait(2000)
                this.cadastrarEndereco()
            }
        })
    }
}