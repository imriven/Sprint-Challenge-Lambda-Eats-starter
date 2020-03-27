describe("Pizza Form Test", function() {
  it("Name. checkboxes, button checks", function() {
    cy.visit("/pizza");
  });
  it("myTest", function() {
    cy.get("input[data-cy=name]")
      .type("Christina")
      .should("have.value", "Christina");

    cy.get("input[data-cy=chicken]")
      .check()
      .should("be.checked");

    cy.get("input[data-cy=peppers]")
      .check()
      .should("be.checked");

    cy.get("input[data-cy=oysters]")
      .check()
      .should("be.checked");

    cy.get("button[data-cy=submit]").click();
    cy.wait(1000);
  });

  // it("Test2", function() {
  //     cy.get("input[data-cy=name]")
  //         .type("Christina")
  //         .should("have.value", "Christina");
  //     cy.get("input[data-cy=email]")
  //         .type("emailemail.com")
  //   cy.get("div[data-cy=emailerror]")
  //           .should("have.text", "Please enter your email" )
  //     cy.get("input[data-cy=password]")
  //         .type("shadow")
  //         .should("have.value", "shadow");
  //     cy.get("select[data-cy=positions]")
  //         .select("gamer")
  //         .should("have.value", "gamer");
  //     cy.get("input[data-cy=terms]")
  //     .check()
  //         .should("be.checked")

  //   });
});
