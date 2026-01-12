import Card from "./Card";

export default function Column({ id, title, tasks, moveTask }) {
  const allowDrop = e => {
    e.preventDefault();
  };

  const onDrop = e => {
    const task = e.dataTransfer.getData("task");
    const from = e.dataTransfer.getData("from");
    moveTask(task, from, id);
  };

  return (
    <div
      onDragOver={allowDrop}
      onDrop={onDrop}
      style={{
        border: "1px solid #aaa",
        padding: "10px",
        width: "220px",
        minHeight: "250px"
      }}
    >
      <h2>{title}</h2>

      {tasks.map(task => (
        <Card key={task} title={task} columnId={id} />
      ))}
    </div>
  );
}
