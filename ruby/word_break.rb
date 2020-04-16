def word_break(dict, s, out)
  puts out and return if s.length == 0
  1.upto(s.length) do |i|
    pre = s.slice(0, i)
    word_break(dict, s[i..-1], out + " " + pre) if dict.include?(pre)
  end
end

dict = [
  "this", "th", "is", "famous", "word", "break", "wordbreak",
  "b", "r", "a", "k", "br", "ak", "eak", "problem"
]

# dict = ["word", "break", "problem", "breakproblem"]

word_break(dict, "wordbreakproblem", "")
