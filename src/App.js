import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Bathroom from './Components/bathroom/Bathroom';
import Faq from './Components/faq/Faq';
import Footer from './Components/footer/Footer';
import Gallery from './Components/gallery/Gallery';
import Kitchen from './Components/kitchen/Kitchen';
import Management from './Components/management/Management';
import Process from './Components/procress/Process';
import Ready from './Components/ready/Ready';
import Reviews from './Components/reviews/Reviews';
import TextScroll from './Components/textScroll/TextScroll';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <TextScroll/>
      <Ready/>
      <Kitchen/>
      <Bathroom/>
      <Management/>
      <Gallery/>
      <Process/>
      <Reviews/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
