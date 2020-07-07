const INITIAL_STATE = {
  todos: [],
  selectedTodo: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'createTodo') {
    return { ...state, todos: [...state.todos, action.payload] };
  } else if (action.type === 'IsActive') {
    return {
      ...state,
      todo: state.todos.map((todo) => {
        if (todo.id === action.value) {
          todo.active = !todo.active;
          return {
            ...todo,
            active: todo.active,
          };
        } else {
          return todo;
        }
      }),
    };
  } else if (action.type === 'ActiveColor') {
    return {
      ...state,
      todo: state.todos.map((todo) => {
        if (todo.active === true) {
          todo.classCol = action.value;
          return {
            ...todo,
            classCol: todo.classCol,
          };
        }
        if (todo.active === false) {
          todo.classCol = '';
          return {
            ...todo,
            classCol: todo.classCol,
          };
        } else {
          return todo;
        }
      }),
    };
  } else if (action.type === 'SetSelectedtodo') {
    return { ...state, selectedTodo: action.value };
  } else {
    return state;
  }
};

export default todoReducer;
