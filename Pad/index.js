const test = require('node:test');
const assert = require('assert');

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
  
    if (b > a) {
      var temp = a;
      a = b;
      b = temp; 
    }
  
    while (true) {
      a %= b;
      if (a === 0) { return b; }
      b %= a;
      if (b === 0) { return a; }
    }
  }

  test('testing GCD', (t) => {
    // This test passes because it does not throw an exception.
    
    //arange
    let a = 10;
    let b = 20;
    let expectedresult = 10;

    //act
    let result = gcd(a,b);

    //Assert
    assert.strictEqual(result,expectedresult);
  });