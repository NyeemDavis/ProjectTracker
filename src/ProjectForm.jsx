import React from 'react';
import { useState } from 'react';
import Project from './Project';
import ProjectsContainer from './ProjectsContainer';

export default function ProjectForm ({addProject, projects}) {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (projectName.trim() === '') {
            // Handle the case where the project name is empty (display an error, prevent submission, etc.)
            alert('Project Name cannot be empty');
            return;
          }
        
        // Handle if there is another project with the same name
       
        

        // Make new project object
        const newProject = {
            projectName,
            description,
            deadline
        }

        console.log('Project Added')
        addProject(newProject)
    };

    // Make one input being dropdown for technologies OR a search and words that look like it will pop up. 
    // Ex: user types just jav and results are java, javascript...
    return (    
        <div className='form-container hidden'>
            <form onSubmit={handleSubmit} className="project-form">
                <label htmlFor="project-name">Project Name</label>
                <input 
                    type="text" 
                    name="project-name" 
                    placeholder="Enter your project name."
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}    
                />

                <label htmlFor="Description">Description</label>
                <input 
                    type="text" 
                    name="description"
                    placeholder="Enter description here."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
{/* 
                <label htmlFor="technologies">Technologies</label>
                <input type="text" /> */}

                <label htmlFor="Deadline">Deadline</label>
                <input 
                    type='date' 
                    name="deadline" 
                    placeholder="Enter project deadline."
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />

                <button type='submit' disabled={!projectName.trim()}>Submit</button>
            </form>
        </div>
    );
};