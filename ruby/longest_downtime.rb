def longest_downtime(times)
  times.sort_by! { |time| time[:s]}
  stack = []
  times.each do |time|
    stack.push(time) if stack.length == 0 || stack.last[:e] < time[:s]
    stack.last[:e] = stack.last[:e] > time[:e] ? stack.last[:e] : time[:e]
  end
  stack.sort_by! { |time| time[:e] - time[:s] }
  return stack.last
end

times = [
  {s: 5, e: 7},
  {s: 9, e: 12},
  {s: 15, e: 20},
  {s: 1, e: 2},
  {s: 2, e: 2},
  {s: 17, e: 23},
  {s: 3, e: 6},
  {s: 4, e: 5}
];

puts longest_downtime(times)
