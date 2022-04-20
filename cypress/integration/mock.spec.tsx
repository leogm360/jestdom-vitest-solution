export {};

describe("App", () => {
  it("should enter home page and click on the counter button two times.", () => {
    cy.visit("/");

    const counter = cy.contains("count is: ");

    counter.should("contain", "0");

    counter.click();

    counter.click();

    counter.should("contain", "2");
  });
});
