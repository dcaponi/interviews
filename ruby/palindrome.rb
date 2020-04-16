def get_palindrome(s)
  return s if s.length == 1 || (s.length <= 3 && s[0] == s[s.length - 1])
  front = 0
  back = s.length - 1
  out = ""
  while front < back && s[front] == s[back]
    out << s[front]
    front += 1
    back -= 1
  end
  if back - front >= 1
    return get_palindrome(s[0..s.length-2])
  else
    while front < s.length
      out << s[front]
      front += 1
    end
    return out
  end
end

def longest_palindrome(s)
  longest = ""
  s.split('').each_index do |i|
    p = get_palindrome s[i..-1]
    longest = p.length > longest.length ? p : longest
  end
  longest
end

puts longest_palindrome("a")           # a
puts longest_palindrome("aa")          # aa
puts longest_palindrome("ab")          # a or b
puts longest_palindrome("aba")         # aba
puts longest_palindrome("abacca")      # acca
puts longest_palindrome("aracecaraba") # aracecara
