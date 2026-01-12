export default function Card({ title }) {
  return (
    <div
      style={{
        background: "#f4f5f7",
        padding: "8px",
        marginBottom: "8px",
        borderRadius: "4px"
      }}
    >
      {title}
    </div>
  );
}
