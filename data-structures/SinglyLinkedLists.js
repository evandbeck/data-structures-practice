// Singly Linked Lists

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Adding a node to the end of the Linked List
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Removing a node from the end of the Linked List
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // Removing a node from the beginning of the Linked List
    shift() {
        if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
    // Adding a new node to the beginning of a Linked List
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }  else {
            newNode.next = thisHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // Retreiving a node by its positions in the Linked List
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    // Changing the value of a node based on its position in the Linked List
    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        } 
        return false;
    }
    // Adding a node to the Linked List at a specific position
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let temp = prev.next;
        let prev = this.get(index - 1);
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // Removing a node from a Linked List at a specific position
    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let prevNode = this.get(index - 1);
        let removed = prevNode.next
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    // Reversing the Linked List in place
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("!")