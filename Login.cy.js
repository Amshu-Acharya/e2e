describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/notes/app/login');
  });

  it('should display error for empty email and password', () => {
    cy.get('[data-testid="login-submit"]').click();
    //cy.get('.invalid-feedback').should('contain', 'This field is required');
  });

  it('should display error for invalid email', () => {
    cy.get('input[name="email"]').should('be.visible').type('admin');
    cy.get('input[name="password"]').should('be.visible').type('NoteApp@34$');
    cy.get('[data-testid="login-submit"]').click();
    cy.get('.invalid-feedback').should('contain', 'Email address is invalid');
  });

  it('should log in with valid credentials', () => {
    cy.get('input[name="email"]').should('be.visible').type('amshuacharya6@gmail.com');
    cy.get('input[name="password"]').should('be.visible').type('NoteApp@34$');
    cy.get('[data-testid="login-submit"]').click();
    cy.url().should('include', '/notes/app/');
  });

  it('should display error for invalid email in forgot password process', () => {
    cy.contains('#forgotPasswordLink').should('be.visible').click();
    cy.get('input[name="email"]').should('be.visible').type('xyz@gmail.com');
    cy.get('[data-testid="forgot-password-submit"]').click({ force: true });
    cy.get('[data-testid="alert-message"]') .should('contain', 'No account found with the given email address');
  });
});
