import Task from './Description/Task'

export default function Description({ projects, projectId, project, onProjectsUpdate, onProjectSelect }) {

  const handleDeleteProject = () => {
    const newProjects = { ...projects };
    delete newProjects[projectId];
    onProjectsUpdate(newProjects);
    onProjectSelect(undefined);
  };

  const handleTaskDelete = (taskToDelete) => {
    const newProjects = { ...projects };
    
    if (projectId && newProjects[projectId]) {
      newProjects[projectId] = {
        ...newProjects[projectId],
        tasks: newProjects[projectId].tasks.filter(task => task !== taskToDelete)
      };

      onProjectsUpdate(newProjects);
    }
  };

  const { title, description, tasks, date } = project;

  return (
    <div className="w-full p-16 text-left">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {title}
          </h1>
          <button onClick={handleDeleteProject} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {description}
        </p>
      </header>
      
      <div className="text-left">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <div className="flex items-center gap-4">
          <input 
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            placeholder="Add task..."
          />
          <button className="text-stone-600 hover:text-stone-950">
            Add Task
          </button>
        </div>
        
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <Task key={task} taskName={task} onTaskDelete={() => handleTaskDelete(task)} />
          ))}
        </ul>
      </div>
    </div>
  );
}