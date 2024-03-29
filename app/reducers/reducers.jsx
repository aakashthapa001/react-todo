var uuid = require('node-uuid'),
    moment = require('moment');

// searchText reducer
export var searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText.toLowerCase();
    default:
      return state;
  }
};

// showCompleted reducer, default false
export var showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

// addTodo reducer
export var todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    // add case for TOGGLE_TODO completed equal to opposite value and updateCompletedAt
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          var nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });
    // add multiple todo as todos
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};
