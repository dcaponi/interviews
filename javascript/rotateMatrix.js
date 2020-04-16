var mat_4x4 = [
  [01, 02, 03, 04],
  [05, 06, 07, 08],
  [09, 10, 11, 12],
  [13, 14, 15, 16]
];

/*
--- cw rotation ---
transpose
01 05 09 13
02 06 10 14
03 07 11 15
04 08 12 16

flip y axis
13 09 05 01
14 10 06 02
15 11 07 03
16 12 08 04
*/

/*
--- ccw rotation ---
transpose
01 05 09 13
02 06 10 14
03 07 11 15
04 08 12 16

flip x-axis
04 08 12 16
03 07 11 15
01 06 10 14
01 05 09 13
*/

var mat_3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

/*
1 4 7
2 5 8
3 6 9
*/

var rotateMatrix = function( mat ){

}

var transpose = function( mat ){
  for( var i = 0; i < mat.length; i++ ){
    for( var j = 0; j < mat.length; j++ ){
      mat[i][j+1] ^= mat[i+1][j];

    }
  }
}

var flip = function( mat ){

}

/*
var mat_4x4 = [
  [04, 08, 12, 16],
  [03, 07, 11, 15],
  [02, 06, 10, 12],
  [01, 05, 09, 13]
]

var mat_3x3 = [
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 9]
];
*/
