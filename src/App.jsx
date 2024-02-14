import Button from './Button';
import ProjectForm from './ProjectForm';
import './App.css'
import ProjectsContainer from './ProjectsContainer';

function App() {
 const handleClick = () => {
  console.log('Clicked')
 };



  return (
    <div>
      <h1 className='title'>Project Progress Tracker</h1>
      {/* Button to add Project, Pulls up form. Another to Delete */}
      <Button onClick={handleClick} text={'Add Project'} />
      <Button onClick={handleClick} text={"Delete Project"} />
      
      <ProjectsContainer />
    </div>
  );
};

export default App;
