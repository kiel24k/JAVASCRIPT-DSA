const list = [
    {
        name: 'Juan',
        age: 22,
        favorite_num: 8,
    },
    {
        name: 'Michael',
        age: 23,
        favorite_num: 26,
    },
    {
        name: 'France',
        age: 19,
        favorite_num: 5
    },
    {
        name: 'Amor',
        age: 18,
        favorite_num: 5
    }
]

const normalArray = [1,2,3,4,5]
const map = list.map((e) => {
   return  e.favorite_num + 2
})
console.log(map);










