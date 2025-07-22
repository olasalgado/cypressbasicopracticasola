

describe('Agregar tareas', () => {

  
  it('escribe una tarea en el input (sin añadirla)', () => {


    cy.visit('https://todomvc.com/examples/react/dist/#/')

    cy.get('[data-testid="text-input"]')

      .type('pasear al perro')

      .should('have.value', 'pasear al perro')

  })



})

    it('agregar una tarea a la lista', () => {
    

    cy.visit('https://todomvc.com/examples/react/dist/#/')

    cy.get('[data-testid="text-input"]')

      .type('pasear al perro{enter}')

      
    cy.get('.todo-list').contains('pasear al perro')



  })



  it('Agregar una tarea a la lista y marcarla como completada', () => {

    cy.visit('https://todomvc.com/examples/react/dist/#/')
  
    cy.get('.new-todo')

      .type('pasear al perro{enter}')
  
   
    cy.get('.todo-list li')

      .should('contain.text', 'pasear al perro')
  
    /
    cy.get('.todo-list li .toggle').click()
  
  
    cy.get('.todo-list li')

      .should('have.class', 'completed')



  })











  



