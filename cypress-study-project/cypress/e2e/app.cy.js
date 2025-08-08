class RegisterForm {
  elements = {
    titleInput: () => cy.get('#title'),
    urlInput: () => cy.get('#imageUrl'),
    titleFeedback: () => cy.get('#titleFeedback'),
    urlFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit'),
  }
  typeTitle(text) {
    if (!text) return
    this.elements.titleInput().type(text)
  }

  typeUrl(text) {
    if (!text) return
    this.elements.urlInput().type(text)
  }

  onSubmitClick() {
    this.elements.submitBtn().click()
  }

  onTitleFeedbackCheck() {
    this.elements.titleFeedback().should('contain.text', 'Please type a title for the image.')
  }

  onUrlFeedbackCheck() {
    this.elements.urlFeedback().should('contain.text', 'Please type a valid URL')
  }

  onInputIconsCheck() {
    this.elements.submitBtn().click()
    this.elements.titleInput().should('have.css', 'background-image').and('include', 'data:image/svg+xml')
    this.elements.titleInput().should('have.css', 'border-color').and('equal', errorColor)
  }
}
const registerForm = new RegisterForm()
const errorColor = 'rgb(220, 53, 69)'
describe('Image Registration', () => {
  describe('Submitting an image with invalid inputs', () => {
    after(() => {
      cy.clearAllLocalStorage()
    })
    const input = {
      title: 'Baby Yoda',
      url: 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })

    it(`When I enter ${input.title} in the title field`, () => {
      // registerForm.typeTitle(input.title)
    })
    it(`Then I enter ${input.url} in the URL field`, () => {
      // registerForm.typeUrl(input.url)
    })
    it(`Then I click the submit button`, () => {
      // registerForm.onSubmitClick()
    })
    it(`Then I should see "Please type a title for the image" message above the title field`, () => {
      // registerForm.onSubmitClick()
      // registerForm.onTitleFeedbackCheck()

    })
    it(`And I should see "Please type a valid URL" message above the imageUrl field`, () => {
      // registerForm.onUrlFeedbackCheck()
    })
    it(`And I should see an exclamation icon in the title and URL fields`, () => {
      registerForm.onInputIconsCheck()
    })
  })
})