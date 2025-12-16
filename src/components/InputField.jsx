function InputField({value, onChange, onKeyDown}){
    return (
        <input type="text" 
        placeholder="enter your task"
        className="input-box-todo"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}/>
    );
}
export default InputField;