/*global describe, it, before*/
'use strict';

var assert = require('assert');
var esformatter = require('esformatter');
var fs = require('fs');
var literal = require('../');

function readfile(name) {
  return fs.readFileSync('test/' + name).toString();
}

describe('compare input / output', function() {
  before(function() {
    esformatter.register(literal);
  });

  it('should convert new Object()', function() {
    var output = esformatter.format(readfile('fixtures/object.js'));
    assert.equal(output, readfile('expected/object.js'));
  });

  it('should covert new Array()', function() {
    var output = esformatter.format(readfile('fixtures/array.js'));
    assert.equal(output, readfile('expected/array.js'));
  });
});
