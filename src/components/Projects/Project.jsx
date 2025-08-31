export default function Project({ project, onProjectSelect }) {
  return (
    <div className="mt-6">
      <button onClick={() => onProjectSelect(project)} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">{project.title}</button>
    </div>
  );
}