import { useEffect, useState } from "react";
import Column from "./Column";

const initialData = {
  todo: {
    title: "To Do",
    tasks: [{ id: "t1", text: "Implement drag and drop" }]
  },
  progress: {
    title: "In Progress",
    tasks: [{ id: "t2", text: "Write documentation" }]
  },
  done: {
    title: "Done",
    tasks: [{ id: "t3", text: "Setup project" }]
  }
};

export default function Board() {
  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("kanban-data");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [lastDeleted, setLastDeleted] = useState(null);

  useEffect(() => {
    localStorage.setItem("kanban-data", JSON.stringify(columns));
  }, [columns]);

  //  Add Task (Input Field)
  const addTask = (columnId, text) => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      text: text.trim()
    };

    setColumns(prev => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        tasks: [...prev[columnId].tasks, newTask]
      }
    }));
  };

  //  Delete Task (with Undo support)
  const deleteTask = (columnId, taskId) => {
    setColumns(prev => {
      const taskToDelete = prev[columnId].tasks.find(t => t.id === taskId);
      if (!taskToDelete) return prev;

      setLastDeleted({
        task: taskToDelete,
        columnId
      });

      return {
        ...prev,
        [columnId]: {
          ...prev[columnId],
          tasks: prev[columnId].tasks.filter(t => t.id !== taskId)
        }
      };
    });
  };

  //  Undo Delete
  const undoDelete = () => {
    if (!lastDeleted) return;

    setColumns(prev => ({
      ...prev,
      [lastDeleted.columnId]: {
        ...prev[lastDeleted.columnId],
        tasks: [...prev[lastDeleted.columnId].tasks, lastDeleted.task]
      }
    }));

    setLastDeleted(null);
  };

  //  Edit Task
  const editTask = (columnId, taskId, newText) => {
    if (!newText.trim()) return;

    setColumns(prev => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        tasks: prev[columnId].tasks.map(t =>
          t.id === taskId ? { ...t, text: newText.trim() } : t
        )
      }
    }));
  };

  //  Drag & Drop Move Task
  const moveTask = (taskId, fromColumnId, toColumnId) => {
    if (fromColumnId === toColumnId) return;

    setColumns(prev => {
      const movedTask = prev[fromColumnId].tasks.find(t => t.id === taskId);
      if (!movedTask) return prev;

      return {
        ...prev,
        [fromColumnId]: {
          ...prev[fromColumnId],
          tasks: prev[fromColumnId].tasks.filter(t => t.id !== taskId)
        },
        [toColumnId]: {
          ...prev[toColumnId],
          tasks: [...prev[toColumnId].tasks, movedTask]
        }
      };
    });
  };

  return (
    <div>
      {/*  Undo Delete Button */}
      {lastDeleted && (
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <button
            onClick={undoDelete}
            style={{
              width: "220px",
              background: "#16a34a"
            }}
          >
            Undo Delete
          </button>
        </div>
      )}

      <div className="board">
        {Object.entries(columns).map(([key, column]) => (
          <Column
            key={key}
            id={key}
            title={column.title}
            tasks={column.tasks}
            addTask={addTask}
            deleteTask={deleteTask}
            editTask={editTask}
            moveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
}
