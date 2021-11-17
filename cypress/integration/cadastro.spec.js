/// <reference types="cypress" />

import GenerateFixtures from '../pages/generateFixtures.js'

describe('Testes Front ServeRest - CADASTRO DE USUARIOS', () => {
    describe('Testes cadastro de usuário/Positivos', () => {
        before(() => {
            ServeRestLogin.acessarServeRest()
            GenerateFixtures.gerarUsuario()
        })
        it('Validar campos para realizar o cadastro', () => {
            ServeRestCadastrarUsuario.campos_cadastro()          
        })
        describe('Cadastro de usuário com propriedades de administrador', () => {
            it('Deve cadastrar um usuário admin', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.realizar_cadastroAdmin()
                cy.wait(1500)           
            })
        })
    })
})