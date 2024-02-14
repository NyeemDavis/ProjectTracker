import { useState } from "react";
import Project from "./Project";
import ProjectForm from "./ProjectForm";


function ProjectsContainer () {
    // Use State to update the projects in the list
    const [projects, setProjects] = useState([]);

    const addProject = (project) => {
        setProjects([...projects, project])
    };

    // Deleting a project
    const deleteProject = (project) => {
        const updatedProjects = projects.filter((p) => p !== project);
        setProjects(updatedProjects);
      };

    return (
        <div className="pojects-container">
            {/* Hook add project method to form with render */}
            <ProjectForm addProject={addProject} projects={projects} />
            <h2>Projects: {projects.length}</h2>
            {/* Loop through and render each project */}
            {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
        </div>
    );
};

export default ProjectsContainer;

