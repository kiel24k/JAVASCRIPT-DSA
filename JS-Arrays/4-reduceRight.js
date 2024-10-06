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
        favorite_num: 12
    }
] 
//Executes a reducer function (that you provide) on each element of the array resulting in a single output value(from right to left).
const reduceRight = list.reduceRight((total, elem) => total + elem.favorite_num, 0)
console.log(reduceRight);
