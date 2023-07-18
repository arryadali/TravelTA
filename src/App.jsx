import './App.css';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Contact from './component/contact';
import TopDestination from './component/topDestination';
import Testimoni from './component/testimoni';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Contact/>
      <TopDestination/>
      <Testimoni/>
      <Footer/>
    </div>
  );
}

export default App;
