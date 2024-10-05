const normalArray = [1,2,3,4,5]

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
// /Reduce the array to a single value. The value returned by the function is stored in an accumulator (result/total).
const reduce = list.reduce((total, elem) => total + elem.favorite_num, 0)

