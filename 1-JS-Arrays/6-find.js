const normalArray = [1,2,3,4,5,'six']

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
        favorite_num: 12
    }
] 
//Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
const find = normalArray.find((element) => element === 'six')
console.log(find);





