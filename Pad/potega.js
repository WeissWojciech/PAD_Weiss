const test = require('node:test');
const assert = require('assert');

function po(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    var wyn=a;
  
    for (let i = 1; i < b; i++) {
        wyn = wyn * a;
    }

    return wyn;
  }

  test('testing Pow', (t) => {
    // This test passes because it does not throw an exception.
    
    //arange
    let a = 2;
    let b = 10;
    let expectedresult = 1024;

    //act
    let result = po(a,b);

    //Assert
    assert.strictEqual(result,expectedresult);
  });