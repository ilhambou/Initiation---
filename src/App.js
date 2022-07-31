
import './App.css';
import Home from './pages/Home';
import HeroSection from './components/HeroSection';
// import Service from './components/Service';
// import Test from './components/Test'
import Test2 from './components/Test2'
import About from './components/About';
import Hero2 from './components/Hero2';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
// import Testsupp from './components/Testsupp'
import Vid1 from './components/Vid1';
import Footer from './components/Footer'
import ImageSlider2 from './components/ImageSlider2';
import { SliderData2 } from './components/SliderData2';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (

    <Router>
       <Home/>
      
       <Routes>
         <Route exact path='/' element={[<Hero2 />,<br/>,<About />,<Test2 />]} />
         <Route exact path="/led" element={[<ImageSlider slides={SliderData} />,<Vid1 />]} />
         <Route exact path="/test" element={[<ImageSlider2 slides={SliderData2} />]} />


       </Routes>
       <Footer />
   </Router>
  );
}

export default App;
