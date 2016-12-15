var React = require('react'),
    uuid = require('node-uuid'),
    moment = require('moment'),
    AddTodo = require('AddTodo'),
    TodoSearch = require('TodoSearch'),
    TodoAPI = require('TodoAPI');
import TodoList from 'TodoList';

// Create TodoApp Component
var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  //fires if a prop or state for a component changes
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state,
        filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    // pass todos as a prop with todos array
    return(
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className= "row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// export TodoApp component
module.exports = TodoApp;
