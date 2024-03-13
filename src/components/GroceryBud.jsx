import React, { useState, useEffect } from "react";
import "./GroceryBud.css";
import GroceryItem from "./GroceryItem";
import Notification from "./Notification";

function GroceryBud() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleAdd = () => {
    console.log("handleAdd called");
    if (inputValue) {
      setItems([...items, { name: inputValue, checked: false }]);
      setInputValue("");
    }
    setNotification({ message: "Item Added To The List", type: "add" });
  };

  const handleCheck = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setNotification({
      message: "Item Deleted From The List",
      type: "delete",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <>
      <Notification message={notification.message} />
      <h2>GroceryBud</h2>
      <div className="grocery-bud">
        <div className="input-div">
          <input
            type="text"
            className="inp-text"
            placeholder="Grocery Items"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn" onClick={handleAdd}>
            Add
          </button>
        </div>
        <ul>
          {items.map((item, index) => (
            <GroceryItem
              key={index}
              item={item}
              onCheck={() => handleCheck(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default GroceryBud;
