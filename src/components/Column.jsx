import Card from "./Card";

export default function Column({ title }) {
  const cards = ["Task A", "Task B"];

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

      {cards.map(card => (
        <Card key={card} title={card} />
      ))}
    </div>
  );
}
