
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';

import ServicesPage from './components/ServicesPage';
import ResearchPage from './components/ResearchPage';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/services" element={ <ServicesPage /> } />
        <Route path="/research" element={ <ResearchPage/> } />
        <Route path="/publications" element={ <Publications /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>

    </div>
  );
}

export default App;
