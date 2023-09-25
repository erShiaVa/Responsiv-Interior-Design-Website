import './App.css';
import About from './Components/About/About';
import Checks from './Components/Checks/Checks';
import Design from './Components/Design/Design';
import Header from './Components/Header/Header';
import Management from './Components/Management/Management';
import Navbar from './Components/Navbar/Navbar';
import Offer from './Components/Offer/Offer';
import Portfolio from './Components/Portfolio/Portfolio';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Offer/>
      <Portfolio/>
      <Design/>
      <Management/>
      <Slider/>
      <Checks/>
    </div>
  );
}

export default App;
