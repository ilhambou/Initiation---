
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import HeroSection from './components/HeroSection';
import Service from './components/Service';
import Test from './components/Test'
import Test2 from './components/Test2'
import About from './components/About';



function App() {
  return (
    <Router>
      <Home/>
      <HeroSection/>
      <About />
      
    
      
      <Test />
      

     
      
     
    </Router>
  );
}

export default App;
