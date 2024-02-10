import React, { useState, useEffect, Fragment } from "react";
import Projects from "./components/Projects";

function App() {
  // Se crea el state
  const [projects, setProjects] = useState([]);

  // Función que al hacer click trae los proyectos y actualiza el state
  const getAllProjects = () => {
    const url = "http://localhost:3001/proyectos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  };

  // Carga los proyectos cuando el documento este listo
  useEffect( () => {
    getAllProjects();
  }, [] );

  return (
    <Fragment>
      <Projects 
        projects={projects} 
      />
    </Fragment>
  );
}

export default App;
