import './App.css';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Brand from './components/brand/Brand';
import Navbar from './components/Navbar/Navbar';
import Props from './components/props/Props';
import Roadmap from './components/roadmap/Roadmap';

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
      </div>
    </div>
  );
}

export default App;
