def steps_between_tallest(array)
  result = []
  stack = []
  0.upto(array.length-1) do |i|
    while !stack.empty? && array[i] > array[stack.last]
      stack.pop()
    end
    result[i] = stack.empty? ? - 1 : i - stack.last
    stack << i
  end
  result
end

def max_index(array)
  max = 0
  index = 0
  array.each_with_index do |n, i|
    if n > max
      index = i
      max = n
    end
  end
  index
end

def volume_of_tank(array)
  vol = 0
  widths = steps_between_tallest(array)
  start_index = max_index(widths)
  height = array[start_index - 1]
  start_index.upto(widths[start_index]) do |i|
    vol = vol + height - array[i]
  end
  vol
end

def print_pool(array)
  max = array.max
  max.downto(1) do |i|
    array.each do |n|
      if n >= i
        print ' #'
      else
        print "  "
      end
    end
    puts
  end
end

puts "#{steps_between_tallest [2, 4, 3, 2, 1, 1, 2, 3, 4, 5]}" # = > [0, 8, 6, 4, 2, 1, 1, 1, 1, 0]
puts "#{max_index(steps_between_tallest [2, 4, 3, 2, 1, 1, 2, 3, 4, 5])}"
puts "#{volume_of_tank [2, 4, 3, 2, 1, 1, 2, 3, 4, 5]}"
print_pool [2, 4, 3, 2, 1, 1, 2, 3, 4, 5]
