import Button from './Button';
import ProjectForm from './ProjectForm';
import './App.css'

function App() {
 const handleClick = () => {

 };



  return (
    <div>
      <h1 className='title'>Project Progress Tracker</h1>
      {/* Button to add Project, Pulls up form */}
      <Button onClick={handleClick} text={'Add Project'}></Button>

      <ProjectForm></ProjectForm>
    </div>
  );
};

export default App;
