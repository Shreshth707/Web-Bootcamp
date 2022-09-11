describe("e2e testing customer delete", () => {
    it("delete customer by button click", () => {
        cy.visit('http://localhost:3000/'); // opens browser and places URL in address bar
        cy.get('button')
            .first().click()
            .get('.row').then(rows => {
                expect(rows.length).to.eq(5);
            })
    });
});