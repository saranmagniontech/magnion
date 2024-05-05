import {BrowserRouter,Routes,Route} from  'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/Contact';
import Members from './components/Members';
import Packages from './components/Packages';
import SuccessStories from './components/SuccessStories ';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
  
      <BrowserRouter>
     
      <Navbar />
      
      <Routes>
      
        <Route  exact path='/' element={<Home/>}/>
        <Route  exact path='/about' element={<About/>}/>
        <Route  exact path='/contact-us' element={<ContactUs/>}/>
        <Route  exact path='/packages' element={<Packages/>}/>
        <Route  exact path='/members' element={<Members/>}/>
        <Route  exact path='/success-stories' element={<SuccessStories/>}/> 
        
       

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
