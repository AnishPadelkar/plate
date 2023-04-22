
import './App.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Foot from './components/Footer/Foot';
import Newsletter from './components/TCards/Newsletter';
import FoodSection from './components/FoodSection/FoodSection';
import FoodSection2 from './components/FoodSection2/FoodSection2';
import FoodSection3 from './components/FoodSection3/FoodSection3.jsx';

import Videosec from './components/Videosec/Videosec';
import Aboutus from './components/Aboutus/Aboutus';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <FoodSection/>
      <FoodSection2/>
      <FoodSection3/>
      <Videosec/>
      <Aboutus/>
      <Foot/>
      
    </div>
  );
}

export default App;
