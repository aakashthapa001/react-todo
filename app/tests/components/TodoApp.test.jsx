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
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number')
  });
  //
  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    // call handleToggle with 11
    todoApp.handleToggle(11);
    // Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  // Test that when toggle from true to false, completedAt get removed
  it('should remove completedAt when toggle from completed to incomplete', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 2
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    // check that todos first item has completed value of true
    expect(todoApp.state.todos[0].completed).toBe(true);
    // call handleToggle with 11
    todoApp.handleToggle(11);
    // Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(false);
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
