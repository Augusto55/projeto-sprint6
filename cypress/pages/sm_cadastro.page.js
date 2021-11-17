import Base from './_base.page';
import {HOMEPAGE as HP} from './components/cadastro.elements.js'
import {CADASTRO as C} from './components/cadastro.elements.js'

export default class CSCadastro extends Base {
    static acessarCommerceSuite() {
        cy.visit(`${Cypress.env('baseURL')}`)
    }

    static entrarCadastro() {
        super.validarElemento(HP.BTN_CADASTRO)
        super.clickOnElement(HP.BTN_CADASTRO)
    }

    static validarCamposCadastro() {
        super.validarElemento(C.TXT_NOME)
        super.validarElemento(C.TXT_DATA)
        super.validarElemento(C.TXT_CPF)
        super.validarElemento(C.TXT_TELEFONE)
        super.validarElemento(C.TXT_CELULAR)
        super.validarElemento(C.TXT_EMAIL)
        super.validarElemento(C.TXT_EMAIL2)
        super.validarElemento(C.TXT_SENHA)
        super.validarElemento(C.TXT_SENHA2)
    }
    
    static digitarCamposCadastro() {
        cy.fixture(`../fixtures/usuario.json`).then((usuario) => {
            super.typeValue(C.TXT_NOME, usuario.valido.nome)
            super.typeValue(C.TXT_DATA, usuario.valido.data)
            super.typeValue(C.TXT_CPF, usuario.valido.cpf)
            super.typeValue(C.TXT_CELULAR, usuario.valido.telefoneCelular)
            super.typeValue(C.TXT_EMAIL, usuario.valido.email)
            super.typeValue(C.TXT_EMAIL2, usuario.valido.email)
            super.typeValue(C.TXT_SENHA, usuario.valido.senha)
            super.typeValue(C.TXT_SENHA2, usuario.valido.senha)
        })
        super.validarElemento(C.BTN_AVANÇAR)
        super.clickOnElement(C.BTN_AVANÇAR)
    }

    static validarCadastro() {
        super.validarUrl('/loja')
        cy.fixture('../fixtures/usuario.json').then((usuario) => {
            super.validateElementText(HP.TXT_WELCOME, `Olá, ${usuario.valido.nome}`)
        })
    }

    static digitarCamposCadastroInvalido() {
        cy.fixture(`../fixtures/usuarioInvalido.json`).then((usuario) => {
            super.typeValue(C.TXT_NOME, usuario.Invalido.nome)
            super.typeValue(C.TXT_DATA, usuario.Invalido.data)
            super.typeValue(C.TXT_CPF, usuario.Invalido.cpf)
            super.typeValue(C.TXT_CELULAR, usuario.Invalido.telefoneCelular)
            super.typeValue(C.TXT_EMAIL, usuario.Invalido.email)
            super.typeValue(C.TXT_EMAIL2, usuario.Invalido.email)
            super.typeValue(C.TXT_SENHA, usuario.Invalido.senha)
            super.typeValue(C.TXT_SENHA2, usuario.Invalido.senha)
        })
        super.validarElemento(C.BTN_AVANÇAR)
        super.clickOnElement(C.BTN_AVANÇAR)
        super.validateElementText(C.TXT_ERROCPF, 'Para prosseguir com o cadastro, por favor, informe um CPF válido.')
    }
}