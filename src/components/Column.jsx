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
      className="column"
      onDragOver={allowDrop}
      onDrop={onDrop}
    >
      <h2>{title}</h2>

      {tasks.map(task => (
        <Card
          key={task}
          title={task}
          columnId={id}
        />
      ))}
    </div>
  );
}
