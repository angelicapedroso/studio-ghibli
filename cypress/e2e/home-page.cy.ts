describe('The home page', () => {
  it('test navbar', () => {
    cy.visit('/');

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
    cy.visit('/');
    cy.contains('h2', 'My Neighbor Totoro');
    cy.contains('h2', 'Kiki\'s Delivery Service');
    cy.contains('h2', 'Princess Mononoke');
    cy.contains('h2', 'Spirited Away');
    cy.contains('h2', 'Arrietty');
    cy.contains('h2', 'The Tale of the Princess Kaguya');

    cy.get('img').should('have.length', 6);

    cy.get('p').should('have.length', 12);

    cy.contains('button', 'Details').click();
    cy.url().should('include', '/details-film');
  });
});
