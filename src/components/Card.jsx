import { useState } from "react";

export default function Card({ task, columnId, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const onDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
    e.dataTransfer.setData("fromColumnId", columnId);
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
    <div className="card" draggable={!isEditing} onDragStart={onDragStart}>
      {isEditing ? (
        <div>
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
          <span className="cardText">{task.text}</span>

          <div className="cardButtonsSmall">
            <button
              className="btnEdit"
              onClick={() => setIsEditing(true)}
              title="Edit"
            >
              ✏️
            </button>

            <button className="btnDelete" onClick={handleDelete} title="Close">
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
