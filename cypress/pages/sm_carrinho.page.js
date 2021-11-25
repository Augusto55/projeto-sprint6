import Base from './_base.page';
import {PRODUTOS as P} from './components/carrinho.elements.js'
import {MODAL as M} from './components/carrinho.elements.js'
import {CARRINHO as C} from './components/carrinho.elements.js'
import faker from "faker"
    
export default class CSCarrinho extends Base {
    static validarProdutos(){
        cy.get(P.IMG_PRODUTOS).should('have.descendants', 'img')
        super.validarElemento(P.NOME_PRODUTOS)
        super.validarElemento(P.PRECO_PRODUTOS)
        super.validarElemento(P.ADD_PRODUTO)
        
        var randomNum = faker.datatype.number(
            {
            'min': 5,
            'max': 8}
          )
        super.clickOnElement(P.ADD_PRODUTO, randomNum)
    }

    static validarModal(){
        super.clickOnElement(P.BTN_CARRINHO)
        super.validarElemento(M.DIV_PRODUTO)
        super.validarElemento(M.BTN_FECHAR)
        super.validarElemento(M.TXT_PRECO)
        super.validarElemento(M.BTN_FINALIZAR)
        super.validarElemento(M.BTN_FINALIZAR)
        cy.wait(2000)
        super.clickOnElement(M.BTN_FINALIZAR)
    }

    static validarCarrinho(){
        super.validarElemento(C.BTN_CONTINUAR)
        super.validarElemento(C.DIV_PRODUTO)
        super.validarElemento(C.IMG_PRODUTOS)
        super.validarElemento(C.NOME_PRODUTO)
        super.validarElemento(C.PRECO_TOTAL)
        super.validarElemento(C.DEC_PRODUTO)
        super.validarElemento(C.INC_PRODUTO)
        super.validarElemento(C.QUANT_PRODUTO)
    }

    static inserirFrete(){
        super.validarElemento(C.INPUT_CEP)
        cy.fixture(`../fixtures/endereco.json`).then((endereco) => {
            super.typeValue(C.INPUT_CEP, endereco.valido.cep)
        })
    }

    static inserirFreteInvalido(){
        super.validarElemento(C.INPUT_CEP)
        super.typeValue(C.INPUT_CEP, '965163198')
    }

    static validarCepInvalido(){
        super.validateElementText(C.ERROR_CEP, 'Não foi possível carregar seu endereço.Verifique o CEP e digite novamente.')
    }
}