describe("Joke Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays basic elements", () => {
    cy.get("h1").should("be.visible").and("contain", "PunTime");
    cy.contains("A simple application that fetches random jokes").should(
      "be.visible"
    );

    cy.get("button").contains("Fetch More").should("be.visible");
    cy.get('select, [role="combobox"]').should("be.visible");
  });

  it("displays joke cards after fetching", () => {
    cy.get("button").contains("Fetch More").click();
    cy.wait(2000);
    cy.get(".bg-card").should("be.visible");
    cy.get(".bg-card").should("have.length.at.least", 1);
    cy.get(".bg-card").first().find("p").should("not.be.empty");
  });

  it("translates jokes when language is changed", () => {
    cy.get('[role="combobox"]').click();
    cy.get('[role="option"]').contains("English").click();
    cy.get("button").contains("Fetch More").click();
    cy.get(".bg-card", { timeout: 10000 }).should("be.visible");

    cy.get(".bg-card")
      .first()
      .find("p.joke-text")
      .invoke("text")
      .as("englishJoke");

    cy.get('[role="combobox"]').click();
    cy.get('[role="option"]').contains("German").click();

    cy.wait(2000);

    cy.get("@englishJoke").then((englishJoke) => {
      cy.get(".bg-card")
        .first()
        .find("p.joke-text")
        .should("not.equal", englishJoke);
    });
  });
});
