const normalArray = [1,2,3,4,5,6]

const list = [
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

//Returns true if all elements in the array pass the test implemented by the provided function.
const every = normalArray.every((el) => el % 2 === 0)
console.log(every);
