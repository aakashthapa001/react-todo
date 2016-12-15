var React = require('react'),
    uuid = require('node-uuid'),
    moment = require('moment');
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

// Create TodoApp Component
var TodoApp = React.createClass({
  render: function() {
    // pass todos as a prop with todos array
    return(
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className= "row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// export TodoApp component
module.exports = TodoApp;
