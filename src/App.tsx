import "./App.css";
import { AboutMe } from "./components/mainComponents/aboutMe";
import { Contact } from "./components/mainComponents/contact";
import { Footer } from "./components/mainComponents/footer";
import { Home } from "./components/mainComponents/home";
import { Navbar } from "./components/mainComponents/navbar";
import { Project } from "./components/mainComponents/project";
import { Skills } from "./components/mainComponents/skills";

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
