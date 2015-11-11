function pascalTriangle () {}

pascalTriangle.prototype.triangle = function (maxRow) {

  var triangle = [],
      row = '';

  for(var rowIndex = 0; rowIndex <= maxRow; rowIndex++) {
    row = Array(maxRow + 1 - rowIndex).join(' ') + pascalTriangle.prototype.row(rowIndex)
    if (rowIndex < maxRow) row += '\n'
    triangle.push(row);
  }

  return triangle.join('');

};

pascalTriangle.prototype.row = function (rowIndex) {

  var row = [];

  for(var columnIndex = 0; columnIndex <= rowIndex; columnIndex++) {
    row.push(pascalTriangle.prototype.coefficient(rowIndex, columnIndex));
  }

  return row.join(' ');

};

pascalTriangle.prototype.coefficient = function (row, column) {

  return factorial(row) / (factorial(row - column) * factorial(column));

}

function factorial (num) {

  if (num < 2) {
    return 1;
  } else {
    return num * factorial(num-1);
  }

};

module.exports = pascalTriangle;
