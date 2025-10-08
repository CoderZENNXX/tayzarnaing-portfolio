import "../CSS/App.css"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App