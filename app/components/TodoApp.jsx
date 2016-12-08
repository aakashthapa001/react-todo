var React = require('react'),
    uuid = require('node-uuid'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    TodoSearch = require('TodoSearch'),
    TodoAPI = require('TodoAPI');

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
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    this.setState({todos: updatedTodos});
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
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

// export TodoApp component
module.exports = TodoApp;
