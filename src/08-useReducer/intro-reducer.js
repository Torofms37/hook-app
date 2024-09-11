
const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false,
}];

const todoReducer = ( state = initialState, action ) => {


  return state;
};

const todos = todoReducer();

console.log(todos);

const newTodo = {
  id: 2,
  todo: 'Hola we',
  done: false
}

const addTodoAction = {
  type: '[TODO], add todo',
  payload: newTodo
}

todos = todoReducer( todos, addTodoAction );