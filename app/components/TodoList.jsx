var React = require('react'),
    Todo = require('Todo');

// Create Todolist component
var TodoList = React.createClass({
  render: function() {
    // get todos array as a prop passed from TodoApp
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo}/>
        )
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
});

// export TodoList component
module.exports = TodoList;
