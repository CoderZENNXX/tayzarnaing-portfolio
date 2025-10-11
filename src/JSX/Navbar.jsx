import "../CSS/App.css"
import { Link } from "react-router-dom"

function Navbar() {
    
    return (
        <div className="nav">
            <Link to="/">
                <button className="home-btn nav-btn">
                    Home
                </button>
            </Link>
            <Link to="/about">
                <button className="about-btn nav-btn">
                    About
                </button>
            </Link>
            <Link to="/mystory">
                <button className="my-story-btn nav-btn">
                    My Story
                </button>
            </Link>
            <Link to="/achievements">
                <button className="achievements-btn nav-btn">
                    Achievements
                </button>
            </Link>
            <Link to="/contact">
                <button className="contact-btn nav-btn">
                    Contact
                </button>
            </Link>
        </div>
    )
}

export default Navbar