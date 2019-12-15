describe("Share food", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/ShareFood/#/ShareFood");

    // Click Donate navbar link

  });
  describe("Add a food", () => {
    describe("With valid attributes", () => {
      it("allows food to be submitted", () => {
        //  Fill out web form
        cy.get(".el-input__inner").type("123");
        cy.get(".el-input__inner").should("have.value","123")
        cy.get(".el-button > span").click()
      });
      after(() => {
        cy.visit("http://localhost:8080/ShareFood/#/foods");
        cy.wait(100)
         cy.get("tbody")
           .find("tr")
           .should("be.exist","123" );
      });
    });
  });
});
