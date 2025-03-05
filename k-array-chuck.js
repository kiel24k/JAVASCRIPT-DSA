no//array chuck
//write a function that takes an array and chunk size as input the function should return a new array where the     original array is split into chuinks of the specified size.

//chunk ([1, 2, 3 ,4 ,5 ,6 ,7, 8], 3)  [[1,2,3] , [4,5,6,], [7,8]]

//chunkArray[(1,2,3,4,5),2] //Output: [[1,2,], [3,4]]

// 1. Create an empty array to hold the chunks
// 2. Set a string index to keep track of where we are in the original array
// 3. Loop through the original array as long as the index hasn't reacched the end
// 4. Extract a chunk of the desired size from the original array
// 5. Add the extracted chunk to the 'chucked' array
// 6. Move the index forward by the chunk size to get to the next chunk
// 7. Return the final array of chunks

const chunkArray = []

const chunk = (array, size) => {
   const chunked = []
   let index = 0;

   while(index < array.length){
    const chunk =  array.slice(index, index + size)
    console.log('-----',chunk);
    chunked.push(chunk)
    index += size
   }

   return chunked
    
}
//sige kiel hahah

console.log(chunk([1,2,3,4,5,6,7,1], 1));


