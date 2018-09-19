"use strict"

describe("pow", function() {

  describe("Raise x to power of n", function() {
    function makeTest(x) {
      let expected = x*x*x;
      it(`${x} to the power of 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x=1; x<=5; x++) {
      makeTest(x);
    }
  });

  
});
