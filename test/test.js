var Nightmare = require("nightmare");
var expect = require("chai").expect;


module.exports = function () {
    describe("moodMap", function () {
        //setting timeout to 30 sec for now, default is 2
        this.timeout(30000);
        it("Should send user to sign in page", function (done) {
                //Showing for testing, must set to false for demo
                Nightmare({
                        show: true
                    })
                    //go to local server host page
                    .goto("localhost:3000/index.html")
                    //enter email
                    .type("#signin", "mctest@test.com")

            })
            .then(function (link) {
                expect(link).to.not.equal(undefined);
                done();
            });

    });
}

// var Nightmare = require("nightmare");
// var expect = require("chai").expect;
// describe("Codecademy", function() {
//   // The default tests in mocha is 2 seconds.
//   // Extending it to 30 seconds to have time to load the pages
//   this.timeout(30000);
//   it("should send user to the catalog page", function(done) {
//     // ID for the login button.
//     Nightmare({ show: true })
//       .goto("https://codecademy.com")
//       // Click the catalog link
//       .click("a[href='/learn/all']")
//       // Evaluate the title
//       .evaluate(function() {
//         return document.title;
//       })
//       // Asset the title is as expected
//       .then(function(title) {
//         expect(title).to.equal("Catalog | Codecademy");
//         done();
//       });
//   });
//   it("should present a link to course catalog after login", function(done) {
//     new Nightmare({ show: true })
//       .goto("https://www.codecademy.com/login")
//       // Enter username.
//       .type("#user_login", "ResilD")
//       // Enter password.
//       .type("#login__user_password", "dummy*password")
//       // Click the login button
//       .click("#user_submit")
//       // Evaluate the following selector
//       .evaluate(function() {
//         // Assert the "learn" link can be found
//         return document.querySelector("a[href='/learn']");
//       })
//       .then(function(link) {
//         expect(link).to.not.equal(undefined);
//         done();
//       });
//   });
//   it("should throw an error for fun", function() {
//     throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
//   });
// });