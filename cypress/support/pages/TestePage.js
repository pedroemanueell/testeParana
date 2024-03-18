class TestePage {

    acessarSite() {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom#edit')
    }
    clickBotaoAzul() {
        cy.get('a[class="button"]')
            .click()
    }

    clickBotaoVermelho() {
        cy.get('a[class="button alert"]')
            .click()
    }

    clickBotaoVerde() {
        cy.get('a[class="button success"]')
            .click()
    }

    clickBotaoEditar() {
        cy.xpath(`//*[text()='edit']`)
            .eq(0)
                .click()
    }

    clickBotaoDeletar() {
        cy.xpath(`//*[text()='delete']`)
            .eq(0)
                .click()
    }
}

export default new TestePage()