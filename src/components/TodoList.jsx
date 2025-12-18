import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";

function TodoList({ item, index, toggleComplete, deleteItem }) {
  return (
    <div
      className="todo-item"
      style={{
        opacity: item.completed ? 0.6 : 1,
      }}
    >
      <Checkbox
        checked={item.completed}
        onChange={() => toggleComplete(index)}
      />

      <span
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          marginLeft: "10px",
        }}
      >
        {item.text}
      </span>

      <DeleteButton onClick={() => deleteItem(index)} />
    </div>
  );
}

export default TodoList;
