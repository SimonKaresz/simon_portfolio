import "./App.css";
import { AboutMe } from "./components/mainComponents/AboutMe/aboutMe";
import { Contact } from "./components/mainComponents/Contact/contact";
import { Footer } from "./components/mainComponents/Footer/footer";
import { Home } from "./components/mainComponents/Home/home";
import { Navbar } from "./components/mainComponents/Navbar/navbar";
import { Project } from "./components/mainComponents/Project/project";
import { Skills } from "./components/mainComponents/Skill/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
