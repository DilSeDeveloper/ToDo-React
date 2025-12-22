import "./AddButton.css";
export default function AddButton({onClick}){
    return (
        <button  onClick={onClick} className="AddButton">+</button>
    );
}