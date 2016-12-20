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

module.exports = {
  add,
  filterEvens,
};
