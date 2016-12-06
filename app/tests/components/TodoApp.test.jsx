var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoApp = require('TodoApp');

// Start test
describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
});
