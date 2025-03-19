class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
    this.testArray = {
      //magiging index lang ang object kapag ito ay number na, dapat ito ay magkakasunod sunod
      bombana: "232",
      haha: "hahah",
    };
  }
  //function or method
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(getDataIndex) {
    return this.data[getDataIndex];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    const item = this.data[index]
    for(let i = index; i < this.length - 1; i++){
        this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]
    this.length--
    return item;
    
    
  }
}

const myNewArray = new MyArray();
myNewArray.push("mango");
myNewArray.push("guava");
myNewArray.push("pineapple");
myNewArray.push("apple");
// console.log(myNewArray.pop());
// console.log(myNewArray);
// console.log(myNewArray.shift());
console.log(myNewArray);
console.log(myNewArray.deleteByIndex(2));
console.log(myNewArray);


const item = [1, 2, 3, 4, 5];

item.shift(0);
//#sdddddffudffgf
