var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoList = require('TodoList'),
    TodoSearch = require('TodoSearch');

// Start test
describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });
  // test if the input value is properly called into onSearch prop
  it('should call onSearch with entered input text', () => {
    var searchText = "Dog",
        spy = expect.createSpy(),
        todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });
  // test if the checkbox properly checked value into onSearch prop
  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy(),
        todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
