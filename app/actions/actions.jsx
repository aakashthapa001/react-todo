// Search text action
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggleShowCompleted action
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

// Add todo action
export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

// add multiple todos i.e. addTodos
export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

// toggleTodo action (id)
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
