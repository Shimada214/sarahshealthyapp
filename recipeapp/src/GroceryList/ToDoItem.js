import { FaTrashAlt } from 'react-icons/fa';

export default function TodoItem(props) {
  const { todo, removeTodo } = props;
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
      {todo.text}
      <div className="iconsContainer">
        <FaTrashAlt style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  );
}
