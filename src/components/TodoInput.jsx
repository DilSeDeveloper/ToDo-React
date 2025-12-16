import { useState } from "react";
import InputField from "./InputField";
import AddButton from "./AddButton";

function TodoInput({ addList }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9 ]*$/.test(value)) {
      setInputText(value);
    }
  };

 const handleAdd = () => {
  if (inputText.trim() === "") return;
  addList(inputText);
  setInputText("");
};


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="input-container">
      <InputField
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <AddButton onClick={handleAdd} />
    </div>
  );
}

export default TodoInput;