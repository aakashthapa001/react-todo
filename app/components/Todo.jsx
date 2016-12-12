var React = require('react'),
    moment = require('moment');

// Create Todolist component
var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : ' todo';
    var renderDate = () => {
        var message = 'Created ';
        var timesamp = createdAt;

        if(completed) {
          message = 'Completed ';
          timesamp = completedAt;
        }
        return message + moment.unix(timesamp).format('MMM Do YYYY @ h:mma')
    };

    return(
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div className="todo__subtext">
          <p>{text}</p>
          <p>{renderDate()}</p>
        </div>
      </div>
    );
  }
});

// export TodoList component
module.exports = Todo;
