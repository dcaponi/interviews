var pascalTriangle = function( n ){
  if( n >= 0 ){
    console.log( [1] );
  }
  if( n >= 1 ){
    var row = [1, 1];
    for( var i = 2; i <= n; i++ ){
      console.log( row );
      row = makeRows( row );
    }
  }
}

var makeRows = function( prevRow ){
  var result = [1];
  for( var i = 1; i < prevRow.length; i++ ){
    result[i] = prevRow[i-1] + prevRow[i];
  }
  result.push(1);
  return result;
}

pascalTriangle( 5 );
// 0:  1
// 1:  1 1
// 2:  1 2 1
// 3:  1 3 3 1
// 4:  1 4 6 4 1
// 5:  1 5 10 10 5 1
