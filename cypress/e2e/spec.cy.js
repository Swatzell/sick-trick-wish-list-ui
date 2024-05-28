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

  it('should allow the input value in the form', () => {
    cy.get('select').first().select('Regular').should('have.value', 'Regular');
    cy.get('input[placeholder="Name of Trick"]').type('Heelflip').should('have.value', 'Heelflip');
    cy.get('select').eq(1).select('Rail').should('have.value', 'Rail');
    cy.get('input[placeholder="Link to Tutorial"]').type('https://example.com/heelflip').should('have.value', 'https://example.com/heelflip');
  });


    });