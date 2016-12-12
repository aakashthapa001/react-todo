var React = require('react'),
    moment = require('moment');

// Create Todolist component
var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
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
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

// export TodoList component
module.exports = Todo;
