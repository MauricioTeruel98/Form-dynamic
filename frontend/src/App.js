

import { Route, Routes } from 'react-router-dom';
import './App.css'
import FormModal from './components/FormModal';
import List from './components/List';


function App() {


  return (
    <div className='container'>

      <Routes>
        <Route  path='/' element={<FormModal/>}></Route>
        <Route  path='/list' element={<List/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
