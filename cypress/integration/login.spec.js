describe('TODO App > ', () => {

    it('Sign In', () => {
      cy.visit('https://react-redux.realworld.io/#/login');
      cy.title().should('eq', 'Conduit');
      cy.location('protocol').should('eq', 'https:');
      cy.get('input[type="email"]').type('lamgadekamal@gmail.com');
      cy.get('input[type="password"]').type('Auckland021');
      cy.get('.btn').contains('Sign in').should('be.visible').click();
      cy.contains('Your Feed', { timeout: 7000 }).should('be.visible');
    })


    it('Create a post', () => {
        cy.contains('New Post').click();
        cy.location('hash').should('include', '#/editor');
        cy.get('input[placeholder="Article Title"]').type('test');
        cy.get('input[placeholder="What\'s this article about?"]').type('test021');
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('dsfadfasdfasf');
        cy.contains('Publish Article').click();
        cy.url().should('include', 'article');
      })
});