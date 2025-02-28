// EXAMPLE
// Imagine you have a box of items and want to compare each item with every other item to find specific pairs. As the numbers of items (n) increases, the number of comparisons (n^2) grows much faster


//O(n^2)
//kapag nag failed na ang execution ng inner loop doon lang mag iincrement ang outer loop
const numbers = [1,2,3,4,5]
function findPairs(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }
    
}
findPairs(numbers)

// Pair: 1, 2
// Pair: 2, 3
// Pair: 3, 4
// Pair: 4, 5
// Pair: 5, 5

//asaajejxsix

