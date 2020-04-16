# Given a string of only 'a' and 'b' find the length of the longest
# substring that does not contain n consecutive a's or b's

# Use sliding window of fixex length
def length_of_longest_without_n_repeating(s, n)
  if s.length <= n
    if s == "aaa" || s == "bbb"
      puts 0
    else
      puts s.length
    end
    return
  end

  longest = 0
  start = 0

  1.upto(s.length - 1) do |i|
    if (s[i-1] == 'a' && s[i] == 'a' && s[i+1] == 'a') ||
      (s[i-1] == 'b' && s[i] == 'b' && s[i+1] == 'b')

      longest = [longest, i - start + 1].max
      start = i
    end
  end

  puts longest
end

length_of_longest_without_n_repeating('abbaabaaabbabbb', 3) # => 8
length_of_longest_without_n_repeating('baaabbabbb', 3) # => 7
length_of_longest_without_n_repeating('ab', 3) # => 2
length_of_longest_without_n_repeating('aaa', 3) # => 0
length_of_longest_without_n_repeating('aba', 3) # => 3
length_of_longest_without_n_repeating('abbba', 3) # => 3
