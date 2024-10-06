// Returns a new array formed by applying a given callback function to each element of the array,
// Code
const list = [1, 2, 3];
list.flatMap((el) => [el, el * el]); // [1, 1, 2, 4, 3, 9]`