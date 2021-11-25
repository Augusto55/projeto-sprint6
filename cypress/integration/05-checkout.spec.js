/// <reference types="cypress" />

import CSCadastro from '../pages/sm_cadastro.page.js'
import CSCarrinho from '../pages/sm_carrinho.page.js'
import CSCheckout from '../pages/sm_checkout.page.js';

describe('Testes de checkout/Positivos', () => {
    before(() => {
        CSCadastro.acessarCommerceSuite()
        CSCarrinho.validarProdutos()
        CSCarrinho.validarModal()
        CSCarrinho.validarCarrinho()
    })
    it('Deve realizar o checkout logando com o email e confirmando os dados', () => {
        CSCheckout.validarLoginCheckout()
        CSCheckout.logarEmailCheckout()
        CSCheckout.validarCheckout()
    })

    it('Deve realizar o checkout logando com o CPF e confirmando os dados', () => {
        CSCadastro.acessarCommerceSuite()
        CSCarrinho.validarProdutos()
        CSCarrinho.validarModal()
        CSCarrinho.validarCarrinho()
        CSCheckout.validarLoginCheckout()
        CSCheckout.logarCPFCheckout()
        CSCheckout.validarCheckout()
    })
})

describe('Testes de checkout/Negativos', () => {
    before(() => {
        CSCadastro.acessarCommerceSuite()
        CSCarrinho.validarProdutos()
        CSCarrinho.validarModal()
        CSCarrinho.validarCarrinho()
    })
    it('Deve tentar validar o login com um CPF inválido', () => {
        CSCheckout.validarLoginCheckout()
        CSCheckout.logarCPFCheckoutInvalido()
        CSCheckout.validarCheckoutInvalido()
    })
})
