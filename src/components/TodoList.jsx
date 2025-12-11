function TodoList(props) {
  return (
    <div className="todo-item">
      <span>{props.item}</span>
      <button
        className="delete-btn"
        onClick={() => props.deleteItem(props.index)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoList;
