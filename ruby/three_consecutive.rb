def three_consecutive(array)
  result = []
  1.upto(array.length - 1) do |i|
    if ( array[i-1] == array[i] - 1 && array[i+1] == array[i] + 1 ) ||
      ( array[i-1] == array[i] + 1 && array[i+1] == array[i] - 1 )
      result << i - 1
    end
  end
  result
end

puts "#{three_consecutive [1,2,3,5,9,10,9,8,5,7]}"  #=> [0,5]
