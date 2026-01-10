hclass Node {
    constructor(value){ //is like declaration of variable
        this.head = value
        this.next = null
    }
}
//kiel the 

class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    push(val) {
        let newNode = new Node(val)

        // if(!this.head){
        //     this.head = newNode
        //     this.tail = newNode
        // }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    pushs(val) {
        let newNode = new Node(val)

        // if(!this.head){
        //     this.head = newNode
        //     this.tail = newNode
        // }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    
}

const myLinkedList = new LinkedList(2)
myLinkedList.push(15)

console.log(myLinkedList);
//isusssssxksdlijjijjjudddcfddddj