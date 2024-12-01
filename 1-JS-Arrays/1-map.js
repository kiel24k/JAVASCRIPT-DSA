const list = [
    {
        name: 'Juans',
        age: 2,
        favorite_num: 5,
    },
    {
        name: 'Michaesl',
        age: 23,
        favorite_num:685,
    },
    {
        name: 'Franace',
        age: 19,
        favorite_num: 65
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
console.log(map)










