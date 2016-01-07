/*globals _:true*/

angular.module('snakesAndLadderApp').factory('board', function() {
  'use strict';
  var boardFactory = {};
  var boardValues = [
    [100, 60, 98, 97, 47, 95, 94, 93, 92, 91],
    [81, 82, 83, 84, 85, 86, 87, 49, 89, 90],
    [80, 79, 78, 77, 6, 75, 74, 73, 72, 92],
    [61, 62, 20, 64, 65, 66, 67, 68, 69, 70],
    [60, 59, 58, 57, 98, 55, 54, 11, 52, 51],
    [41, 42, 43, 44, 45, 74, 47, 48, 49, 50],
    [78, 39, 38, 37, 3, 35, 34, 33, 32, 69],
    [21, 22, 23, 24, 25, 26, 27, 9, 29, 30],
    [20, 19, 18, 43, 16, 15, 14, 13, 33, 11],
    [1, 2, 3, 4, 27, 6, 7, 8, 9, 10]
  ];
  var boardPositions = [
    [100, 99, 98, 97, 96, 95, 94, 93, 92, 91],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [80, 79, 78, 77, 76, 75, 74, 73, 72, 71],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [60, 59, 58, 57, 56, 55, 54, 53, 52, 51],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [40, 39, 38, 37, 36, 35, 34, 33, 32, 31],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ];
  
  boardFactory.getBoardPostions = function() {
    return boardPositions;
  };

  boardFactory.getCoordinates = function(pos) {
    var flattenBoardPos = _.flatten(boardPositions);
    var arrayIndex = flattenBoardPos.indexOf(pos);
    var x = arrayIndex / 10;
    var y = arrayIndex % 10;
    return {
      x: x,
      y: y
    };
  };

  boardFactory.getMoveValue = function(pos) {
    var coordinates = boardFactory.getBoardCoordinates(pos);
    return boardValues[coordinates.x][coordinates.y];
  };

  return boardFactory;
});
