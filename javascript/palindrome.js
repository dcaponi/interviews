var longestPalindromeRecursive = function( input, s, e ){
  var output = []; // string buffer
  var front = s; // front of palindrome pointer
  var rear = e; // rear of palindrome pointer

  // base case, single letter, 2 letters same, 3 letters where ends are the same
  if( (e - s <= 2 && input[s] == input[e]) || input.length == 1 ){
    // since we pass in the whole string each time, we need to take the first 3 letters
    while( s <= e ){
      output.push(input[s]);
      s++;
    }
    return output.join('');
  }
  // move the pointers in if the letters on either side match
  while( ( input[front] == input[rear] ) && rear >= front ){
    output.push(input[rear]); // log the rear of the palindrome
    front++;
    rear--;
  }
  // ran out of matching letters so we lob off one letter from the end and try again
  if( rear - front > 2 ){
    return longestPalindromeRecursive( input, s, e-1 );
  }
  // mirror the rear of the palindrome
  var ctr = output.length - ( front - rear );
  while( ctr >= 0 ){
    output.push( output[ctr] );
    ctr--;
  }
  return output.join("");
}

var longestPalindromeRecursiveDriver = function( input ){
  var longest = "";
  for( var i = 0; i < input.length; i++ ){
    var candidate = longestPalindromeRecursive( input, i, input.length - 1 );
    if( candidate.length > longest ){
      longest = candidate;
    }
  }
  return longest;
}

var longestPalindrome = function( input ){
  var longest = "";
  for( var s = 0; s < input.length; s++ ){
    var f = s;
    var e = input.length - 1;
    var r = e;
    var outHalf = [];
    while( f <= r ){
      if( f == r || input[f] == input[r] ){
        outHalf.push(input[r]);
        f++;
        r--;
      }
      else{
        f = s;
        e--;
        r = e;
        outHalf = [];
      }
    }
    var ctr = outHalf.length - ( f - r );
    while( ctr >= 0 ){
      outHalf.push( outHalf[ctr] );
      ctr--;
    }
    if( outHalf.length > longest.length ){
      longest = outHalf.join("");
    }
  }
  return longest
}

// console.log( longestPalindromeRecursiveDriver("a") );
// console.log( longestPalindromeRecursiveDriver("aa") );
// console.log( longestPalindromeRecursiveDriver("aba") );
// console.log( longestPalindromeRecursiveDriver("abacca") );
// console.log( longestPalindromeRecursiveDriver("aracecaraba") );

console.log( longestPalindrome("a") );
console.log( longestPalindrome("aa") );
console.log( longestPalindrome("aba") );
console.log( longestPalindrome("abacca") );
console.log( longestPalindrome("aracecaraba") );
