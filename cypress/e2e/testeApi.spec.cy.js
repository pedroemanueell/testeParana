describe('Validar API com Cypress', () => {
    it('deverá realizar uma requisicao GET', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
          
          expect(response.status).to.eq(200);
  
          
          cy.wrap(response.body).should('have.property', 'id');
          cy.wrap(response.body).should('have.property', 'name');
          cy.wrap(response.body).should('have.property', 'username');
          cy.wrap(response.body).should('have.property', 'email');
          cy.wrap(response.body).should('have.property', 'address');
        });
    });
  
    it('deverá realizar uma requisicao POST', () => {
      const usuario = {
    
      };
  
      cy.request('POST', 'https://jsonplaceholder.typicode.com/users', usuario)
        .then((response) => {
          expect(response.status).to.eq(201);
        });
    });
  
    it('deverá realizar uma requisicao PUT', () => {
      const usuarioModificado = {
        // Define el objeto de usuario modificado para el PUT request
      };
  
      cy.request('PUT', 'https://jsonplaceholder.typicode.com/users/1', usuarioModificado)
        .then((response) => {
          // Validar el código de respuesta
          expect(response.status).to.eq(200);
  
          // Validar el JSON schema
          // Añade las validaciones del JSON schema aquí
        });
    });
  
    it('deverá realizar uma requisicao DELETE', () => {
      cy.request('DELETE', 'https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
          // Validar el código de respuesta
          expect(response.status).to.eq(200);
        });
    });
  });
  