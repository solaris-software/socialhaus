import './App.css'
import {Navbar} from "./components/navbar/index.jsx";
import {Hero} from "./components/hero/index.jsx";
import {About} from "./components/about/index.jsx";
import {Features} from "./components/features/index.jsx";
import {Portfolio} from "./components/portfolio/index.jsx";
import {Clients} from "./components/clients/index.jsx";
import {Footer} from "./components/footer/index.jsx";
import {Contact} from "./components/contact/index.jsx";
import {Choose} from "./components/choose/index.jsx";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Portfolio />
      <Clients />
      <Choose/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
