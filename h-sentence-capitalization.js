const sentence = (str) => {
    return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))  
    .join(" ")
}
console.log(sentence("hellow world haha"));


//slice ay index and number
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2,5));
//ws
