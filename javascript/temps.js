// Given an array of temps, find number of days until temp is larger
class Stack {
  constructor(){
    this.stk = [];
  }

  push(i){
    this.stk.push(i);
  }

  pop(){
    return this.stk.pop();
  }

  peek(){
    return this.stk[this.stk.length-1]
  }

  isEmpty(){
    return this.stk.length == 0;
  }
}

let daysToNextHighest = function(input){
  let results = [];
  let stk = new Stack();
  for(var i = input.length - 1; i >= 0; i--){
    while(!stk.isEmpty() && input[i] >= input[stk.peek()]){
      stk.pop();
    }
    results[i] = stk.isEmpty() ? 0 : stk.peek() - i;
    stk.push(i);
  }
  console.log(results);
}

daysToNextHighest([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]) // [0, 8, 6, 4, 2, 1, 1, 1, 1, 0]
