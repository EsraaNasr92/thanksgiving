import './App.css';
import About from './components/About';
import DessertSpotlight from './components/DessertSpotlight';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Recipes from './components/Recipes';
import SeasonalDrink from './components/SeasonalDrink';
import Slider from './components/Slider';
import Video from './components/Video';

function App() {
  return (
    <div className='bg-[#faf7cb]'>
      <div className="top-header bg-[url('./assets/bg-img.png')] bg-cover">
        <Header />
        <div id="home"><Slider /></div>
      </div>
      <div id="about"><About/></div>
      <div id="features"><Features /></div>
      <Video />
      <div id="recipes"></div><Recipes  />
      <div id="dessert"></div><DessertSpotlight  />
      <div id="drink"></div><SeasonalDrink  />
      <Footer />
    </div>
  )
}

export default App
