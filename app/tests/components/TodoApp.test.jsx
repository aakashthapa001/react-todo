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
  // test to see if new todo is added in the todolist given from todo component or input
  it('should add todo to todos state on handleAddTodo', () => {
    var todoText = 'test text',
        todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
