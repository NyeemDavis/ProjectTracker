import React from 'react'
import ProjectForm from './ProjectForm';
import ProjectsContainer from './ProjectsContainer';

import {useState} from 'react';

export default function Project ({ project }) {
    // Allow user to edit information. Stored in state
    

    return (
        <>
            <div className='project'>
                <h2>Name: {project.projectName}</h2>
                <p>Description: {project.description}</p>
                <p>Deadline: {project.deadline}</p>
                <br></br>
                <h3 className='tasks-anchor'>To-Do</h3>
            </div>

            
        </>
    );
};


