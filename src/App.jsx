import React from 'react'
import {useState} from "react";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
function App() {
  const [listText, setListText]=useState([]);
  let addList= (inputText)=>{
       if(inputText!==''){
        setListText([
  ...listText,
  { text: inputText, completed: false }
]);

       }
  }
  const deleteText=(key)=>{
        let newTodo= [...listText];
        newTodo.splice(key,1);
        setListText([...newTodo]);
  }
  const toggleComplete=(index)=>{
    let newList=[...listText];
    newList[index].completed=!newList[index].completed;
    setListText(newList);
  }
  return (
    <div className='main-container'>
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1>TODO</h1>
        <hr />

        {listText.map((listItem,i)=>{
           return (
                <TodoList key={i} index={i} item={listItem} deleteItem={deleteText} toggleComplete={toggleComplete}/>
           )
        })}
       
      </div>
      
    </div>
  );
}

export default App