
const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false,
}];

const todoReducer = ( state = initialState, action ) => {

  if ( action.type === '[TODO] Add Todo'){
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

const addTodoAction = {
  type: '[TODO] Add Todo',
  payload: newTodo
}


todos = todoReducer( todos, addTodoAction );

console.log({ state: todos });
