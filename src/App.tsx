import "./App.css";
import {
  AboutMe,
  Contact,
  Footer,
  Home,
  Navbar,
  Project,
  Skills,
} from "./components/mainComponents/ComponentsIndex";

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
