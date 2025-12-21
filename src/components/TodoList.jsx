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
      {/* Checkbox */}
      <Checkbox
        checked={item.completed}
        onChange={() => toggleComplete(index)}
      />

      {/* Task Text */}
      <span
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          marginLeft: "10px",
        }}
        className="task-text"
      >
        {item.text}
      </span>

      {/* Timestamp */}
      <span className="task-time">
        {item.timestamp}
      </span>

      {/* Delete Button */}
      <DeleteButton onClick={() => deleteItem(index)} />
    </div>
  );
}

export default TodoList;
