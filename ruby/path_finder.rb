# Given a starting point, ending point and a maze where walls are 1, find
# a path from start to finish, and the shortest one if possible

# Only move up down left right. Assume the end is always reachable
# Watch out for ruby weird nuiances like -1 array access

def get_path(s, e, maze)
  if maze[s[0]][s[1]] == 1 ||                        # found a wall or visited area
    s[0] < 0 || s[1] < 0   ||                        # top or left edge
    s[0] >= maze.length    || s[1] >= maze[0].length # bottom or right edge

    path = nil

  elsif s[0] == e[0] && s[1] == e[1]                 # exit spot

    path = [s]

  else

    maze[s[0]][s[1]] = 1 # visit current node
    path =
      get_path([s[0] - 1, s[1]], e, maze) ||
      get_path([s[0], s[1] + 1], e, maze) ||
      get_path([s[0], s[1] - 1], e, maze) ||
      get_path([s[0] + 1, s[1]], e, maze)

    path << s unless path.nil?

  end
  
  return path
end

def find_path(s, e, maze)
  valid_path = get_path(s, e, maze)
  valid_path.nil? ? nil : valid_path.reverse
end

maze = [
  [0, 0, 0, 0, 1],
  [1, 1, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0]
]
puts "#{find_path([0,0], [4, 4], maze)}"

maze = [
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0]
]
puts "#{find_path([0,2], [4, 4], maze)}"
