import Creating from './Details/Creating';
import NoProject from './Details/NoProject';
import Description from './Details/Description';

export default function Details({ projects, projectId, onProjectsUpdate, onProjectSelect }) {

  if (projectId === undefined) {
    return (
      <div className=" text-center w-3/4">
        <NoProject />
      </div>
    );
  }

  const project = projects[projectId];

  if (project === null) {
    return (
      <div className=" text-center w-3/4">
        <Creating />
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
