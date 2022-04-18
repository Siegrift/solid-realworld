describe("unsigned user", () => {
  it("loads a comment", () => {
    cy.visit("http://localhost:3000");
    cy.get(".article-preview:nth-child(2) h1").click();
    cy.get(".article-page").click();

    cy.contains(
      "Share your knowledge and enpower the community by creating a new implementation"
    ).should("be.visible");
  });

  it("shows articles with specific tag", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".tag-pill:nth-child(3)").click();
    cy.contains("No articles are here... yet.").should("be.visible");

    cy.get(".tag-pill:nth-child(1)").click();
    cy.get(".preview-link > h1").click();
    cy.contains("Welcome to RealWorld project").should("be.visible");
  });

  it("logs in", () => {
    cy.visit("http://localhost:3000/#/");
    cy.get(".nav-item:nth-child(2) > .nav-link").click();
    cy.get(".form-group:nth-child(1) > .form-control").click();
    cy.get(".form-group:nth-child(1) > .form-control").type("siggi@siggi.com");
    cy.get(".form-group:nth-child(2) > .form-control").type("siggi");
    cy.get(".btn").click();
    cy.get("form").submit();

    cy.url().should("contains", "http://localhost:3000/");
    cy.contains("siggi").should("be.visible");
  });
});

describe("signed in user", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/");
    cy.get(".nav-item:nth-child(2) > .nav-link").click();
    cy.get(".form-group:nth-child(1) > .form-control").click();
    cy.get(".form-group:nth-child(1) > .form-control").type("siggi@siggi.com");
    cy.get(".form-group:nth-child(2) > .form-control").type("siggi");
    cy.get(".btn").click();
    cy.get("form").submit();

    cy.url().should("contains", "http://localhost:3000/");
    cy.contains("siggi").should("be.visible");
  });

  it("can create a new post and delete it", () => {
    // Blog title must be unique so add a a random hash as suffix
    const title = "Trusted Types in solid.js" + Math.random().toString(16).substring(0, 20);

    cy.get(".navbar-nav > .nav-item:nth-child(2) > .nav-link").click();
    cy.get(".form-control-lg").click();
    cy.get(".form-control-lg").type(title);
    cy.get(".form-group:nth-child(2) > .form-control").type("Trusted Types");
    cy.get(".form-group:nth-child(3) > .form-control").type(
      "Trusted types integration into solid.js"
    );
    cy.get(".form-group:nth-child(4) > .form-control").type("Trusted Types, solid.js");
    cy.get(".btn").click();

    cy.contains("Delete Article");
    cy.contains(title);

    cy.get(".btn").eq(1).click(); // Delete button
    cy.url().should("contains", "http://localhost:3000/");
  });
});

describe("Trusted Types tests", () => {
  it("loads an article (using inner HTML internally)", () => {
    cy.visit("http://localhost:3000/#");
    cy.get(".article-preview:nth-child(2) h1").click();
    cy.get(".article-page").click();

    cy.contains(
      "Share your knowledge and enpower the community by creating a new implementation"
    ).should("be.visible");
  });

  it("prevents loading unsafe content from the URL", () => {
    cy.catchTrustedTypesViolations(); // Starts catching Trusted Types violations

    cy.visit("http://localhost:3000/#/unsafe");
    // Wait a bit until the lazy loaded module finished loading
    cy.contains("Loading...").should("be.visible").wait(200);

    cy.assertTrustedTypesViolation({ type: "TrustedHTML" });
  });
});
