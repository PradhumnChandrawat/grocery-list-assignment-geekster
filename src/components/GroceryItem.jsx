import React from "react";
import "./GroceryItem.css";

function GroceryItem({ item, onCheck, onDelete }) {
  return (
    <li className={item.checked ? "checked-item" : ""}>
      <input type="checkbox" checked={item.checked} onChange={onCheck} />
      {item.name}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default GroceryItem;
