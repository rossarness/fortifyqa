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
var itemPrices = new Array
var cartBack = '.crossTopbuttons > .grey'
var cartCount = '#basketLink > .count'

describe("Testsuite No. 1 for Alza.cz", () => {
  it('Test 1: Sort and add two most expensive items to cart', () => {
    cy.get(testCategory)
    .trigger("mouseover")
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
      cy.get(cartCount)
      .contains(count).should("be.visible")
    }
  })
})