var React = require('react'),
    {connect} = require('react-redux'),
    moment = require('moment'),
    actions = require('actions');

// Create Todolist component
export var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
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
          // this.props.onToggle(id);
          dispatch(actions.toggleTodo(id));
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

// export default and Todo component
export default connect()(Todo);
