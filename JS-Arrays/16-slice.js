const normalArray = [1,5,3,4,5]

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
//Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
const slice = normalArray.slice(0,4)
console.log(slice);
console.log(normalArray);
