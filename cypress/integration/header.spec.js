// eslint-disable-next-line no-undef
context('Querying', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/')
  })
    describe("Horizon bar", () => {
      it("Shows the required links", () => {
            cy.get(".is-active")
              .should("contain", "Home");
            cy.get(".el-menu-demo > .el-submenu > .el-submenu__title")
              .should("contain", "Shop");
            cy.get(".el-menu-demo > :nth-child(3)")
              .should("contain", "Video");
            cy.get(".el-menu-demo > :nth-child(4)")
              .should("contain", "Restaurants");
      });
      it("Redirects when links are clicked", () => {
        cy.get(".is-active").click();
        cy.url().should("include", "/");
        cy.get(".el-menu-demo > .el-submenu > .el-submenu__title").click();
        cy.get(".2-2").click()
        cy.url().should("include", "/googlemap");
        cy.get(".el-menu-demo > :nth-child(3)").click();
        cy.url().should("include", "/video");
        cy.get(".el-menu-demo > :nth-child(4)").click();
        cy.url().should("include", "/googlemap");
      });
    })
    // eslint-disable-next-line no-undef
  describe("Verizon bar", () => {
    it("Shows the required links", () => {
      cy.get(":nth-child(1) > .el-submenu__title > span")
        .should("contain", "Foods");
      cy.get(".el-menu-vertical-demo > :nth-child(2) > .el-submenu__title")
        .should("contain", "Essay");
      cy.get(".el-menu-vertical-demo > :nth-child(3)")
        .should("contain", "Order");
      cy.get(":nth-child(4) > span")
        .should("contain", "Service Center");
    });
    it("Redirects when links are clicked", () => {
      cy.get(":nth-child(1) > .el-submenu__title > span").click();
      cy.get(".1-1").click()
      cy.url().should("include", "/ShareFood");
      cy.get(".1-2").click()
      cy.url().should("include", "/Foods");
      cy.get(".el-menu-vertical-demo > :nth-child(2) > .el-submenu__title").click();
      cy.get(".1-3").click()
      cy.url().should("include", "/ShareEssay");
      cy.get(".1-4").click()
      cy.url().should("include", "/Essay");
      cy.get(".el-menu-vertical-demo > :nth-child(3)").click();
      cy.url().should("include", "/Order");
    });
  })

  })

