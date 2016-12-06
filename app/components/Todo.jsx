var React = require('react');

// Create Todolist component
var Todo = React.createClass({
  render: function() {
    var {id, text} = this.props;
    return(
      <div>
        {id}. {text}
      </div>
    );
  }
});

// export TodoList component
module.exports = Todo;
