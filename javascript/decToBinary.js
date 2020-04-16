function decToBinary(n){
  var stack = [];
  var resultString = "";
  while( n > 0 ){
    stack.push( n % 2 );
    n = Math.floor( n / 2 );
  }
  while( stack.length > 0 ){
    resultString = resultString.concat( stack.pop() )
  }
  console.log( resultString );
}

decToBinary(5);
decToBinary(10);

function toDecimal(str, base){
  var hexTable = { "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15 };
  var strlength = str.length;
  var result = 0;
  for( var i = 0; i < strlength; i++ ){
    var multiplier = base ** (strlength - (i + 1));
    var digit = parseInt(str[i]);
    digit = isNaN( digit ) ? hexTable[str[i].toLowerCase()] : digit;
    result += digit * multiplier;
  }
  console.log( result );
}

toDecimal( "4ed73", 16 ); //322931
toDecimal( "721b8980625e838389d9816c7a4f339d", 16 ); //1.5167497239642515e+38
