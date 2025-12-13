function TodoList(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.toggleComplete(props.index)}
      />
      <span>{props.item}</span>
      <button
        className="delete-btn"
        onClick={() => props.deleteItem(props.index)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoList;
