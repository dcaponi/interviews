const contiguousSum = function(input){
  let i = 0;
  let j = 0;
  let currentSum = 0;
  let finalSum = 0;
  while(i < input.length){
    currentSum += input[i];
    if(currentSum < 0){
      currentSum = 0;
    }
    else if(currentSum > finalSum){
      finalSum = currentSum
    }
    i++
  }
  return finalSum;
}

console.log(contiguousSum([2, -8, 3, -2, 4, -10]));
