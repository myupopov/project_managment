import Creating from './Details/Creating';
import NoProject from './Details/NoProject';
import Description from './Details/Description';

export default function Details({ projects, projectId, onProjectsUpdate, onProjectSelect }) {

  if (projectId === undefined) {
    return (
      <div className=" text-center w-3/4">
        <NoProject onProjectSelect={onProjectSelect} />
      </div>
    );
  }

  const project = projects[projectId];


  if (projectId === null) {
    return (
      <div className=" text-center w-3/4">
        <Creating 
          onProjectsUpdate={onProjectsUpdate} 
          onProjectSelect={onProjectSelect} 
          projects={projects}
        />
      </div>
    );
  } else {
    return (
      <div className=" text-center w-3/4">
        <Description 
          projects={projects} 
          projectId={projectId} 
          project={project}
          onProjectsUpdate={onProjectsUpdate} 
          onProjectSelect={onProjectSelect} 
        />
      </div>
    );
  }
}
