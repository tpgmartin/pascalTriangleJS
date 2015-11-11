var assert = require('assert'),
    PascalTriangle = require('./index');

    pascalTriangle = new PascalTriangle();

// n = 'row', k = 'column'
// TODO:
//     1. Return complete row correctly up to n = k
//     2. Stack rows on top of each other up to max n
describe('pascalTriangle', function() {
    it('should return 1 for n = 0, r = 0', function () {
        var input = [0, 0];

        var output = pascalTriangle.read(input);

        assert.equal(output, 1);
    });

    it('should return 6 for n = 4, r = 2', function () {
        var input = [4, 2];

        var output = pascalTriangle.read(input);

        assert.equal(output, 6);
    });

  });
