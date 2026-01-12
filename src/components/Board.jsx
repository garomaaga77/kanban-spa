import { useState } from "react";
import Column from "./Column";

export default function Board() {
  const [columns, setColumns] = useState({
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
  });

  const moveTask = (task, from, to) => {
    if (from === to) return;

    setColumns(prev => {
      const newFromTasks = prev[from].tasks.filter(t => t !== task);
      const newToTasks = [...prev[to].tasks, task];

      return {
        ...prev,
        [from]: { ...prev[from], tasks: newFromTasks },
        [to]: { ...prev[to], tasks: newToTasks }
      };
    });
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
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

