import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Introduction/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skills/Skill";
import Work from "./components/Works/Work";


function App() {
  return (
    <div className="">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
