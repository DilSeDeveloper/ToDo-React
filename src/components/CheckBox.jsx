export default function CheckBox({checked, onChange}){
    return (
        <input type="checkbox" checked={checked} onChange={onChange} />
    );
}