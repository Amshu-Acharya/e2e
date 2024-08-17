import register_name from "../fixtures/register_name.json"

describe('User Registration with valid credentials', () => {
    it(' Register a new user', () => {
        register_name.forEach((user) =>{
        cy.visit('https://pacifichunt.com/register') 
        cy.get('#r8').type(user.FirstName); 
        cy.get('#r9').type(user.LastName) 
        cy.get('#ra').type(user.Email) 
        cy.get('#rb').type(user.Password) 
        cy.get('#rc').type(user.ConfirmPassword)
        cy.get('.PrivateSwitchBase-input css-1m9pwf3').check()
        cy.get('.MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-43hbgq').submit() 
        cy.contains('Successful and Thanks giving message is given') 
        })
    })

    it('Login with invalid credentials', () => {
        cy.get('#rd').type(user.EmailAddress) 
        cy.get('#re').type(user.Password2) 
        cy.get('.MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth css-p5j6rl').click() 
        cy.contains('Invalid Email should be displayed in inputfield') 
    })

     it(' Login with valid credentials', () => {
        cy.get('#rd').type(user.EmailAddress1) 
        cy.get('#re').type(user.Password3) 
        cy.get('.MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth css-p5j6rl').click() 
        cy.url().should('include', 'https://pacifichunt.com/')
})

it(' Search jobs by Category', () => {
    cy.get('a.text-decoration-none.headerLinks').contains('Jobs').click();
    cy.get('div.MuiInputBase-root[aria-haspopup="listbox"]').click();
    cy.contains('Information Technology').should('be.visible'); 
  });

  it(' Search jobs by keyword', () => {
    cy.get('a.text-decoration-none.headerLinks').contains('Jobs').click();
    cy.get('.MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-mnn31').eq(0).click();
    cy.contains('Associate QA').should('be.visible');
  });

  it(' Update profile information', () => {
    cy.get('button.MuiButton-root img.MuiAvatar-img').click();  
    cy.contains('Settings').click();
    cy.get('#rg').clear().type('Amshu');  
    cy.get('.MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-43hbgq').click(); 
    cy.contains('Success').should('be.visible'); 
  });

  it('uploads a resume file', () => {
    cy.visit('https://pacifichunt.com/dashboard/settings/?tabs=professional-information');

    cy.fixture('Resume').then(fileContent => {
      cy.get('.MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-43hbgq').attachFile({
        fileContent: fileContent,
        fileName: 'resume.pdf',
      });

      cy.get('.MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-43hbgq').click(); 
      cy.contains('Success').should('be.visible'); 
});

})
})
