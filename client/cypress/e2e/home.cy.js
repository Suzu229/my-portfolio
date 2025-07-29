describe('Home Page Test', () => {
  it('should display the Welcome title', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Welcome to My Portfolio!');
  });
});
