// Given an array of prices, find the number of days until the price is same or lower

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

const stockPrices = function(arr) {
  let results = [];
  let stack = new Stack();
  for(var i = arr.length - 1; i >= 0; i--){
    while(!stack.isEmpty() && arr[i] < arr[stack.peek()]){
      stack.pop();
    }
    results[i] = stack.isEmpty() ? 0 : stack.peek() - i;
    stack.push(i);
  }
  console.log(results);
}

stockPrices([1, 2, 3, 4, 5]) // [ 0, 0, 0, 0, 0 ]
stockPrices([5, 4, 3, 2, 1]) // [ 1, 1, 1, 1, 0 ]
stockPrices([1, 1, 1, 1, 1]) // [ 1, 1, 1, 1, 0 ]
stockPrices([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]) // [ 9, 7, 5, 3, 1, 1, 1, 1, 1, 0 ]
stockPrices([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]) // [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ]
