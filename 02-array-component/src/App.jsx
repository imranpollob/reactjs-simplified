import { useState } from "react";
import "./App.css";

export default function App() {
  const initialItems = ["A", "B", "C"];

  const [items, setItems] = useState(initialItems);

  function addAtIndexOne() {
    setItems([...items.slice(0, 1), "new-item", ...items.slice(1)]);
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => setItems(items.slice(1))}>
          remove the first element
        </button>
        <button onClick={() => setItems(items.slice(0, -1))}>
          remove the last element
        </button>
        <button onClick={() => setItems(items.filter((item) => item !== "B"))}>
          remove B
        </button>
        <button onClick={() => setItems(["new-item", ...items])}>
          add a new element at the beginning
        </button>
        <button onClick={() => setItems([...items, "new-item"])}>
          add a new element at the end
        </button>
        <button onClick={() => setItems([])}>clear array</button>
        <button onClick={() => setItems(initialItems)}>
          reset the array to the initial value
        </button>
        <button onClick={addAtIndexOne}>add a new element at index 1</button>
      </div>
    </div>
  );
}
