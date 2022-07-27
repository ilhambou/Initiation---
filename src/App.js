
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import HeroSection from './components/HeroSection';
// import Service from './components/Service';
// import Test from './components/Test'
import Test2 from './components/Test2'
import About from './components/About';
// import Hero2 from './components/Hero2'
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
// import Testsupp from './components/Testsupp'
import Vid1 from './components/Vid1';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Home/>
      
      <HeroSection/>
      <About />
      <Test2 />
      {/* <ImageSlider slides={SliderData} />
      <Vid1 /> */}
      <Footer />
      

    </Router>
  );
}

export default App;
