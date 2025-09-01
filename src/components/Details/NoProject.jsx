export default function NoProject({ onProjectSelect }) {

  const handleCreateProject = () => { 
    onProjectSelect(null);
  };

  return (
    <div>
      <img 
        src="./src/assets/no-projects.png" 
        alt="No projects" 
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <button onClick={handleCreateProject} className="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-400">
        Create new project
      </button>
    </div>
  );
}
