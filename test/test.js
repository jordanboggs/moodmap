var Nightmare = require("nightmare");
var expect = require("chai").expect;
var moodMapServer = require("../server.js");

    describe("moodMap", function () {
        //setting timeout to 30 sec for now, default is 2
        this.timeout(30000);
        it("Should send user to sign in page and then survey", function (done) {
            //Showing for testing, must set to false for demo
            Nightmare({
                    show: true
                })
                .viewport(1000, 700)
    
                //go to local server host page
                .goto("http://localhost:3000")
                //enter email
                .type("#email", "mctest@test.com")
                //enter password
                .type("#password", "test")
                //click submit
                .click("#submit_button")
    
                .goto("http://localhost:3000/survey")
    
                .wait(1000)
    
                //Clicks on radio button for Somewhat Unhappy
                .click('input[type="radio"][name="likert1"][value="2"]')
    
                .wait(500)
    
                //Clicks on radio button for Lots of Energy
                .click('input[type="radio"][name="likert2"][value="3"]')
    
                .wait(500)
    
                //Scroll to bottom of page
                .scrollTo(600, 0)
    
                .wait(500)
    
                //Clicks on radio button for Agree
                .click('input[type="radio"][name="likert3"][value="3"]')
    
                .wait(500)
    
                //Clicks on radio button for No
                .click('input[type="radio"][name="likert4"][value="0"]')
    
                .wait(500)
    
                //Clicks on radio button for Disagree
                .click('input[type="radio"][name="likert5"][value="2"]')
                
                //evaulate title of document
                .evaluate(function () {
                    return document.title;
                })
                .then(function (title) {
                    expect(title).to.equal('moodMap | Survey');
                    done();
                    
                }).catch(done);
        });
    
    
    });