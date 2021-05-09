/// <reference types="cypress" />


context("Bus booking form validation", () => {

    beforeEach(() => {
        cy.visit('http://localhost:90/myWebFolders/bus%20booking/');
    });

    //These tests will only pass when date is a current date or a future date.
    describe("Positive scenario", () => {
        it("Sucessful submission of form for one trip travellers", () => {
            
            cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-09-09");
            cy.get('#one-way').click();
            cy.get('#no-of-people').type(6);
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();
            cy.get(".error-alert").should("be.visible");
        })


        it("Sucessful submission of form for round trip travellers", () => {

            cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-09-09");
            cy.get('#round-Trip').click();
            cy.get('#no-of-people').type(6);
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();
            cy.get(".error-alert").should("be.visible");
        })

        it("Sucessful submission of form for round trip travellers with no feedBack", () => {

            cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-09-09");
            cy.get('#round-Trip').click();
            cy.get('#no-of-people').type(6);
            // cy.get('textarea').type("Trip to Kumasi")
            cy.get('textarea').should("be.empty");
            cy.get('#btn-submit').click();
            cy.get(".error-alert").should("be.visible");
        })

        it("Sucessful submission of form for one trip travellers with no feedBack", () => {

            cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-09-09");
            cy.get('#one-way').click();
            cy.get('#no-of-people').type(6);
            // cy.get('textarea').type("Trip to Kumasi")
            cy.get('textarea').should("be.empty");
            cy.get('#btn-submit').click();
            cy.get(".error-alert").should("be.visible");
        })
    });



    describe("Negative scenarios", () => {
        it("Should not submit when name field is empty", () => {
            // cy.get('#fName').type("Victor");
            
            cy.get('#date').type("2021-09-09");
            cy.get('#round-Trip').click();
            cy.get('#no-of-people').type(6);
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();

        });

        it("An error message should be shown to the user when  username is omitted", () => {
            // cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-09-30");
            cy.get('#round-Trip').click();
            cy.get('#no-of-people').type(6);
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();
            cy.get('#name-error').should("be.visible")
            


        });

        it("Should not submit when date is not empty", () => {
            cy.get('#fName').type("Victor");
            cy.get('#round-Trip').click();
            cy.get('#no-of-people').type(6);
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();
            cy.get('#date-error').should("be.visible")
        });

        it("Should not submit when trip type is not selected", () => {
            cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-09-30");
            cy.get('#no-of-people').type(6);
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();
            cy.get('#trip-error').should("be.visible");
        });


        it("Should not submit when No of people is empty", () => {
            cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-09-30");
            cy.get('#round-Trip').click();
            // cy.get('#no-of-people').type();
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();
            cy.get('#people-error').should("be.visible")
        });


        it("Should not submit when only textarea is filled", () => {
           
            cy.get('textarea').type("Trip to Kumasi");
            cy.get('#btn-submit').click();
            cy.get('#name-error').should("be.visible");
            cy.get('#trip-error').should("be.visible");
            cy.get('#date-error').should("be.visible");
            cy.get('#people-error').should("be.visible");

        });


        it("Should not submit when only No of people is filled", () => {
            
            cy.get('#no-of-people').type(6);
            cy.get('#btn-submit').click();

        });


        it("Should not submit when only date is filled", () => {
          
            cy.get('#date').type("2021-09-30");
            cy.get('#btn-submit').click();
            cy.get('#name-error').should("be.visible");
            cy.get('#trip-error').should("be.visible");
            cy.get('#people-error').should("be.visible");

        });


        it("Should not submit when only date and No of people is filled", () => {
            cy.get('#date').type("2021-09-30");
            cy.get('#no-of-people').type(6);
            cy.get('#btn-submit').click();
            cy.get('#name-error').should("be.visible");
            cy.get('#trip-error').should("be.visible");

        });


        it("Should not submit when only name and No of people is filled  ", () => {
            cy.get('#fName').type("Victor");
            cy.get('#no-of-people').type(6);
            cy.get('#btn-submit').click();
            cy.get('#date-error').should("be.visible");
            cy.get('#trip-error').should("be.visible");


        });


        it("Should not submit when only date and name is filled  ", () => {
            cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-09-30");
            cy.get('#btn-submit').click();
            cy.get('#trip-error').should("be.visible");
            cy.get('#people-error').should("be.visible");

        });


        it("Should not submit when only date and comment is filled  ", () => {
            cy.get('#date').type("2021-09-30");
            cy.get('textarea').type("Travelling back to Kumasi");
            cy.get('#btn-submit').click();
            cy.get('#trip-error').should("be.visible");
            cy.get('#people-error').should("be.visible");
            cy.get('#name-error').should("be.visible");
        });




        it("Should not submit when only name and comment is filled  ", () => {
            cy.get('#fName').type("Victor");
            cy.get('textarea').type("Travelling back to Kumasi");
            cy.get('#btn-submit').click();
            cy.get('#trip-error').should("be.visible");
            cy.get('#date-error').should("be.visible");
            cy.get('#people-error').should("be.visible");
        });


        it("Should not submit when only no of people and comment is filled  ", () => {
            cy.get('#no-of-people').type(6);
            cy.get('textarea').type("Travelling back to Kumasi");
            cy.get('#btn-submit').click();
            cy.get('#name-error').should("be.visible");
            cy.get('#date-error').should("be.visible");
            cy.get('#trip-error').should("be.visible");

        });

        //More on Week 2  assertions assignment
        it("Should accept username as string", () => {
            cy.get('[id="fName"]').type("Justice1");
            cy.get('[id="fName"]').should("have.value", "Justice1");
        })

        it("A single type of trip is selected", () => {
            cy.get('[id="fName"]').type("Justice");
            cy.get('[id="one-way"]').click();
            cy.get('[id="one-way"]').should("be.checked");
            cy.get('[id="round-Trip"]').should("not.be.checked");
            
        })

        it.only("Should not submit when no of people is lesser than 0", () => {
            cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-09-20");
            cy.get('#one-way').click();
            cy.get('#no-of-people').type(-1);
            cy.get('#no-of-people').should("have.value", -1)
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();
        });


        it("Should not submit when no of people is greater than 21", () => {
            cy.get('#fName').type("Victor");
            cy.get('#date').type("2021-05-09");
            cy.get('#one-way').click();
            cy.get('#no-of-people').type(21);
            cy.get('#no-of-people').should("have.value", 21)
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();
        });

    })


})