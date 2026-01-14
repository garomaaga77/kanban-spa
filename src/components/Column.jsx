import { useState } from "react";
import Card from "./Card";

export default function Column({
  id,
  title,
  tasks,
  addTask,
  deleteTask,
  editTask,
  moveTask
}) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(id, text);
    setText("");
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const taskId = e.dataTransfer.getData("taskId");
    const fromColumnId = e.dataTransfer.getData("fromColumnId");
    moveTask(taskId, fromColumnId, id);
  };

  return (
    <div className={`column ${id}`} onDragOver={allowDrop} onDrop={onDrop}>
      <h2>
        {title} <span className="counter">({tasks.length})</span>
        <span className={`badge ${id}`}>{title}</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
          className="taskInput"
        />
      </form>

      {/* Empty Message */}
      {tasks.length === 0 ? (
        <p className="emptyText">No tasks yet </p>
      ) : (
        tasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            columnId={id}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}
