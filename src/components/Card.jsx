export default function Card({ title, columnId }) {
  const onDragStart = e => {
    e.dataTransfer.setData("task", title);
    e.dataTransfer.setData("from", columnId);
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{
        background: "#f4f5f7",
        padding: "8px",
        marginBottom: "8px",
        borderRadius: "4px",
        cursor: "grab"
      }}
    >
      {title}
    </div>
  );
}
