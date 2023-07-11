import panther from './pink-panther.png.webp';
import './App.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='app'>

     <div className='panther' ><img src={panther} alt="panther" width="500"/></div> 
    
      
     
      <div className='container'>
        <h1>To do to do to doooooooo list</h1>
      </div>
      <ToDoList/>
      
    </div>
  );
}

export default App;
