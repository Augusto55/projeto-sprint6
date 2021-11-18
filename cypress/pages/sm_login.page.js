import Base from './_base.page';
import {HOMEPAGE as HP} from './components/cadastro.elements.js'
import {LOGINPAGE as LP} from './components/login.elements.js'

export default class CSLogin extends Base {
    static logout() {
        cy.get(HP.BTN_LOGOUT).invoke('show').click({force: true})
    }

    static validarEntrarLogin() {
        super.validarElemento(HP.BTN_LOGIN)
        super.clickOnElement(HP.BTN_LOGIN)
        super.validarElemento(LP.BTN_LOGIN)
        super.clickOnElement(LP.BTN_LOGIN)
        super.validarElemento(LP.TXT_USER)
        super.validarElemento(LP.BTN_CONTINUAR)
    }

    static logar() {
        cy.readFile(`cypress/fixtures/usuario.json`).then((usuario) => {
            super.typeValue(LP.TXT_USER, usuario.valido.email)
        })
        super.clickOnElement(LP.BTN_CONTINUAR)
        super.validarElemento(LP.TXT_SENHA)
        super.validarElemento(LP.BTN_CONTINUARSENHA)
        cy.fixture(`../fixtures/usuario.json`).then((usuario) => {
            super.typeValue(LP.TXT_SENHA, usuario.valido.senha)
        })
        super.clickOnElement(LP.BTN_CONTINUARSENHA)
    }

    static validarLogin() {
        super.validarUrl('/my-account')
        cy.fixture('../fixtures/usuario.json').then((usuario) => {
            let stringsplit = usuario.valido.nome.split(" ")
            let nome = stringsplit[0]
            super.validateElementText(LP.TXT_LOGINWELCOME, `Olá, ${nome}`)
        })
    }

    static logarInvalido() {
        super.clickOnElement(LP.BTN_SAIR, 8)
        this.validarEntrarLogin()
        cy.readFile(`cypress/fixtures/usuarioInvalido.json`).then((usuario) => {
            super.typeValue(LP.TXT_USER, usuario.Invalido.email)
        })
        super.clickOnElement(LP.BTN_CONTINUAR)
        super.validarElemento(LP.TXT_SENHA)
        super.validarElemento(LP.BTN_CONTINUARSENHA)
        cy.readFile('cypress/fixtures/usuarioInvalido.json').then((senha) => {
            super.typeValue(LP.TXT_SENHA, senha.Invalido.senha)
        })
        super.clickOnElement(LP.BTN_CONTINUARSENHA)
        cy.wait(2000)
        super.validateElementText(LP.TXT_LOGINERROR, 'Autenticação incorreta.')
    }

}