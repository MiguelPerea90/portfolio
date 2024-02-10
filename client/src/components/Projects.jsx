import React from "react";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div>
      <h1>proyectos</h1>

      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
          technologies={project.Technologies}
        />
      ))}
    </div>
  );
};

export default Projects;
