import "../CSS/Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {

    return (
        <div className="contact">
            <div className="contact-text">
                <h1 className="contact-title">Get In Touch</h1>
                <h2 className="contact-description">
                    Feel free to reach out to me via social media or email. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you’re looking to collaborate on something innovative, need help bringing your concepts to life, or simply want to connect and exchange insights, I’d love to hear from you. Let’s explore how we can create something meaningful together, push boundaries, and turn great ideas into reality. Don’t hesitate to get in touch — every conversation has the potential to spark something incredible.
                </h2>
                <div className="contact-icon-container">
                    <a className="contact-link" href="https://www.facebook.com/fbZENNXX" target="_blank"><FontAwesomeIcon className="contact-facebook-icon contact-icon" icon={faFacebook} /></a>
                    <a className="contact-link" href="https://www.instagram.com/insta_zennxx" target="_blank"><FontAwesomeIcon className="contact-instagram-icon contact-icon" icon={faInstagram} /></a>
                    <a className="contact-link" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmzjpqfccmgjTRdwDXHSLvrwXFJrSzDbdNRcnFfLGrrQlWVkdpvMnfJthPzJPwrzXLDnGc" target="_blank"><FontAwesomeIcon className="contact-gmail-icon contact-icon" icon={faEnvelope} /></a>
                </div>
            </div>
            <div className="contact-image-container">
                <img src="/placeholder.png" className="contact-tayzar-naing-image contact-image" />
                <img src="/free-insight-tiktok-page.jpg" className="contact-free-insight-image contact-image" />
                <img src="/coderzennxx-github.png" className="contact-github-image contact-image" />
            </div>
        </div>
    )
}