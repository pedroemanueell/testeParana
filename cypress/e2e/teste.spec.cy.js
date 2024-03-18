/// <reference types="cypress" />

import TestePage from "../support/pages/TestePage"

describe('Encontrar Elementos', () =>{
    
    it('1-1 Validar o clique no botão azul', () => {
        TestePage.acessarSite()
        TestePage.clickBotaoAzul()
    })

    it('1-2 Validar o clique no botão vermelho', () => {
        TestePage.acessarSite()
        TestePage.clickBotaoVermelho()
    })

    it('1-3 Validar o clique no botão verde', () => {
        TestePage.acessarSite()
        TestePage.clickBotaoVerde() 
    })
  
    it('1-4 Validar o clique no botão editar', () => {
        TestePage.acessarSite()
        TestePage.clickBotaoEditar()
    })

    it('1-5 Validar o clique no botão delete', () => {
        TestePage.acessarSite()
        TestePage.clickBotaoDeletar()
    })
})