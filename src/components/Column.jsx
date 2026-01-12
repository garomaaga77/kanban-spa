export default function Column({ title }) {
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
    </div>
  );
}
