var React = require('react');

// Create Todolist component
var Todo = React.createClass({
  render: function() {
    var {id, text, completed} = this.props;
    return(
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    );
  }
});

// export TodoList component
module.exports = Todo;
