
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

import Main from './components/Main/Main';
import { useMediaQuery } from "react-responsive";

function App() {

  return (
    <div className='flex'>
   <Sidebar /> 
  
    <Main/>
    </div>
  );
}

export default App;
