class Node
  attr_accessor :data, :next
  def initialize(data)
    @data = data
    @next = nil
  end
end

class LinkedList
  attr_accessor :head

  def initialize(array)
    @head = Node.new(array[0])
    builder = @head
    1.upto(array.length - 1) do |i|
      new_node = Node.new(array[i])
      builder.next = new_node
      builder = builder.next
    end
    @head
  end

  def print_list
    printer = @head
    while !printer.nil?
      print "#{printer.data}"
      printer = printer.next
    end
    puts
  end

  def find(n)
    sleuth = @head
    while !sleuth.nil? && sleuth.data != n
      sleuth = sleuth.next
    end
    sleuth.nil? ? nil : sleuth
  end

  def remove(n)
    to_remove = find(n)
    unless to_remove.nil?
      chaser = @head
      while chaser.next != to_remove
        chaser = chaser.next
      end
      chaser.next = to_remove.next
      to_remove.next = nil
    end
  end

  def insert(data)
    new_node = Node.new(data)
    adder = @head
    while !adder.next.nil?
      adder = adder.next
    end
    adder.next = new_node
  end

  def reverse
    a = nil
    b = @head
    c = @head.next
    while !c.nil?
      b.next = a
      a = b
      b = c
      c = c.next
    end
    b.next = a
    @head = c
  end

  def create_loop(n)
    back = @head
    while !back.next.nil?
      back = back.next
    end
    looped = @head
    (n).times { looped = looped.next }
    back.next = looped
  end

  def detect_loop
    fast = @head
    slow = @head
    while !fast.next.nil? && !fast.next.next.nil?
      slow = slow.next
      fast = fast.next.next
      break if fast == slow
    end
    fast == slow ? fast : nil
  end

  def break_loop
    loop_node = detect_loop
    unless loop_node.nil?
      tail_checker = @head
      looper = loop_node
      while true
        while looper.next != loop_node
          looper = looper.next
          break if looper.next == tail_checker
        end
        break if looper.next == tail_checker
        looper = looper.next
        tail_checker = tail_checker.next
      end
      looper.next = nil
    end
  end
end

ll = LinkedList.new [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ll.print_list
ll.reverse
ll.print_list
