describe('NoteApp', () => {
     
  it('Check functionality of Register button with null input fields', () => { 
    cy.fixture('data').then('registerUrl',() => {
      cy.visit('/register');
    });
    cy.get('.btn btn-outline-secondary btn-lg px-4').click();
    //cy.get('.invalid-feedback').should('contain', 'This field is required');
});
 
  it('Check functionality of Register button with invalid inputs', () => {
    cy.get('#email').type('132gft');
    cy.get('[data-testid="register-password"]').type('abc');
    cy.get('[data-testid="register-confirm-password"]').type('abc');
    cy.get('[data-testid="register-submit"]').click();
    cy.get('[invalid-feedback]').eq(1).should('contain', 'Email address is invalid');
    cy.get('[invalid-feedback]').should('contain', 'Password should be between 6 and 30 characters');
  });

  it('Check functionality of Register button with valid inputs', () => {
    cy.get('[data-testid="register-email"]').type('amshuacharya6@gmail.com');
    cy.get('[data-testid="register-password"]').type('NoteApp@34$');
    cy.get('[data-testid="register-name"]').type('Amshu Acharya');
    cy.get('[data-testid="register-confirm-password"]').type('NoteApp@34$');
    cy.get('[btn btn-lg btn-primary d-block w-100]').click();
    cy.url().should('include', '/login');
  });

  it('Verify if Google account text is clickable and functions', () => {
    cy.get('[.btn btn-lg w-100]').eq(1).click();
  });

  it('Check if user can reset password', () => {
    cy.get('[text-decoration-none]').eq(1).click();
    cy.url().should('include', '/reset-password');
  });
});



  

