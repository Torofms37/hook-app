import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos = [],
  onDeleteTodo,
  onToggleTodo,
  onModifyTodo,
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          onModifyTodo={onModifyTodo}
        />
      ))}
    </ul>
  );
};
