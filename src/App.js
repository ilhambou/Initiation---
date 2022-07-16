
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <Router>
      <Home/>
      <HeroSection/>
    </Router>
  );
}

export default App;
