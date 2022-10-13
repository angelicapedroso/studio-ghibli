describe('The locations page', () => {
  it('test navbar', () => {
    cy.visit('/locations');

    cy.contains('a', 'Studio Ghibli').click();
    cy.url().should('include', '/');

    cy.contains('a', 'Films').click();
    cy.url().should('include', '/films');

    cy.contains('a', 'People').click();
    cy.url().should('include', '/people');

    cy.contains('a', 'Locations').click();
    cy.url().should('include', '/locations');
  });

  it('test content', () => {
    cy.visit('/locations');

    cy.get('input').should('exist');

    cy.get('input').get('[type="text"]').type('hospital');
    cy.contains('h3', 'Hospital');

    cy.contains('h1', 'Locations');

    cy.get('input').get('[type="text"]').clear();

    cy.get('h3').should('have.length', 25);
  });
});
