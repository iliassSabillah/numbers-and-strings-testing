const expect = require('chai').expect;
const func = require('../js/numbers-funcs');

describe('numbers tests', () => {

	it('add() should add two numbers', () => {
	var result1 = func.add(1, 2);
	var result2 = func.add(5, 11);
	var result3 = func.add(-10, 33);
	expect(result1).equal(3);
	expect(result2).equal(16);
	expect(result3).equal(23);
	});
  //Add more tests here:

	it('secondSmallest() should return the second smallest', () => {
		var result1 = func.secondSmallest([1,5,10]);
		var result2 = func.secondSmallest([-100,2,1000,0]);
		var result3 = func.secondSmallest([-13, -44, 33]);
		expect(result1).equal(5);
		expect(result2).equal(0);
		expect(result3).equal(-13)
		expect(result1).to.be.a('number');
	});
  
  //filterEvens takes an array (that could include any data type) and returns an array of only the even numbers
	it('filterEvens() should remove odd numbers', ()=>{
		var result1 = func.filterEvens([{1:2, hello: "what"}, 2,9,10,12]);
		expect(result1).have.members([2,10,12])
		
		// reppetiton on next two lines 
		expect(result1).to.be.a('array');
		expect(result1).to.be.instanceof(Array);
	})
});
