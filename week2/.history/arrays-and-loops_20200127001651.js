// #1 Take an array of numbers and make them strings
function stringItUp(arr) {
	// your code here arr.map(String)
	/*var strArr = [];

	for (x of arr)
	{
		strArr.push(x.toString());
	}
	
	return strArr;
	*/
	return arr.map(String);
}

console.log(stringItUp([2, 5, 100]));
// output: ["2", "5", "100"]

// #2 Make an array of strings of the names
function namesOnly(arr) {
	// your code here
	/*var makeArr = [];

	for(x of arr)
	{
		makeArr.push(x.name);
	}
	return makeArr;
	*/
	return arr.map( (arr) => {return arr.name;});
}

console.log(
	namesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// #3 Filter the output array from #2.
function oldOnesOnly(arr) {
	// your code here
	/*var filterArr = [];

	for(x of arr)
	{
		if(x.age > 50)
		{
			filterArr.push(x.age);
		}
	}
	return filterArr;
	*/
	return arr.map((arr) => {
		return arr.age;
	}).fil;
}
console.log(
	oldOnesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: [80, 100]
