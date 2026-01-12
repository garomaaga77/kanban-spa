import { useState } from "react";
import Card from "./Card";

export default function Column({ title }) {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const text = prompt("Enter task name");
    if (text) {
      setCards([...cards, text]);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #aaa",
        padding: "10px",
        width: "220px",
        minHeight: "200px"
      }}
    >
      <h2>{title}</h2>

      <button onClick={addCard}>+ Add task</button>

      {cards.map((card, index) => (
        <Card key={index} title={card} />
      ))}
    </div>
  );
}
