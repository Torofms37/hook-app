
const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false,
}];

const todoReducer = ( state = initialState, action ) => {

  if ( action.type === '[TODO] add todo'){
    return [ ...state, action.payload]
  }
  return state;
};

let todos = todoReducer();

console.log(todos);

const newTodo = {
  id: 2,
  todo: 'Hola we',
  done: false
}

const substractTodo = {
  description: '',
}

const addTodoAction = {
  type: '[TODO], add todo',
  payload: newTodo
}

const removeTodo = {
    type: '[TODO] remove todo',
    payload: substractTodo
  }

todos = todoReducer( todos, addTodoAction, removeTodo );

console.log({ state: todos });
