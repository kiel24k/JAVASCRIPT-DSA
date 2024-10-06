// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Code
const list = [1, 2, [3, 4, [5, 6]]];
const flat = list.flat(Infinity); // [1, 2, 3, 4, 5, 6]
console.log(flat);
