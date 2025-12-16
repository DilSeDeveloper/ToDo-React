import { useState } from "react";
import InputField from "./InputField";
import AddButton from "./AddButton";

function TodoInput({ addList }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
  const value = e.target.value;

  let hasLetter = false;
  let hasOnlyValidChars = true;

  for (let char of value) {
    // check if character is a letter
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      hasLetter = true;
    }
  
    else if (
      !((char >= "0" && char <= "9") || char === " ")
    ) {
      hasOnlyValidChars = false;
      break;
    }
  }

  if (!hasOnlyValidChars) return;
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