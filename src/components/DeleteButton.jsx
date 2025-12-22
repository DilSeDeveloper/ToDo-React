import "./DeleteButton.css"
export default function DeleteButton({onClick}){
    return (
        <button onClick={onClick} className="delete-btn" >Delete</button>
    );
}