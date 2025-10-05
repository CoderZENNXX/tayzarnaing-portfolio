import "../CSS/App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faGithub, faTiktok } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <div className="footer">
            <h1 className="footer-name">Tayzar Naing</h1>
            <div className="footer-icon-container">
                <a className="footer-link" href="https://github.com/CoderZENNXX" target="_blank"><FontAwesomeIcon className="footer-github-icon footer-icon" icon={faGithub} /></a>
                <a className="footer-link" href="https://www.facebook.com/fbZENNXX" target="_blank"><FontAwesomeIcon className="footer-facebook-icon footer-icon" icon={faFacebook} /></a>
                <a className="footer-link" href="https://www.instagram.com/insta_zennxx" target="_blank"><FontAwesomeIcon className="footer-instagram-icon footer-icon" icon={faInstagram} /></a>
                <a className="footer-link" href="https://www.tiktok.com/@official.free.insight" target="_blank"><FontAwesomeIcon className="footer-tiktok-icon footer-icon" icon={faTiktok} /></a>
            </div>
        </div>
    )
}

export default Footer