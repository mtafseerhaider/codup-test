describe('Test 1 - API Testing', () => {
	let userZipCode = '33263'
	it('Validate Chelsey Dietrich has Zipcode 33263', () => {
		cy.request({
			method: 'GET',
			url: Cypress.env('apiEndpoint') + '/users',
			headers: {
				accept: 'application/json',
			},
		}).as('usersRequest')
		cy.get('@usersRequest').then(response => {
			expect(response.status).to.eq(200)
			assert.isArray(response.body, 'Users Response is an array')
			expect(response.body[4]).to.have.property('name', 'Chelsey Dietrich')
			expect(response.body[4].address).to.have.property('zipcode', userZipCode)
		})
	})
})
