class Array
  def zeros(n)
    n.times {self << 0}
    self
  end
end

def pascal (n)
  dp = []
  (n + 1).times {dp << [].zeros(n + 3)}
  dp[0][1] = 1 if n > 0
  dp[1][1] = 1 if n > 1
  dp[1][2] = 1 if n >= 2

  2.upto(n-1) do |i|
    1.upto(n+2) { |j| dp[i][j] = dp[i-1][j-1] + dp[i-1][j] }
  end

  print_table(dp) { |val| print " #{val} " unless val == 0 }
end

def print_table(table)
  table.each do |row|
    row.each { |val| yield val }
    puts
  end
end

pascal( 4 );
