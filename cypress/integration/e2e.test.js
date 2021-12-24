describe("e2e for search gist", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("show 404 when username doesn't exist", () => {
        cy.findByTestId("search-input").type("ohye11{enter}");
        cy.findByText("Request failed with status code 404").should("exist")
        cy.findByTestId("logo").click();
        cy.url().should("not.contain", "search?");
    });
    it("show no record found when username has no gist", () => {
        cy.findByTestId("search-input").type("fionadawn{enter}");
        cy.findByText("No Record Found!").should("exist")
    });
    it("shows gist records for username with public gists", () => {
        cy.findByTestId("search-input").type("kissgyorgy{enter}");
        cy.findByText("No Record Found!").should("not.exist")
        cy.findByTestId("search-input").type("fionadawn{enter}");
        cy.findByText("No Record Found!").should("exist")
        cy.url().should("contain", "search?");
    });
})