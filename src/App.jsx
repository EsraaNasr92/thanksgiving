import './App.css';
import Features from './components/Features';
import Header from './components/Header';
import Slider from './components/Slider';
function App() {


  return (
    <div className='bg-[#faf7cb]'>
      <div className="top-header bg-[url('./assets/bg-img.png')] bg-cover">
        <Header />
        <Slider />
      </div>
      <Features />
    </div>
  )
}

export default App
