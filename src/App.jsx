import Projects from './components/Projects';
import Details from './components/Details';
import { useState } from 'react';

const projects = {
  ['20250811_learning_react']: {
    title: 'Learning React',
    description: 'Learn React from the ground up. Start with the basics, finish with advanced knowledge.',
    tasks: ['Practice, practice, practice!', 'Learn advanced concepts', 'Learn the Basics'],
    date: 'Aug 08, 2025',
  },
  ['20250812_deep_dive_react']: {
    title: 'Deep Dive into React',
    description: 'Углубленное изучение React, включая хуки, контекст, оптимизацию производительности и продвинутые паттерны.',
    tasks: ['Изучить React Hooks', 'Разобраться с Context API', 'Освоить Redux', 'Изучить оптимизацию производительности'],
    date: 'Aug 08, 2025',
  },
};

function App() {

  // Undefined is used to indicate that no project is selected
  // Null is used to indicate that a project is being created
  const [selectedProjectId, setSelectedProjectId] = useState(undefined);

  const [projectsList, setProjectsList] = useState(projects);

  const handleProjectSelect = (project) => {
    if (project === null) {
      setSelectedProjectId(null);
    } else {
      const projectId = Object.keys(projectsList).find(key => projectsList[key] === project);
      setSelectedProjectId(projectId);
    }
  };

  const handleProjectsUpdate = (projects) => {
    setProjectsList(projects);
  };

  const selectedProject = selectedProjectId ? projectsList[selectedProjectId] : undefined;

  return (
    <>
      <main className="h-screen my-8 flex flex-col gap-8">
        <div className="w-full h-4"></div>
        <div className="flex">
          <Projects projects={projectsList} onProjectSelect={handleProjectSelect} />
          <Details projects={projectsList} projectId={selectedProjectId} onProjectsUpdate={handleProjectsUpdate} onProjectSelect={handleProjectSelect} />
        </div>
      </main>
    </>
  );
}

export default App;
