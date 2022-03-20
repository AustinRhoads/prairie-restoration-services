
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';

import ServicesPage from './components/ServicesPage';
import ResearchPage from './components/ResearchPage';
import Publications from './components/Publications';
import Contact from './components/Contact';
import News from './components/News';
import MainDropDown from './components/MainDropDown';


function App() {


  const select_i_ching = (e) => {

    const i_ching = document.getElementById("i-ching");
    const menu = document.getElementById('main-drop-down')
    console.log(i_ching)
    i_ching.classList.toggle("i-ching-selected");
    i_ching.classList.toggle("i-ching-unselected");
    menu.classList.toggle("hidden-menu");
    menu.classList.toggle("visible-menu");
  
    
  }

  return (
    <div className="app">
      <NavBar />


      <div id="i-ching" className="i-ching-unselected" onClick={(e) => select_i_ching(e)}>
              <div id="i-ching-bars-container">
                <div className="i-ching-bar-1"></div>  
                <div className="i-ching-bar-2"></div>  
                <div className="i-ching-bar-3"></div>   
              </div>
 
            <div className="i-ching-box"></div>
            
      </div>

      <MainDropDown  select_i_ching={select_i_ching} />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/services" element={ <ServicesPage /> } />
        <Route path="/research" element={ <ResearchPage/> } />
        <Route path="/publications" element={ <Publications /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path ="/news" element={<News />} />
      </Routes>
    

      
    </div>
  );
}

export default App;
