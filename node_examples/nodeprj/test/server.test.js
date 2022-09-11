var request = require('request'); // to make http request
var {expect} = require('chai');

describe("server module tests", () => {
    // test spec
    it("testing add pathname", (done) => {
        var url = "http://localhost:1234/add?x=10&y=15";
        request(url, (err, response, body) => {
            expect(body).to.be.equal("125");
            done();
        })
    });
});
