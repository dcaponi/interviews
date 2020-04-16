var removeElement = function(nums, val) {
  var j = 0;
  for( var i = 0; i < nums.length; i++ ){
    if( nums[i] != val ){
      nums[j] = nums[i];
      j++;
    }
  }
  while(j<i){
    nums[j+1] = nums[i-1];
    j++;
  }
  console.log(j);
  console.log(nums);
};

// Remove the number specified and return the length of the resulting array

removeElement([3, 2, 2, 3], 3) // 2
removeElement([2, 3, 3, 2], 3) // 2
removeElement([0,1,2,2,3,0,4,2], 2) // 5
