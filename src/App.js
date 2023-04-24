
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Nav/Navbar';
import Foot from './components/Footer/Foot';

import FoodSection from './components/FoodSection/FoodSection';
import FoodSection2 from './components/FoodSection2/FoodSection2';
import FoodSection3 from './components/FoodSection3/FoodSection3.jsx';

//import Videosec from './components/Videosec/Videosec';
import Aboutus from './components/Aboutus/Aboutus';
import Packaging from './components/Packaging/Packaging';
import Connect from './components/Connect/Connect';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <FoodSection/>
      <FoodSection2/>
      <FoodSection3/>
      <Packaging/>
      <Aboutus/>
      <Connect/>
      <Foot/>
  
      
    </div>
  );
}

export default App;
