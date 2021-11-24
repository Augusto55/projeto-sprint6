/// <reference types="cypress" />

import CSCadastro from '../pages/sm_cadastro.page.js'
import CSCarrinho from '../pages/sm_carrinho.page.js'
import CSCheckout from '../pages/sm_checkout.page.js';
import CSLogin from '../pages/sm_login.page.js'

describe('Testes de checkout/Positivos', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    before(() => {
        CSCadastro.acessarCommerceSuite()
        CSCarrinho.validarProdutos()
        CSCarrinho.validarModal()
        CSCarrinho.validarCarrinho()
    })
    it('Deve realizar o checkout logando com o email e confirmando o CPF', () => {
        CSCheckout.validarLoginCheckout()
        CSCheckout.logarEmailCheckout()
    })
})

// describe('Testes de checkout/Negativos', () => {
//     before(() => {
//         CSCadastro.acessarCommerceSuite()
//         CSCarrinho.validarProdutos()
//         CSCarrinho.validarModal()
//         CSCarrinho.validarCarrinho()
//     })
//     it.skip('Deve tentar cadastrar um CEP com caracteres inválidos', () => {
//         CSEndereco.validarEntrarEndereco()
//         CSEndereco.cadastrarEnderecoInvalido()
//         CSEndereco.validarEnderecoInvalido()
//     })
// })
