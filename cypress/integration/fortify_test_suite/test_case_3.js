const langSelector = '.selector'
const lang = ['.language > .langEN', '.langCZ']
const btnSearch = '#btnSearch'
const btnSearchText = ['Search', 'Hledat']
const testCategory = '#headertop_rptSatellitesBeta_li_4 > .tab > .tabText'
const testCategoryText = ['Media & Entertainment', 'zábava']
const notebooksTest = '#besti > h4'
const notebooksTestText = ['Best Deals', 'Nejprodávanější']
const header = '#lblMujUcet'
const headerTest = ['My Alza', 'Moje Alza']
const notebooksCategory = '#litp18842920 > .bx'
const backToMain = '#logo > a'

describe("Testsuite No. 3 for Alza.cz", () => {
    it("Test 3: Switch Website Language", () => {
        for (var i = 0; i < lang.length; i++){
            cy.get(langSelector)
            .click()
            cy.get(lang[i])
            .click()
            cy.get(btnSearch)
            .should('contain', btnSearchText[i])
            cy.get(testCategory)
            .contains(testCategoryText[i])
            .should('contain', testCategoryText[i])
            cy.get(header)
            .contains(headerTest[i])
            .should('contain', headerTest[i])
            cy.get(notebooksCategory)
            .click()
            cy.get(notebooksTest)
            .should('contain', notebooksTestText[i])
            cy.get(backToMain)
            .click()
        }
    })
})