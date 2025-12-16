import CheckBox from "./CheckBox";
import DeleteButton from "./DeleteButton";

function TodoList({ item, index, toggleComplete, deleteItem }) {
  return (
    <div className="todo-item">
      <CheckBox
        checked={item.completed}
        onChange={() => toggleComplete(index)}
      />
      <span>{item.text}</span>
      <DeleteButton onClick={() => deleteItem(index)} />
    </div>
  );
}

export default TodoList;