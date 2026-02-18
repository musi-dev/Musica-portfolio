import './App.css';
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import '../src/Styles/Home.css'
import Experience from "./Pages/Experience.js";
import Navigationbar from "./Components/Navigationbar.js";
import Skills from "./Pages/Skills.js";
import Project from "./Pages/Project.js";
import Contact from './Pages/Contact.js';
import MobileArrow from './Pages/MobileArrow.js';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="Experience"><Experience /></section>
      <section id="skills"><Skills/></section>
      <section id="work"><Project /></section>
      <section id="contact"><Contact /> </section>
      <MobileArrow />
    </div>
  );
}

export default App;
