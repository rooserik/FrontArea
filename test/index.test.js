var expect = require('chai').expect;
var app = require('../src/index');

describe('review',function(){
  describe('isJuf',function(){
    it('should return true if contains 7 or is divisible by 7', function(){
      expect( app.isJuf(7) ).to.equal(true);
      expect( app.isJuf(14) ).to.equal(true);
      expect( app.isJuf(21) ).to.equal(true);
      expect( app.isJuf(17) ).to.equal(true);
      expect( app.isJuf(747) ).to.equal(true);
    })
    it('should return false if it does not contains 7 or is divisible by 7', function(){
      expect( app.isJuf(5) ).to.equal(false);
      expect( app.isJuf(500) ).to.equal(false);
    })
  });
}
