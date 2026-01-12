import { useState, useEffect } from "react";
import Column from "./Column";

const initialData = {
  todo: {
    title: "To Do",
    tasks: ["Implement drag and drop"]
  },
  progress: {
    title: "In Progress",
    tasks: ["Write documentation"]
  },
  done: {
    title: "Done",
    tasks: ["Setup project"]
  }
};

export default function Board() {
  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("kanban-data");
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("kanban-data", JSON.stringify(columns));
  }, [columns]);

  const moveTask = (task, from, to) => {
    if (from === to) return;

    setColumns(prev => {
      return {
        ...prev,
        [from]: {
          ...prev[from],
          tasks: prev[from].tasks.filter(t => t !== task)
        },
        [to]: {
          ...prev[to],
          tasks: [...prev[to].tasks, task]
        }
      };
    });
  };

  return (
    <div className="board">

      {Object.entries(columns).map(([key, column]) => (
        <Column
          key={key}
          id={key}
          title={column.title}
          tasks={column.tasks}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
}
