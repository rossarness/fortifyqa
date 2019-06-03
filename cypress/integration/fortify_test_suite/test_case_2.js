const searchText = 'Core i7'
const itemRow = '.last.firstRow'
const itemNamePath = '.last.firstRow > .top > .fb > .name'
const productPageTitle = 'h1'

describe("Testsuite No. 2 for Alza.cz", () => {
    it('Test 2: Search box functionality', () => {
        cy.get('#edtSearch')
        .type(searchText)
        .type('{enter}')
        cy.wait(1000)
        cy.get(itemRow)
        .should('contain', searchText)
        cy.get(itemNamePath)
        .click()
        cy.get(productPageTitle)
        .should('contain', searchText)
    })
})