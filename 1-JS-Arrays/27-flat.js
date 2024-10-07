// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Code
const list = [1, 2, [3, 4, [5, 6]]];

const lists = [
    {
        name: 'Juan',
        age: 22,
        favorite_num: 1
    },
    {
        name: 'Michael',
        age: 23,
        favorite_num: 2,
    },
    {
        name: 'France',
        age: 19,
        favorite_num: 3
    },
    {
        name: 'Amor',
        age: 18,
        favorite_num: 4
    },
    {
        name: 'kiel',
        age: 22,
        favorite_num: 5
    }
]

const flat = lists.flat(Infinity); // [1, 2, 3, 4, 5, 6]
console.log(flat);
