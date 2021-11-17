import Base from './_base.page';
import {HOMEPAGE as HP} from './components/cadastro.elements.js'

export default class CSLogin extends Base {
    static logout() {
        cy.get(HP.BTN_LOGOUT).invoke('show').click({force: true})
    }

    static validarEntrarLogin() {
        super.validarElemento(HP.BTN_LOGIN)
        super.clickOnElement(HP.BTN_LOGIN)
    }
}