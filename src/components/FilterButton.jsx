function FilterButton({ isActive, label, onClick }) {
  return (
    <button
      className={isActive ? "active" : ""}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default FilterButton;
