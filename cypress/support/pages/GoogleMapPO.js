export default class GoogleMapPage {
	
	getSearchBoxLocator() {
		return 'input#searchboxinput'
	}

	getSearchButtonLocator() {
		return 'button#searchbox-searchbutton'
	}

	getSearchResultsLocator() {
		return '.DUwDvf span'
	}

	searchFor(testData) {
		for (var i = 0; i < testData.locations.length; i++) {
			var data = testData.locations[i];
			cy.get(this.getSearchBoxLocator()).should('be.visible')
			cy.get(this.getSearchBoxLocator()).type(data.location)
		}
	}

	clickSearchButton() {
		cy.get(this.getSearchButtonLocator()).should('be.visible')
		cy.get(this.getSearchButtonLocator()).click()
	}

	verifySearchResults(testData) {
		for (var i = 0; i < testData.locations.length; i++) {
			var data = testData.locations[i];
			cy.get(this.getSearchResultsLocator()).eq(0).should('be.visible')
			cy.get(this.getSearchResultsLocator()).eq(0).should('have.text', data.location)
		}		
	}

}
