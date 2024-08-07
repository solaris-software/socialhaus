import './App.css'
import {Navbar} from "./components/navbar/index.jsx";
import {Hero} from "./components/hero/index.jsx";
import {About} from "./components/about/index.jsx";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
