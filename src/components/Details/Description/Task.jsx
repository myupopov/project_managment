export default function Task( {taskName, onTaskDelete}) {
  return (
    <li className="flex justify-between my-4">
      <span>{taskName}</span>
      <button onClick={onTaskDelete} className="text-stone-700 hover:text-red-500">Clear</button>
    </li>
  );
}
