def merge_sorted_lists(lists)
  pointers = []
  result = []
  jumps = 0
  lists.each do |list|
    jumps += list.length
    pointers << 0
  end

  until pointers.sum == jumps
    # Find min of current virtual array
    min = [nil, nil]
    lists.each_with_index do |list, i|
      if pointers[i] < list.length
        candidate =  list[pointers[i]]
        min = min[0].nil? || candidate < min[0] ? [candidate, i] : min
      end
    end
    result << min[0]
    pointers[min[1]] += 1
  end
  puts "res #{result}"
end

lists = [
  [2, 4, 6, 10, 12],
  [3, 7, 9, 15],
  [0, 0, 0],
  [18, 20],
  [1, 5, 23, 55]
]

merge_sorted_lists lists
