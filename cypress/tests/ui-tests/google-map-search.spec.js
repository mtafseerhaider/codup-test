import GoogleMapPage from '../../support/pages/GoogleMapPO'

const googleMapPage = new GoogleMapPage()
const time = 1000

describe('Test 2 - UI testing', function () {
	beforeEach(function () {
		cy.fixture(Cypress.env('fixtureFile')).then(testData => {
			this.testData = testData
		})
	})

	it('Should open the website', function () {
		cy.log('Openning the URL')
		cy.visit(Cypress.env('webUrl'))
		cy.wait(time * 2)
	})

	it('Should search for test data', function () {
		googleMapPage.searchFor(this.testData)
		googleMapPage.clickSearchButton()
		cy.wait(time * 5)
	})

	it('Should verify search results', function () {
		googleMapPage.verifySearchResults(this.testData)
	})
})
