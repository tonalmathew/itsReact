import React from "react";
import { Link } from "react-router-dom";


const ProjectBox = ({ projectPath, projectName }) => (
      <Link className="route-link border border-green-700 rounded-md p-4 m-2 flex justify-center items-center h-52 bg-green-400" to={projectPath}>
        <h2 className="font-bold text-2xl italic text-green-900">
        {projectName}
        </h2>
      </Link>
);

export default function Home() {

  const projects = [
    { path: '/project1', name: 'Project 1' },
    { path: '/project2', name: 'Project 2' },
    { path: '/project3', name: 'Project 3' },
    { path: '/project4', name: 'Project 4' },
    { path: '/project5', name: 'Project 5' },
    { path: '/project6', name: 'Project 6' },
    { path: '/project7', name: 'Project 7' },
    { path: '/project8', name: 'Project 8' },
  ];

  return (
    <nav className='min-h-svh flex flex-col items-center justify-center'>
      <h1 className="font-bold text-4xl italic text-green-300 mb-10 mt-2">
        Some React Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-full">
        {projects.map((project, index) => (
          <ProjectBox key={index} projectPath={project.path} projectName={project.name} />
        ))}
      </div>
    </nav>
  );

}