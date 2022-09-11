describe("e2e testing customer filter", () => {
    it("filter customer by search", () => {
        cy.visit('http://localhost:3000/'); // opens browser and places URL in address bar
        cy.get('input[placeholder="search by name"]')
            .type("Geller")
            .get('.row').then(rows => {
                expect(rows.length).to.eq(2);
            })
    });
});