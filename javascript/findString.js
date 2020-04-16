function findString(n, h){
  if( n.length == 0 || h.length == 0 || n.length > h.length ){
    return -1;
  }
  if( n.length == h.length ){
    return n == h ? 0 : -1;
  }
  for( var i = 0; i < h.length; i++ ){
    for( var j = 0; j < n.length; j++ ){
      if( n[j] != h[i+j] ){
        break
      }
      if( j == n.length - 1 ){
        return i;
      }
    }
  }
}

console.log(findString("blue", "blue whale"))
console.log(findString("car", "racecar"))
console.log(findString("asdf", "qwer"));
console.log(findString("", "asdf"))
console.log(findString("asdf", ""));
