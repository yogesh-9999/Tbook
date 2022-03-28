
import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Modal from './Components/Modal';
import NavBar from './Components/Navbar';
// import Filter from './Components/Filter';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="App" >
     <NavBar className='nvi' isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
     {isModalOpen&&<Modal setIsModalOpen={setIsModalOpen}/>}
     <Body />
    </div>
  );
}

export default App;
