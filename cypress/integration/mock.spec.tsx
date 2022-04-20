export {};

describe("App", () => {
  it("should enter home page and click on the counter button two times.", () => {
    cy.visit("/");

    const counter = cy.contains("count is: ");

    counter.click();

    counter.click();

    const counterValue = cy.contains("2");

    counterValue.should("contain", "2");
  });
});
