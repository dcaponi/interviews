def binary_contains?(array, n)
  return array[0] == n || array[1] == n if array.length == 2
  return array[0] == n if array.length == 1
  return binary_contains?(array[0..(array.length / 2)], n) ||
         binary_contains?(array[((array.length/2)+1)..-1], n)
end

def binary_search_index(array, n)
  low, top = 0, (array.length - 1)
  mid = ((top - low)/2) + low
  while array[mid] != n && top > low
    low = mid + 1 if n > array[mid]
    top = mid - 1 if n < array[mid]
    mid = ((top - low)/2) + low
  end
  array[mid] == n ? mid : -1
end

a = binary_search_index [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4
b = binary_search_index [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 13
c = binary_search_index [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 0
d = binary_search_index [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 22

puts "a: #{a} b: #{b} c: #{c} d: #{d}"
