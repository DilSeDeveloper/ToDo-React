export default function AddButton({onClick}){
    return (
        <button  onClick={onClick} style={{backgroundColor:"#00a868"}}>+</button>
        //create a separate css file , add class, import that css file in this file, use that class with className
    );
}