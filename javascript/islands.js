// given a matrix of 1s and 0s find all the continuous 1s in all directions, including diagonals

class Navigator {
  constructor(chart){
    this.chart = chart;
    this.rows = chart.length;
    this.cols = chart[0].length;
  }

  countIslands(){
    let count = 0;
    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols; j++){
        if(this.chart[i][j] == 1){
          count++;
          this.explore(i, j);
        }
      }
    }
    return count;
  }

  explore(i, j){
    if(i < 0 || j < 0 || i >= this.rows || j >= this.cols){
      return; // edge of map
    }

    if(this.chart[i][j] != 1){
      return; //previously visited section or edge of island
    }

    this.chart[i][j] = 3; //visit

    this.explore(i-1, j-1); //check one row up one col back
    this.explore(i-1, j); //check one row up
    this.explore(i-1, j+1); //check one row up one col forward

    this.explore(i, j-1); //check same row one col back
    this.explore(i, j+1); //check same row one col forward

    this.explore(i+1, j-1); //check one row down one col back
    this.explore(i+1, j); //check one row down
    this.explore(i+1, j+1); //check one row down one col forward
  }

}

let chart = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1]
];

let navigator = new Navigator(chart);
let count = navigator.countIslands();
console.log("there are", count, "islands");
