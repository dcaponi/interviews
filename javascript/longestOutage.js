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

  sort(comparator){
    this.stk = this.stk.sort(comparator);
  }
}

const getLongestOutage = function(events){
  let stk = new Stack();
  events.sort((a, b) => a.s > b.s).forEach(evt => {
    if(stk.isEmpty() || evt.s > stk.peek().e){
      stk.push(evt);
    }
    stk.peek().e = evt.e > stk.peek().e ? evt.e : stk.peek().e;
  });
  return stk.peek();
}

let events = [ {s:5, e:7}, {s:9, e:12}, {s:15, e:20}, {s:1, e:2}, {s: 2, e: 2}, {s:17, e:23}, {s:3, e:6}, {s:4, e:5} ];
let longestOutage = getLongestOutage( events );
console.log(longestOutage);
