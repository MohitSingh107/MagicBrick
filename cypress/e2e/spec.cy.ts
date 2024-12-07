describe('Testing User Login & Logout', () => {
  it('New User Register, Login & Logout', () => {
    cy.visit('/signup');
    cy.get('input[name="name"]').type('john Doe');
    cy.get('input[name="email"]').type('johnDoe@gmail.com');
    cy.get('input[name="mobile"]').type('9988113831');
    cy.get('input[name="password"]').type('john@123');
    cy.get('button').contains('Signup').click();
    cy.url().should('include', '/login');
    cy.get('input[name="email"]').type('johnDoe@gmail.com');
    cy.get('input[name="password"]').type('john@123');
    cy.get('button').contains('Login').click();
    cy.window().then((window) => {
      const email = window.localStorage.getItem('email');
      const password = window.localStorage.getItem('password');
      expect(email).to.be.equal('johnDoe@gmail.com');
      expect(password).to.be.equal('john@123');
    });
    cy.get('.link').contains('Login').should('not.exist');
    cy.get('.link').contains('Logout').click();
    cy.window().then((window) => {
      const email = window.localStorage.getItem('email');
      const password = window.localStorage.getItem('password');
      console.log(email);
      console.log(password);
      expect(email).to.be.null;
      expect(password).to.be.null;
    });
    cy.get('.link').contains('Login').should('exist');
  })

})