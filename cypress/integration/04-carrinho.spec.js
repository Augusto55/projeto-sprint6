/// <reference types="cypress" />

import CSCadastro from '../pages/sm_cadastro.page.js'
import CSCarrinho from '../pages/sm_carrinho.page.js'


describe('Testes de carrinho/Positivos', () => {
    before(() => {
        CSCadastro.acessarCommerceSuite()
    })
    it('Deve validar os elementos e adicionar um produto ao carrinho com sucesso', () => {
        CSCarrinho.validarProdutos()
        CSCarrinho.validarModal()
        CSCarrinho.validarCarrinho()
    })
    it('Deve inserir um frete válido no carrinho', () => {
        CSCarrinho.inserirFrete()
    })
})

describe('Testes de carrinho/Negativos', () => {
    before(() => {
        CSCadastro.acessarCommerceSuite()
        CSCarrinho.validarProdutos()
        CSCarrinho.validarModal()
        CSCarrinho.validarCarrinho()
    })
    it('Deve tentar usar um CEP inválido no frete', () => {
        CSCarrinho.inserirFreteInvalido()
        CSCarrinho.validarCepInvalido()
    })
})