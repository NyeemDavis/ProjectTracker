import useState from 'react';
import Project from './Project';

export default function ProjectForm () {
    // const [projectName, setProjectName] = useState('');
    // const [description, setDescription] = useState('');
    // const [deadline, setDeadline] = ('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const newProject = {
    //         projectName,
    //         description,
    //         deadline
    //     }

    // };

    // Make one input being dropdown for technologies OR a search and words that look like it will pop up. 
    // Ex: user types just jav and results are java, javascript...
    return (    
        <>
            <form className="project-form">
                <label htmlFor="project-name">Project Name</label>
                <input type="text" name="project-name" placeholder="Enter your project name."/>

                <label htmlFor="Description">Description</label>
                <input type="text" name="description"placeholder="Enter description here."/>
{/* 
                <label htmlFor="technologies">Technologies</label>
                <input type="text" /> */}
                <label htmlFor="Deadline">Deadline</label>
                <input type='text' name="deadline" placeholder="Enter project deadline."></input>

                <input type="submit"></input>
            </form>
        </>
    );
};