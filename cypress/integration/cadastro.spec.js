/// <reference types="cypress" />

import GenerateFixtures from '../pages/generateFixtures.js'
import CSCadastro from '../pages/sm_cadastro.page.js'
import CSLogin from '../pages/sm_login.page.js'


    describe('Testes cadastro de usuário/Positivos', () => {
        before(() => {
            CSCadastro.acessarCommerceSuite()
        })
        it('Deve cadastrar uma pessoa física com sucesso', () => {
            CSCadastro.validarUrl(`${Cypress.env('baseURL')}`)
            CSCadastro.entrarCadastro()
            CSCadastro.validarCamposCadastro()
            CSCadastro.digitarCamposCadastro()
            cy.wait(5000)
            CSCadastro.validarCadastro()      
        })
    })

    describe('Testes cadastro de usuário/Negativos', () => {
        it('Deve tentar cadastrar um usuário com CPF inválido', () => {
            GenerateFixtures.gerarUsuarioInvalido()
            CSLogin.logout()
            CSCadastro.entrarCadastro()
            CSCadastro.validarCamposCadastro()
            CSCadastro.digitarCamposCadastroInvalido()
            CSCadastro.validarCadastroInvalido()
        })
    })
   
