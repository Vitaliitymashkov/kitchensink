/// <reference types="cypress" />

context("Network Requests", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.oanda.com/currency-converter/en/?from=EUR&to=USD&amount=1"
    );
  });

  // Manage HTTP requests in your app

  it.only("cy.request() - make an XHR request", () => {
    let text11;
    //https://fxds-public-exchange-rates-api.oanda.com/cc-api/currencies?base=EUR&quote=USD&data_type=general_currency_pair&start_date=2023-04-07&end_date=2023-04-08
    cy.intercept("**/cc-api/currencies?base=EUR&quote=USD*").as(
      "getCurrencyForDate"
    );

    cy.get(".react-datepicker__input-container").click();
    cy.get(".react-datepicker__day--today")
      .parent()
      .prev(".react-datepicker__week")
      .eq(0)
      .children()
      .eq(6)
      .invoke("text")
      .then((text1) => {
        text11 = text1;
        cy.log(text1);
      });
    cy.log(text11);

    cy.get(".react-datepicker__input-container").click();
    cy.get(".react-datepicker__day--today")
      .parent()
      .prev(".react-datepicker__week")
      .eq(0)
      .children()
      .eq(6)
      .click({ force: true });

    // .invoke('text').then((text) => {
    //   cy.log(text);
    // }).as('currentDate');

    // cy.get('@currentDate').prev().click();

    // cy.request('https://fxds-public-exchange-rates-api.oanda.com/cc-api/currencies?base=EUR&quote=USD&data_type=general_currency_pair&start_date=2023-04-06&end_date=2023-04-07')

    // cy.request('https://labs-api.oanda.com/v2/rates?division=MKTD&instruments=EUR_USD&instruments=USD_JPY&instruments=XAU_USD&instruments=BTC_USD')

    // cy.wait("@getCurrencyForDate", {timeout: 10000}).its("response.statusCode").should("eq", 200); //WORKS
    cy.wait("@getCurrencyForDate", {timeout: 10000}).should(({ response }) => {
      expect(response.statusCode).to.eq(200);
      
      //Because we have an array!!!!!!!!!!
      expect(response.body.response[0]).to.have.property('base_currency', 'EUR');
      expect(response.body.response[0]).to.have.property('quote_currency', 'USD');
    });


    
    //.should((response) => {
    // the server sometimes gets an extra comment posted from another machine
    // which gets returned as 1 extra object
    // expect(response.body).to.have.property('length').and.be.oneOf([500, 501])

    //expect(response.body).to.have.property("base_currency", "EUR");
    // expect(response).to.have.property('duration')
    //});
  });
});
