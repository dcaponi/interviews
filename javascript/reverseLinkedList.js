class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  constructor(inputArray){
    this.head = new Node(inputArray[0]);
    let current = this.head;
    for(var i = 1; i < inputArray.length; i++){
      current.next = new Node(inputArray[i]);
      current = current.next;
    }
  }

  reverse(){
    let prev = null;
    let curr = this.head;
    let nxt = this.head.next;
    while(curr.next != null){
      curr.next = prev;
      prev = curr;
      curr = nxt;
      nxt = nxt.next;
    }
    curr.next = prev;
    this.head = curr;
  }

  printList(){
    let ptr = this.head;
    let result = [];
    while(ptr != null){
      result.push(ptr.data);
      ptr = ptr.next;
    }
    console.log(result);
  }

}

let ll = new LinkedList([1, 2, 3, 4, 5]);
ll.reverse();
ll.printList();
