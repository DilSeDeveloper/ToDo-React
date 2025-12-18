export default function DeleteButton({onClick}){
    return (
        <button onClick={onClick} className="delete-btn" style={{backgroundColor:"red"}}>Delete</button>
        //same as add button 
    );
}