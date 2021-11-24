/// <reference types="cypress" />

import CSCadastro from '../pages/sm_cadastro.page.js'
import CSLogin from '../pages/sm_login.page.js'
import CSEndereco from '../pages/sm_endereco.page.js'


describe('Testes de cadastro de endereço/Positivos', () => {
    before(() => {
        CSCadastro.acessarCommerceSuite()
        CSLogin.validarEntrarLogin()  
        CSLogin.logar()
        CSCadastro.validarUrl('/my-account')
    })
    it('Deve cadastrar um novo endereço com sucesso', () => {
        CSEndereco.validarEntrarEndereco()
        CSEndereco.cadastrarEndereco()
    })
})

describe('Testes de cadastro de endereço/Negativos', () => {
    before(() => {
        CSCadastro.acessarCommerceSuite()
        CSLogin.validarEntrarLogin()  
        CSLogin.logar()
        CSCadastro.validarUrl('/my-account')
    })
    it('Deve tentar cadastrar um CEP com caracteres inválidos', () => {
        CSEndereco.validarEntrarEndereco()
        cy.wait(4000)
        CSEndereco.cadastrarEnderecoInvalido()
        CSEndereco.validarEnderecoInvalido()
    })
})

