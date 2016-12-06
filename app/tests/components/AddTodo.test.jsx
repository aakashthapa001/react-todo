var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    AddTodo = require('AddTodo');

// Start Test
describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });
  // test if the value is passed from the input or not
  it('should call onAddTodo prop with valid data', () => {
    var todoText = 'Check mail',
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  // test if the value passed from the input is invalid
  it('should not call onAddTodo prop with invalid data', () => {
    var todoText = '',
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todoText);
  });

});
