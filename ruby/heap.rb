class Heap
  attr_accessor :array

  def initialize(array, compare = nil)
    @compare = compare
    @array = []
    array.each { |n| insert n }
  end

  def insert(n)
    @array << n
    bubble_up
  end

  def remove_first
    @array[0] = @array[-1]
    @array.pop()
    i = 0
    while i < @array.length
      l_child = left_child_idx(i)
      break if l_child > @array.length
      r_child = right_child_idx(i)
      if r_child < @array.length && compare(r_child, l_child)
        l_child = r_child
      end
      break if compare(i, l_child)
      @array[i], @array[l_child] = @array[l_child], @array[i]
      i = l_child
    end
  end

  def bubble_up
    i = @array.length - 1
    p = parent_idx(i)
    until i == p || compare(p, i)
      @array[i], @array[p] = @array[p], @array[i]
      i = p
      p = parent_idx(i)
    end
  end

  def [](idx); @array[idx] end
  def []=(idx, value); @array[idx] = value end
  def size; @array.size end

  def parent_idx(idx); idx == 0 ? 0 : (idx - 1) / 2 end
  def left_child_idx(idx); idx * 2 + 1 end
  def right_child_idx(idx); idx * 2 - 1 end

  def compare(left, right)
    return @array[left] >= @array[right] unless @compare # default comparator results in a Max Heap
    return @compare.call(@array[left], @array[right])    # caller can insert a Proc to get a Min Heap or other
  end
end

a = [1, 2, 3, 4, 5]
h = Heap.new(a)
h.insert(6)
h.insert(7)
puts "#{h.array}"
h.remove_first
puts "#{h.array}"
