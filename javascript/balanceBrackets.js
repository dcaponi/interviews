var balancedBrackets = function( exp ){
  var stack = []
  var result = true;
  for( var i = 0; i < exp.length; i++ ){
    if( exp[i] == '{' || exp[i] == '(' || exp[i] == '[' ){
      stack.push(exp[i]);
    }
    else{
      var c = stack.pop();
      if( exp[i] == '}' && c != '{' || exp[i] == ')' && c != '(' || exp[i] == ']' && c != '[' ){
        result = false;
      }
    }
  }
  if( stack.length > 0 ){
    result = false;
  }
  console.log(result);
}

balancedBrackets( "{([][(])})" )
balancedBrackets( "{([][])}")
balancedBrackets( "{}}{}" )
