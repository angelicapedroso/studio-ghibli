describe('The films page', () => {
  it('test navbar', () => {
    cy.visit('/films');

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
    cy.visit('/films');

    cy.get('img').should('have.length', 22);

    cy.get('input').should('exist');

    cy.get('input').get('[type="text"]').type('Totoro');
    cy.contains('h2', 'My Neighbor Totoro');

    cy.contains('h2', 'Films');

    cy.contains('button', 'Details').click();
    cy.url().should('include', '/details-film');
  });
});
