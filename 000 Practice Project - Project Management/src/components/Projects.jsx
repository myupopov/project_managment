import Project from './Projects/Project';



export default function Projects({ projects, onProjectSelect }) {

  const handleProjectSelect = (project) => {
    onProjectSelect(project);
  };

  return (
    <div className=" p-8 pt-16 h-[calc(100vh)] w-1/4 bg-black rounded-tr-xl">
      <h1 className="text-2xl font-bold text-white mb-8">YOUR PROJECTS</h1>
      <button onClick={() => handleProjectSelect(null)} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add projects</button>
      {Object.keys(projects).map((projectId) => (
        <Project key={projectId} project={projects[projectId]} onProjectSelect={handleProjectSelect} />
      ))}
    </div>
  );
}
