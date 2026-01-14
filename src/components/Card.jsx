import { useState } from "react";

export default function Card({ task, columnId, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const onDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
    e.dataTransfer.setData("fromColumnId", columnId);

    // Add drag style
    e.currentTarget.classList.add("dragging");
  };

  const onDragEnd = (e) => {
    // Remove drag style
    e.currentTarget.classList.remove("dragging");
  };

  const handleSave = () => {
    editTask(columnId, task.id, text);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const ok = window.confirm("Are you sure you want to delete this task?");
    if (ok) deleteTask(columnId, task.id);
  };

  return (
    <div
      className="card"
      draggable={!isEditing}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {isEditing ? (
        <div className="cardEditBox">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="editInput"
          />

          <div className="cardButtons">
            <button className="btnSave" onClick={handleSave} title="Save">
              Save
            </button>

            <button
              className="btnCancel"
              onClick={() => {
                setText(task.text);
                setIsEditing(false);
              }}
              title="Cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="cardRow">
          <div className="cardText">{task.text}</div>

          <div className="cardActions">
            <button
              className="btnEdit"
              onClick={() => setIsEditing(true)}
              title="Edit"
            >
              ✏️
            </button>

            <button
              className="btnDelete"
              onClick={handleDelete}
              title="Delete"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
