var shiftArray = function( arr, n ){
  while( n % arr.length > 0 && n > arr.length ){
    n = n % arr.length;
  }
  if( n < 0 ){
    n = arr.length + n;
  }
  reverse( arr, 0, arr.length - 1 ); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
  reverse( arr, 0, n - 1 );
  reverse( arr, n, arr.length - 1);
  console.log( arr )
}

var reverse = function( arr, s, e ){
  while( s < e ){
    arr[s] ^= arr[e];
    arr[e] ^= arr[s];
    arr[s] ^= arr[e];
    s++;
    e--;
  }
}

shiftArray( [1, 2, 3, 4, 5, 6, 7, 8, 9], 4 ) // 6, 7, 8, 9, 1, 2, 3, 4, 5
shiftArray( [1, 2, 3, 4, 5], -2 ) // 3, 4, 5, 1, 2
shiftArray( [1, 2, 3, 4, 5], 7 ) // 4, 5, 1, 2, 3
shiftArray( [1, 2, 3, 4, 5], 1 ) // 5, 1, 2, 3, 4
