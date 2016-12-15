var React = require('react'),
    {connect} = require('react-redux');

import Todo from 'Todo';

// Create Todolist component
export var TodoList = React.createClass({
  render: function() {
    // get todos array as a prop passed from TodoApp
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
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
export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
