import './App.css';
import './Button.css';
import { Content } from './Content';
import Header from './Header';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './Projects';
import Footer from './Footer';
import Expirience from './Expirience';
import { useEffect } from 'react';
import Contact from './Contact';

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 5000, // animation duration in milliseconds
      once: true, // animation only happens once
    });
  }, []);

  return (
    <div className="App bg-slate-950 scroll-smooth">
      <Header />
      <Content data-aos="fade-up" />
      <Expirience data-aos="fade-right" />
      <Projects data-aos="fade-left" />
      <Contact data-aos="fade-aup" />
      <Footer  />
    </div>
  );
}

export default App;
