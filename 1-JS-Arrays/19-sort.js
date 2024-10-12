const normalArray = ["hahah",1,5,3,4,5]

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
//Sorts the elements of an array in place and returns the array. The default sort order is according to string Unicode code points.
const sort = normalArray.sort()
console.log(sort);

const arraySample = [1,2,4,5,6,7,8,29]

const sort1 = arraySample.sort((a, b) => a - b) 
console.log(sort1);





