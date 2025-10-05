import "../CSS/Home.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <div className="profile">
        <div className="profile-right">
          <img src="/placeholder.png" alt="profile-pic" className="profile-pic" />
          <h1 className="professions">Web Developer<br />Educational Content Creator<br />Academic Pursuer</h1>
        </div>

        <div className="profile-left">
          <h1 className="introduction">Hi, it's <br /><span className="name">Tayzar Naing</span></h1>
          <Link to="/contact"><button className="contact-me-btn">Contact Me</button></Link>
        </div>
      </div>

      <div className="professions-text-container">
        <h2 className="professions-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sunt tempore cum minus officiis nesciunt numquam incidunt, perferendis ipsa architecto non quasi quis commodi ab eveniet totam iusto esse quas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolorum obcaecati tempora sapiente totam! Deleniti vel modi, quod officia sint ipsam. Tempore recusandae facere ratione ullam ipsum possimus voluptates dolorum?</h2>
      </div>
    </div>
  )
}

export default Home