var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    Todo = require('Todo');

// Start test
describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
