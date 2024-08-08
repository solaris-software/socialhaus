import './App.css'
import {Navbar} from "./components/navbar/index.jsx";
import {Hero} from "./components/hero/index.jsx";
import {About} from "./components/about/index.jsx";
import {Features} from "./components/features/index.jsx";
import {Portfolio} from "./components/portfolio/index.jsx";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Portfolio />
    </div>
  )
}

export default App
