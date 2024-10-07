const normalArray = [1,2,3,5,5,'five']

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

//Returns a new array with all elements that pass the test implemented by the provided function.

const filter = normalArray.filter((e) => e === 2)
console.log(filter);







