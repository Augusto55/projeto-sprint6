export default class Base{
    static getElement(element, index = undefined) {
      let elem;
  
      if (typeof index !== 'undefined' || index > 0) {
        elem = cy.get(element, { timeout: Cypress.env('global_timeout') }).eq(index);
      } else {
        elem = cy.get(element, { timeout: Cypress.env('global_timeout') });
      }
      return elem;
    }
  
    static getElementContaining(text) {
      return cy.contains(text, { timeout: Cypress.env('global_timeout') }).should('be.visible');
    }
  
    static getElementByXPath(element, index) {
      let elem;
  
      if (typeof index !== 'undefined' || index > 0) {
        elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') }).eq(index);
      } else {
        elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') });
      }
  
      return elem;
    }
  
    static validateText(baseValue, comparingValue) {
      expect(baseValue).to.contains(comparingValue);
    }
  
    static validateElementText(element, value, index = undefined) {
      this.getElementText(element, index).then((text) => {
        expect(text).to.contains(value);
      });
    }
  
    static getElementText(element, index = undefined) {
      return this.getElement(element, index).invoke('text');
    }
  
    static typeValue(element, value, force = false) {
      if (force === true) {
        this.getElement(element).type(value, { force: true });
      } else {
        this.getElement(element).type(value);
      }
    }
  
    static typeValueXPath(element, value, force = false) {
      if (force === true) {
        this.getElementByXPath(element).type(value, { force: true });
      } else {
        this.getElementByXPath(element).type(value);
      }
    }
  
    static typeWithDay(element, value) {
      this.getElement(element).type(value, { timeout: Cypress.env('global_timeout') });
    }
  
    static clickOnElement(element, index = undefined, force = false) {
      if (force === true) {
        return this.getElement(element, index).click({ force: true });
      } else {
        return this.getElement(element, index).click();
      }
    }
  
    static verifyIfElementExists(element) {
      this.getElement(element).should('exist', { timeout: Cypress.env('global_timeout') });
    }
  
    static verifyIfElementDoesNotExist(element) {
      this.getElement(element).should('not.exist', { timeout: Cypress.env('global_timeout') });
    }
  
    static verifyIfElementIsHidden(element) {
      this.getElement(element).should('not.be.visible', { timeout: Cypress.env('global_timeout') });
    }
  
    static waitElementAndSelectOption(element, option) {
      return this.getElement(element).should('be.visible').select(option);
    }
  
    static validarPrimeiroElementoDoArray(array, value) {
      cy.get(array).first().should('contain', value)
    }
  
    static validarUrl(url){
      cy.url(`${Cypress.env('baseURL_front')}`).should('include', url) 
    }
  
    static validarElemento(elemento, index){
      this.getElement(elemento, index).should('be.visible', { timeout: Cypress.env('global_timeout') });
    }
  
  
    static verificarSeElementoN??oContemAtr(element, atr) {
      cy.get(element).should('not.have.attr', atr)
    }

    static verificarSeElementoContemAtrEValor(element, atr, value) {
      cy.get(element).should('have.attr', atr, value)
    }
    
  
    static validateElementValue(element, text, index = undefined) {
      this.typeValue(element, text)
      this.getElementText(element, index).then((value) => {
      expect(value).to.contain('teste');
  
      });
    }

  

    static confirmarCpf(){
      for(let i=0; i<3; i++){
        this.getElementText('.ch-well.secret-answer-option.ch-text-center', i).then((valor) => {
        var valorFormatado = valor.split('.').join("")
        var valorFormatado2 = valorFormatado.split('*').join("")
        var valorFormatado3 = valorFormatado2.split('-').join("")
        var valorFormatado4 = valorFormatado3.split('\n').join("")
        var valorFormatado5 = valorFormatado4.trim()
          cy.readFile('cypress/fixtures/usuario.json').then((usuario) => {
            let cpf = usuario.valido.cpf 
            let cpfFormatado = cpf.split('.').join("")
            let cpfFormatado2 = cpfFormatado.split('-').join("")
            let cpfFormatado3 = cpfFormatado2.trim()
            if(cpfFormatado3.includes(valorFormatado5)){
              this.clickOnElement('.ch-well.secret-answer-option.ch-text-center', i)
            }
          })
        })
      }
      
    
    }


    static confirmarNome(){
      for(let i=0; i<3; i++){
        this.getElementText('.ch-well.secret-answer-option.ch-text-center', i).then((texto) => {
        var textoFormatado = texto.split('*').join("")
        var textoFormatado2 = textoFormatado.split(' ').join("")
        var textoFormatado3 = textoFormatado2.trim()
          cy.readFile('cypress/fixtures/usuario.json').then((usuario) => {
            let nome = usuario.valido.nome 
            let nomeFormatado = nome.split(' ').join("")
            let nomeFormatado2 = nomeFormatado.trim()
            if(nomeFormatado2.includes(textoFormatado3)){
              this.clickOnElement('.ch-well.secret-answer-option.ch-text-center', i)
            }
          })
        })
      }
      
    
    }


    
    static confirmarEndereco(){
      for(let i=0; i<3; i++){
        this.getElementText('.ch-well.secret-answer-option.ch-text-center', i).then((endereco) => {
        var enderecoFormatado = endereco.split(' ').join("")
        var enderecoFormatado2 = enderecoFormatado.trim()
        console.log(enderecoFormatado2)
        if(enderecoFormatado2.includes('Avenida') || enderecoFormatado2.includes('Brasil') || enderecoFormatado2.includes('Leste')) {
              this.clickOnElement('.ch-well.secret-answer-option.ch-text-center', i)
            }
          
        })
      }
      
    
    }

    static confirmarNomeInvalido(){
      for(let i=0; i<3; i++){
        cy.wait(3000)
        this.getElementText('.ch-well.secret-answer-option.ch-text-center', i).then((texto) => {
        var textoFormatado = texto.split('*').join("")
        var textoFormatado2 = textoFormatado.split(' ').join("")
        var textoFormatado3 = textoFormatado2.trim()
          cy.readFile('cypress/fixtures/usuario.json').then((usuario) => {
            let nome = usuario.valido.nome 
            let nomeFormatado = nome.split(' ').join("")
            let nomeFormatado2 = nomeFormatado.trim()
            if(!nomeFormatado2.includes(textoFormatado3) || !texto.includes('Avenida') || !texto.includes('Brasil') || !texto.includes('Leste')){
              this.clickOnElement('.ch-well.secret-answer-option.ch-text-center', i)
              i = 3 
            }
          })
        })
      }
      
    
    }


    static selecionarValidacao(){
      this.getElementText('.ch-input.ch-input-disabled.ch-text-center.ch-vspace-sm').then((texto) => {
        if(texto.includes('CPF')){
          this.confirmarCpf()
        }
        else if(texto.includes('nome')){
          this.confirmarNome()
        }
        else {
          this.confirmarEndereco()
        }
      })




    }
  
    
    


  }