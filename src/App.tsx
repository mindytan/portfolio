import "./App.css";
import About from "./components/About";
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <About />
      <Projects />
    </div>
  );
}

export default App;
