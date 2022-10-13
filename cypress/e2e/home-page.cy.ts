describe('The Home Page', () => {
  it('test navbar', () => {
    cy.visit('/');

    cy.contains('li', 'Studio Ghibli');
    cy.contains('li', 'Films');
    cy.contains('li', 'People');
    cy.contains('li', 'Locations');

    cy.contains('a', 'Studio Ghibli').should('have.attr', 'href', '/');
    cy.contains('a', 'Films').should('have.attr', 'href', '/films');
    cy.contains('a', 'People').should('have.attr', 'href', '/people');
    cy.contains('a', 'Locations').should('have.attr', 'href', '/locations');

    cy.contains('a', 'Studio Ghibli').click();
    cy.url().should('include', '/');

    cy.contains('a', 'Films').click();
    cy.url().should('include', '/films');

    cy.contains('a', 'People').click();
    cy.url().should('include', '/people');

    cy.contains('a', 'Locations').click();
    cy.url().should('include', '/locations');
  });
});
