var {add, subtract} = require('../app/compute');
var {expect} = require('chai');

// AAA ==> Assemble ACTION Assert
// test suite
describe('compute module tests', () => {
    // test spec @Test
    it("testing add", () => {
        var expected  = 12;
        var result = add(8, 4);
        expect(result).to.be.equal(expected);
    });

     // test spec @Test
     it("testing subtract", () => {
        var expected  = 4;
        var result = subtract(12, 8);
        expect(result).to.be.equal(expected);
    });
});
