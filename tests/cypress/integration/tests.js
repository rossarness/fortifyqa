const testCategory = '[title="Komponenty"]'
const testSubCategory = '#fb18852654 > div > div.c.c2 > div:nth-child(1) > div.cr > a'
const categoryTitlePath = 'h1'
const categoryTitle = 'Grafické karty'
const vendorsTest = ['NVIDIA', 'AMD']
const vendorsTestPath = [
  '.catlistContainer > .catlist > .subCategories > [href="/graficke-karty-s-cipem-nvidia/18849879.htm"] > .container',
  '.catlistContainer > .catlist > .subCategories > [href="/graficke-karty-s-cipem-amd/18852308.htm"] > .container']
const sortByPath = '#ui-id-4'
const addToCartButtons = [
  '.first.firstRow > .bottom > .price > .btnkx > .btnk1',
  '[data-code="EN064p5"] > .bottom > .price > .btnkx > .btnk1'
]
var cartBack = '.crossTopbuttons > .grey'
var cartCount = '#basketLink > .count'

const searchText = 'Core i7'
const itemRow = '.last.firstRow'
const itemNamePath = '.last.firstRow > .top > .fb > .name'
const productPageTitle = 'h1'

const langSelector = '.selector'
const lang = ['.language > .langEN', '.langCZ']
const btnSearch = '#btnSearch'
const btnSearchText = ['Search', 'Hledat']
const langTestCategory = '#headertop_rptSatellitesBeta_li_4 > .tab > .tabText'
const langTestCategoryText = ['Media & Entertainment', 'zábava']
const notebooksTest = '#besti > h4'
const notebooksTestText = ['Best Deals', 'Nejprodávanější']
const header = '#lblMujUcet'
const headerTest = ['My Alza', 'Moje Alza']
const notebooksCategory = '#litp18842920 > .bx'
const backToMain = '#logo > a'

describe("Testsuite for Alza.cz", () => {
  before (() => {
    cy.viewport(1920, 1080)
    cy.visit("https://www.alza.cz/")
  })
  it('Test 1: Sort and add two most expensive items to cart', () => {
    cy.get(testCategory)
    .trigger("mouseover")
    cy.wait(500)
    cy.get(testSubCategory)
    .click()
    cy.get(categoryTitlePath)
    .contains(categoryTitle)
    cy.get('.catlistContainer')
    .should('be.visible')
    for (var i = 0; i < vendorsTest.length; i++){
      cy.get(vendorsTestPath[i])
      .contains(vendorsTest[i])
    }
    cy.get(sortByPath)
    .click()
    cy.wait(2000)
    for (var i = 0; i < addToCartButtons.length; i++){
      var count = i + 1
      count.toString()
      cy.get(addToCartButtons[i])
      .click()
      cy.get(cartBack)
      .click()
      cy.get(cartCount, {timeout: 7000})
      .contains(count).should("be.visible")
    }
  })
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
    cy.get(backToMain)
    .click()
  })
  it("Test 3: Switch Website Language", () => {
    for (var i = 0; i < lang.length; i++){
        cy.get(langSelector)
        .click()
        cy.get(lang[i])
        .click()
        cy.get(btnSearch)
        .should('contain', btnSearchText[i])
        cy.get(langTestCategory)
        .contains(langTestCategoryText[i])
        .should('contain', langTestCategoryText[i])
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