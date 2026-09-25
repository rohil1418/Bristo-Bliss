import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Services from "./components/Services";
import Delivery from './components/Delivery';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Services/>
      <Delivery/>
      <Testimonials />
    </>
  );
}

export default App;