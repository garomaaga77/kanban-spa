import Column from "./Column";

export default function Board() {
  const columns = ["To Do", "In Progress", "Done"];

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {columns.map(title => (
        <Column key={title} title={title} />
      ))}
    </div>
  );
}
