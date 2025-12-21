import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButton from "./components/FilterButton";
import "./App.css";

function App() {
  const [listText, setListText] = useState([]);
  const [filter, setFilter] = useState("all"); // all | pending | completed

  const addList = (inputText) => {
  if (inputText.trim() !== "") {
    setListText([
      ...listText,
      { 
        text: inputText,
        completed: false,
        timestamp: new Date().toLocaleString()
      },
    ]);
  }
};


  const deleteText = (index) => {
    const newList = [...listText];
    newList.splice(index, 1);
    setListText(newList);
  };

  const toggleComplete = (index) => {
    const newList = [...listText];
    newList[index].completed = !newList[index].completed;
    setListText(newList);
  };

  const filteredList = listText.filter((item) => {
    if (filter === "pending") return !item.completed;
    if (filter === "completed") return item.completed;
    return true; // all
  });

  return (
    <div className="main-container">
      <div className="center-container">

        <TodoInput addList={addList} />

        <hr />

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <FilterButton
            label="Pending"
            isActive={filter === "pending"}
            onClick={() => setFilter("pending")}
          />

          <FilterButton
            label="Completed"
            isActive={filter === "completed"}
            onClick={() => setFilter("completed")}
          />

          <FilterButton
            label="All"
            isActive={filter === "all"}
            onClick={() => setFilter("all")}
          />
        </div>
        {filteredList.map((item, i) => (
          <TodoList
            key={i}
            index={i}
            item={item}
            deleteItem={deleteText}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
