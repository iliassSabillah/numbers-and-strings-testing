'use strict';

const add = (a, b) => a + b;

const filterEvens = (args)=>{
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
	var output = [];
	let uniqsObj = arr.reduce((obj,a) => {
		if(obj[a]){
		  obj[a] = false;
		  return obj
		}else { 
		  obj[a] = true;
		}
		return obj
	}, {})
	
	for(var key in uniqsObj){
	  if(uniqsObj[key]){
	    output.push(parseInt(key));
	  }
	}
	
	return output;
}


module.exports = {
  add,
  secondSmallest,
  filterEvens,
  uniqueNums
};

