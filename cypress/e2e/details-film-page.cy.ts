describe('The locations page', () => {
  it('test navbar', () => {
    cy.visit('/details-film/58611129-2dbc-4a81-a72f-77ddfc1b1b49');

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
    cy.visit('/details-film/58611129-2dbc-4a81-a72f-77ddfc1b1b49');

    cy.get('img').should('exist');

    cy.contains('h2', 'My Neighbor Totoro');

    cy.contains('h3', 'Director').next().contains('Hayao Miyazaki');
    cy.contains('h3', 'Producer').next().contains('Hayao Miyazaki');
    cy.contains('h3', 'Release date').next().contains('1988');
    cy.contains('h3', 'Running time').next().contains('86');
    cy.contains('h3', 'Rating score').next().contains('93');
    cy.contains('h3', 'Description').next().contains('Two sisters move to the country');
  });
});
