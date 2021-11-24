import Base from './_base.page';
import {CARRINHO as C} from './components/carrinho.elements.js'
import {CHECKOUT as CO} from './components/checkout.elements.js'
import {CHECKOUT_INVALIDO as CI} from './components/checkout.elements.js';


export default class CSCheckout extends Base {
    static validarLoginCheckout(){
        super.clickOnElement(C.BTN_CONTINUAR)
        super.validateElementText(CO.TXT_INFORME, 'Informe seu e-mail ou CPF/CNPJ  para prosseguir com sua compra' )
        super.validarElemento(CO.INPUT_USER)
        super.validarElemento(CO.BTN_CONTINUAR)
        super.validarElemento(CO.BTN_FACEBOOK)
        super.validarElemento(CO.BTN_MASTERPASS)
    }

    static logarEmailCheckout(){
        cy.fixture(`../fixtures/usuario.json`).then((usuario) => {
            super.typeValue(CO.INPUT_USER, usuario.valido.email)
        })
        super.clickOnElement(CO.BTN_CONTINUAR)
        super.confirmarCpf()
    }

    static logarCPFCheckout(){
        cy.fixture(`../fixtures/usuario.json`).then((usuario) => {
            super.typeValue(CO.INPUT_USER, usuario.valido.cpf)
        })
        super.clickOnElement(CO.BTN_CONTINUAR)
        super.confirmarNome()
    }


    static validarCheckout() {
        for (let i = 0; i < 3; i++) {
            super.validarElemento(CO.DIVS_CHECKOUT, i)
        }
        super.validarElemento(CO.DIV_ENVIO)
        super.validarElemento(CO.IMG_PRODUTOS)
        super.validarElemento(CO.NOME_PRODUTO)
        super.validarElemento(CO.PRECO_PRODUTO)
        super.validarElemento(CO.BTN_VOLTARCARRINHO)
        
    }

    static logarCPFCheckoutInvalido(){
        cy.fixture(`../fixtures/usuario.json`).then((usuario) => {
            super.typeValue(CO.INPUT_USER, usuario.valido.cpf)
        })
        super.clickOnElement(CO.BTN_CONTINUAR)
        super.confirmarNomeInvalido()
    }

    static validarCheckoutInvalido() {
        super.validarElemento(CI.DIV_INVALIDO)
        super.validateElementText(CI.TXT_INVALIDO, 'Você errou as perguntas de segurança. Para continuar, efetue o login.')
        super.validarElemento(CI.INPUT_SENHA)
        super.verificarSeElementoContemAtrEValor(CI.INPUT_SENHA, 'placeholder', 'Digite sua senha')
        super.validarElemento(CI.BTN_ESQUECEUSENHA)
    }


}