const intReversal = (int) => {
   const reverse = int.toString().split("").reverse().join("")
   return parseInt(reverse) * Math.sign(int)
}
console.log(intReversal(12345));
//dff
