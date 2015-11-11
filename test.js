var assert = require('assert'),
    PascalTriangle = require('./index');

    pascalTriangle = new PascalTriangle();

// n = 'row', k = 'column'
// TODO:
//     1. Return complete row correctly up to n = k
//     2. Stack rows on top of each other up to max n
describe('pascalTriangle', function() {
    it('should return 1 for n = 0, r = 0', function () {
        var inputRow = 0,
            inputColumn = 0;

        var output = pascalTriangle.coefficient(inputRow, inputColumn);

        assert.equal(output, 1);
    });

    it('should return 6 for n = 4, r = 2', function () {
        var inputRow = 4,
            inputColumn = 2;

        var output = pascalTriangle.coefficient(inputRow, inputColumn);

        assert.equal(output, 6);
    });

    it('should return "1 3 3 1" for n = 3', function () {
        var input = 3;

        var output = pascalTriangle.row(input);

        assert.equal(output, '1 3 3 1');
    });

    it('should return "1 7 21 35 35 21 7 1" for n = 7', function () {
        var input = 7;

        var output = pascalTriangle.row(input);

        assert.equal(output, '1 7 21 35 35 21 7 1');
    });

    it('should return " 1\n1 1" for n = 1', function () {
        var input = 1;

        var output = pascalTriangle.triangle(input);

        assert.equal(output, ' 1\n1 1');
    });

    it('should return "   1\n  1 1\n 1 2 1\n1 3 3 1" for n = 3', function () {
        var input = 3;

        var output = pascalTriangle.triangle(input);

        assert.equal(output, '   1\n  1 1\n 1 2 1\n1 3 3 1');
    });

  });
