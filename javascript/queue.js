// Implement a queue
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(thing) {
    if(this.first == null) {
      this.first = new Node(thing);
      this.last = this.first;
    }
    else {
      this.last.next = new Node(thing);
      this.last = this.last.next;
    }
  }

  dequeue() {
    if(this.first != null) {
      let response = this.first;
      this.first = this.first.next;
      return response.data;
    }
    return null;
  }
}

let q = new Queue();
let a = [1, 2, 3, 4, 5];

a.forEach(i => q.enqueue(i));
a.forEach(i => console.log(q.dequeue()));
