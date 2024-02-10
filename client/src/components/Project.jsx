import React from "react";

const Project = ({ name, image, description, technologies }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{image}</p>
      <p>{description}</p>
      {technologies.map((tech) => (
        <div 
          key={tech.id}
        >
          <p>{tech.name}</p>
          
          <img src={tech.image} alt="Imagen del Proyecto" />
        </div>
      ))}
    </div>
  );
};

export default Project;
