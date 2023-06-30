import './index.css';
import Navbar from './Components/Navbar';
import Hero from './Pages/Hero';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="">
          <Navbar/>
          <div className="m-auto w-[95%]">
          <Hero/>
          <Footer/>
          </div>
      </header>
    </div>
  );
}

export default App;
