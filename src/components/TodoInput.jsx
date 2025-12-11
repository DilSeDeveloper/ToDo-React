import React from "react";
import { useState } from "react";
function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleEnterPress=(e)=>{
    if(e.keyCode==13){
       props.addList(inputText);
        setInputText("");
    }
  }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="enter your task "
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText(""); //after writing the text should get removed from the placeholder
        }}
      >
        +
      </button>

    </div>
  );
}

export default TodoInput;
