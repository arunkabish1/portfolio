import './App.css'
import './Button.css'
import { Content } from './Content'
import  Header  from './Header'
import 'animate.css';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  

  return (
    <>
    <div className="App scroll-smooth" >
      <Header />
      <Content />
      <Projects />
      <Footer />
      </div>
    </>
  )
}

export default App
