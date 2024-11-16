describe('Signup New User', () => {  
  it('Successful Signup with valid Information', () => {  
    cy.visit('/signUp/signup.html');

    // SignUp New User
    cy.get('#email').type('example@gmail.com');
    cy.get('#firstname').type('test');
    cy.get('#lastname').type('test');
    cy.get('#birthdate').type('1990-01-01');
    cy.get('#phone').type('09129649133');
    cy.get('#password').type('test1');
    cy.get('#password-confirm').type('test1');
    cy.get('form').contains('Sign Up').click();

    // Validate success alert and redirect
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Sign up successful!');
    });
    cy.url().should('include', '/login');
    cy.wait(1000);
  });

  it('Unsuccessful Signup with unmatch password', () => {
    cy.visit('/signUp/signup.html');

    // SignUp New User
    cy.get('#email').type('example@gmail.com');
    cy.get('#firstname').type('test');
    cy.get('#lastname').type('test');
    cy.get('#birthdate').type('1990-01-01');
    cy.get('#phone').type('09129649133');

    // Unmatch Passwords
    cy.get('#password').type('pass1');
    cy.get('#password-confirm').type('pass2');
    cy.get('form').contains('Sign Up').click();

    // Validate error alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Passwords do not match!');
    });
  });

  it('Unsuccessful Signup with invalid email', () => {
    cy.visit('/signUp/signup.html');

    cy.get('#email').type('examplegmail.com'); // wrong Email 
    cy.get('#firstname').type('test');
    cy.get('#lastname').type('test');
    cy.get('#birthdate').type('1990-01-01');
    cy.get('#phone').type('09129649133'); 
    cy.get('#password').type('pass1');
    cy.get('#password-confirm').type('pass1');
    cy.get('form').contains('Sign Up').click();

    // Validate email validation message
    cy.get('#email:invalid').should('have.length', 1);
  });

  it('Unsuccessful Signup with invalid phone number', () => {
    cy.visit('/signUp/signup.html');

    cy.get('#email').type('example@gmail.com');
    cy.get('#firstname').type('test');
    cy.get('#lastname').type('test');
    cy.get('#birthdate').type('1990-01-01');
    cy.get('#phone').type('09129649e4rsd133'); // wrong Phone number
    cy.get('#password').type('pass1');
    cy.get('#password-confirm').type('pass1');
    cy.get('form').contains('Sign Up').click();

    // Validate error alert for phone number
    cy.get('#phone:invalid').should('have.length', 1);
  });
});
