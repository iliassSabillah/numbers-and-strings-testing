'use strict';

const add = (a, b) => a + b;

const filterEvens = ([...args])=>{
	return args.reduce((a,b)=>{
		if(typeof b === 'number' && b % 2 === 0){
			a.push(b);
			return a;
		}
		return a;
	}, [])
}

const secondSmallest = (arr) => {
	console.log(arr);
	arr.sort((a,b)=> a > b)
	return arr[1]
}

const uniqueNums =(arr) => {
	let obj= {};
	return arr.reduce((a,b) => {
		return obj[a] ? obj[a]++ : obj 
	})

}
module.exports = {
  add,
  secondSmallest,
  filterEvens,
};

