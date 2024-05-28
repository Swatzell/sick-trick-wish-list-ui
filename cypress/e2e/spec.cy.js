describe('Trick Form and api trickList', () => {
  beforeEach(() => {
    cy.fixture('example.json').as('tricksData');
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', { fixture: 'example.json' }).as('getTricks');
    cy.visit('http://localhost:3000/');
  });

  it('should display tricks fetched from the API', function() {
    cy.get('ul').within(() => {
      cy.get('li').should('have.length', this.tricksData.length);
      this.tricksData.forEach(trick => {
        cy.contains(`Stance:${trick.stance}`);
        cy.contains(`Name:${trick.name}`);
        cy.contains(`Obstacle:${trick.obstacle}`);
        cy.contains(`Tutorial: ${trick.tutorial}`);
      });
    });
  });


    });