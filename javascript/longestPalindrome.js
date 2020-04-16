const getPalindrome = function(s){
  if( s.length == 1 || (s[0] == s[s.length - 1] && s.length <= 3) ){
    return s; // returns things like "a" or "aa" or "aba"
  }
  let front = 0;
  let rear = s.length - 1;
  let sb = [];
  while(front <= rear && s[front] == s[rear]){
    sb.push(s[front]);
    front++;
    rear--;
  }

  if(rear - front >= 1){
    return getPalindrome(s.substr(0, s.length - 1));
  }
  else{
    while( front < s.length ){
      sb.push(s[front]);
      front++;
    }
    return sb.join('');
  }
}

const longestPalindrome = function(s) {
  let longest = "";
  let i = 0
  while(i < s.length && s.substr(i).length > longest.length){
    p = getPalindrome( s.substr(i) );
    longest = p.length > longest.length ? p : longest;
    i++;
  }
  return longest;
}

console.log( longestPalindrome("a") );            // a
console.log( longestPalindrome("aa") );           // aa
console.log( longestPalindrome("ab") );           // a or b
console.log( longestPalindrome("aba") );          // aba
console.log( longestPalindrome("abacca") );       // acca
console.log( longestPalindrome("aracecaraba") );  // aracecara
