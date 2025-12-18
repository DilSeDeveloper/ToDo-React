import { useState } from "react";
import InputField from "./InputField";
import AddButton from "./AddButton";

function TodoInput({ addList }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    let hasLetter = false;
    let valid = true;

    for (let char of value) {
      if (
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z")
      ) {
        hasLetter = true;
      } else if (
        !((char >= "0" && char <= "9") || char === " ")
      ) {
        valid = false;
        break;
      }
    }

    if (!valid) return;
    if (!hasLetter && value.trim() !== "") return;

    setInputText(value);
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
