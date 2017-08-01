const should = require('chai').should();
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

//describes the test-suite
describe('fizzBuzzer', function() {
  //it describes the individual test
  it('should result in fizz', function() {
    let fizzResultOptions = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42];

    fizzResultOptions.forEach(function(arrVal) {
      fizzBuzzer(arrVal)
      .should
      .equal('fizz');
    });
  });

  it('should result in buzz', function(){
    const buzzResultOptions = [5, 10, 20, 25, 35, 40];

    buzzResultOptions.forEach(function(arrVal) {
      fizzBuzzer(arrVal)
      .should
      .equal('buzz');
    });
  });

  it('should result in fizzbuzz', function(){
    const fizzbuzzResultOptions = [15, 30, 45];

    fizzbuzzResultOptions.forEach(function(arrVal) {
      fizzBuzzer(arrVal)
      .should
      .equal('fizz-buzz');
    });
  });

  it('should result in the error', function(){
    const errorOptions = [true, false, 'randomString', function() {}, [0,1,2]];

    errorOptions.forEach(function(arrVal) {
      // (function() {fizzBuzzer(arrVal)})
      // .should
      // .throw(Error);
      
      fizzBuzzer(arrVal)
      .should
      .equal('`num` must be a number');
    
    });
  });  
});
