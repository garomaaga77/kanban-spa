export default function Card({ title, columnId }) {
  const onDragStart = e => {
    e.dataTransfer.setData("task", title);
    e.dataTransfer.setData("from", columnId);
  };

  return (
    <div
      className="card"
      draggable
      onDragStart={onDragStart}
    >
      {title}
    </div>
  );
}
