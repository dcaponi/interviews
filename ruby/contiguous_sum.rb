# Use the scout, catchup sliding window and memoize the positions prior to reset

def contiguous_sum(array)
  state = {i: 0, j: 0, max: 0}
  max = 0
  fast = 0
  slow = 0
  while fast < array.size
    max += array[fast]
    if max < 0
      state[:i] = slow + 1
      state[:j] = fast - 1
      max = 0
      slow = fast
    end
    state[:max] = [max, state[:max]].max
    fast += 1
  end
  return "#{state}"
end

puts contiguous_sum [2, -8, 3, -2, 4, -10] # => 5
puts contiguous_sum [1, 2, 3, -7, 7, 2, -12, 6] # => 9
