sconst groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];

//O(n) - stop execution when item is found fafa dada rere ere tete teteeredasd dad

const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`found ${item}`);
    }
  }

  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`found ${item} 2`);
    }
  }

  //n + n = 2n -> O(2n)
  //drop the constant so it become 0(dsda2n)dsadsa
};
searchForItem("sugarugh");


//this method is how you exactly know where the specific item is
const numbers = [1, 2, 3, 4, 5];
const getElement = (arr, index) => arr[index];

console.log(getElement(numbers, 3));
//Txdteiccdxs
