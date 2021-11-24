import Base from './_base.page';
import {CARRINHO as C} from './components/carrinho.elements.js'
import {CHECKOUT as CO} from './components/checkout.elements.js'
import {LOGOUT as L} from './components/checkout.elements.js'


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


}