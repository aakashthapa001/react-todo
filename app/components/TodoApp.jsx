var React = require('react'),
    TodoList = require('TodoList');

// Create TodoApp Component
var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Leave mail on porch'
        },
        {
          id: 4,
          text: 'Play games'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;
    // pass todos as a prop with todos array
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

// export TodoApp component
module.exports = TodoApp;
