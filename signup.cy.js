describe('Signup New User', () => {
    beforeEach(() => {
        cy.visit('/signUp/signup.html'); // Modify this to your signup page route
    });
  
    it('Successful Signup with valid Information', () => {
        cy.get('#email').type('valid.email@example.com');
        cy.get('#firstname').type('First');
        cy.get('#lastname').type('Last');
        cy.get('#birthdate').type('1990-01-01');
        cy.get('#phone').type('1234567890');
        cy.get('#password').type('ValidPassword123');
        cy.get('#password-confirm').type('ValidPassword123');
        cy.get('button[type=submit]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful!');
        });
        cy.url().should('include', '/login');
    });
  
    it('Unsuccessful Signup with unmatched password', () => {
        cy.get('#email').type('valid.email@example.com');
        cy.get('#firstname').type('First');
        cy.get('#lastname').type('Last');
        cy.get('#birthdate').type('1990-01-01');
        cy.get('#phone').type('1234567890');
        cy.get('#password').type('Password123');
        cy.get('#password-confirm').type('DifferentPassword123');
        cy.get('button[type=submit]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Passwords do not match!');
        });
    });
  
    it('Unsuccessful Signup with invalid email', () => {
        cy.get('#email').type('invalid.email');
        cy.get('#firstname').type('First');
        cy.get('#lastname').type('Last');
        cy.get('#birthdate').type('1990-01-01');
        cy.get('#phone').type('1234567890');
        cy.get('#password').type('ValidPassword123');
        cy.get('#password-confirm').type('ValidPassword123');
        cy.get('button[type=submit]').click();
        cy.get('#email').then(($input) => { 
          cy.wrap($input).invoke('prop', 'validationMessage')
          .should('contain', 'Please include an \'@\' in the email address.');
       });
    });
  
    it('Unsuccessful Signup with invalid phone number', () => {
        cy.get('#email').type('valid.email@example.com');
        cy.get('#firstname').type('First');
        cy.get('#lastname').type('Last');
        cy.get('#birthdate').type('1990-01-01');
        cy.get('#phone').type('invalidphone');
        cy.get('#password').type('ValidPassword123');
        cy.get('#password-confirm').type('ValidPassword123');
        cy.get('button[type=submit]').click();
        cy.get('#phone').then(($input) => { 
          cy.wrap($input).invoke('prop', 'validationMessage')
          .should('contain', 'Please fill out this field');
       });
    });
  
    it('Unsuccessful Signup without firstname', () => {
        cy.get('#email').type('valid.email@example.com');
        cy.get('#lastname').type('Last');
        cy.get('#birthdate').type('1990-01-01');
        cy.get('#phone').type('1234567890');
        cy.get('#password').type('ValidPassword123');
        cy.get('#password-confirm').type('ValidPassword123');
        cy.get('button[type=submit]').click();
        cy.get('#firstname').then(($input) => { 
          cy.wrap($input).invoke('prop', 'validationMessage')
          .should('contain', 'Please fill out this field');
       });
    });
  
    it('Unsuccessful Signup without lastname', () => {
        cy.get('#email').type('valid.email@example.com');
        cy.get('#firstname').type('First');
        cy.get('#birthdate').type('1990-01-01');
        cy.get('#phone').type('1234567890');
        cy.get('#password').type('ValidPassword123');
        cy.get('#password-confirm').type('ValidPassword123');
        cy.get('button[type=submit]').click();
        cy.get('#lastname').then(($input) => { 
          cy.wrap($input).invoke('prop', 'validationMessage')
          .should('contain', 'Please fill out this field');
       });
    });
  
    it('Unsuccessful Signup without birthdate', () => {
        cy.get('#email').type('valid.email@example.com');
        cy.get('#firstname').type('First');
        cy.get('#lastname').type('Last');
        cy.get('#phone').type('1234567890');
        cy.get('#password').type('ValidPassword123');
        cy.get('#password-confirm').type('ValidPassword123');
        cy.get('button[type=submit]').click();
        cy.get('#birthdate').then(($input) => { 
          cy.wrap($input).invoke('prop', 'validationMessage')
          .should('contain', 'Please fill out this field');
       });
    });
  
    it('Unsuccessful Signup without password', () => {
        cy.get('#email').type('valid.email@example.com');
        cy.get('#firstname').type('First');
        cy.get('#lastname').type('Last');
        cy.get('#birthdate').type('1990-01-01');
        cy.get('#phone').type('1234567890');
        cy.get('button[type=submit]').click();
        cy.get('#password').then(($input) => { 
          cy.wrap($input).invoke('prop', 'validationMessage')
          .should('contain', 'Please fill out this field');
       });
    });
  
    it('Unsuccessful Signup without confirm password', () => {
        cy.get('#email').type('valid.email@example.com');
        cy.get('#firstname').type('First');
        cy.get('#lastname').type('Last');
        cy.get('#birthdate').type('1990-01-01');
        cy.get('#phone').type('1234567890');
        cy.get('#password').type('ValidPassword123');
        cy.get('button[type=submit]').click();
        cy.get('#password-confirm').then(($input) => { 
          cy.wrap($input).invoke('prop', 'validationMessage')
          .should('contain', 'Please fill out this field');
       });
    });
  });
  
