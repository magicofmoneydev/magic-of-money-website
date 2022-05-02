import './App.css';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Brand from './components/brand/Brand';
import Navbar from './components/Navbar/Navbar';
import Props from './components/props/Props';
import Roadmap from './components/roadmap/Roadmap';
import Tokenomics from './components/tokenomics/Tokenomics';
import CTA from './components/cta/CTA';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <div className='content-wrap'> 
        <Brand/>
        <About/>
        <Props/>
        <Roadmap/>
        <Tokenomics/>
      </div>
      <CTA/>
      <Brand/>
      <Footer/>
    </div>
  );
}

export default App;
