function pascalTriangle () {}

pascalTriangle.prototype.read = function (rowAndColumn) {

  var row = rowAndColumn[0],
      column = rowAndColumn[1];

  return pascalTriangle.prototype.factorial(row) / (pascalTriangle.prototype.factorial(row-column) * pascalTriangle.prototype.factorial(column));

};

pascalTriangle.prototype.factorial = function (num) {

  var self = this;

  if (num < 2) {
    return 1;
  } else {
    return num * self.factorial(num-1);
  }

};

module.exports = pascalTriangle;
