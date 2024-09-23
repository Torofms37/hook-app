export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="align-self-center">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span className="ms-3" onClick={() => onToggleTodo(todo.id)}>
          {todo.description}
        </span>
      </div>
      <div>
        <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">
          Borrar
        </button>
      </div>
    </li>
  );
};
