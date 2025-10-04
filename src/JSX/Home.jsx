import { useState } from 'react';
import '../CSS/Home.css';

export default function Portfolio() {
  const [activePage, setActivePage] = useState('home');

  const showPage = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <a 
              href="#home" 
              className={activePage === 'home' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); showPage('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activePage === 'about' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); showPage('about'); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#story" 
              className={activePage === 'story' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); showPage('story'); }}
            >
              My Story
            </a>
          </li>
          <li>
            <a 
              href="#achievements" 
              className={activePage === 'achievements' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); showPage('achievements'); }}
            >
              Achievements
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activePage === 'contact' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); showPage('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        {activePage === 'home' && (
          <div className="page">
            <div className="hero">
              <img src="https://via.placeholder.com/200" alt="Profile" className="profile-img" />
              <h1>Tayzar Naing</h1>
              <p className="tagline">Web Developer | Educational Content Creator | Problem Solver</p>
              <p className="hero-description">
                Crafting elegant solutions to complex problems with clean code and modern technologies.<br />
                Maintaining the spark of energy in youth by creating educational and knowledgeble content on social media.
              </p>
              <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); showPage('contact'); }}>
                Get In Touch
              </a>
            </div>

            <div className="content-section">
              <h2>What I Do</h2>
              <p className="section-text">
                I specialize in building scalable web applications and designing intuitive user interfaces. With expertise in modern frameworks and best practices, 
                I turn ideas into reality through clean, maintainable code.
                <br />
                I'm the founder of <i><strong>Free Insight</strong></i>. A free educational page on <i><strong>TikTok</strong></i>. With content that keeps students, teachers and adults wise.
              </p>
            </div>
          </div>
        )}

        {activePage === 'about' && (
          <div className="page">
            <div className="content-section">
              <h2>About Me</h2>
              <div className="about-content">
                <img src="https://via.placeholder.com/250" alt="About" className="about-img" />
                <div className="about-text">
                  <p className="section-text">
                    I'm a passionate developer with over 5 years of experience in creating web applications 
                    that make a difference. My journey in tech started with a curiosity about how things work, 
                    and it has evolved into a career dedicated to building innovative solutions.
                  </p>
                  <p className="section-text">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source researchs, 
                    or sharing knowledge for the community. I believe in continuous learning and 
                    staying at the forefront of not only technological, but the advancements of everything.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Skills & Expertise</h2>
              <div className="skills-container">
                <span className="skill-badge">Python</span>
                <span className="skill-badge">SQL</span>
                <span className="skill-badge">Java</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">React</span>
                <span className="skill-badge">Node.js</span>
              </div>
            </div>
          </div>
        )}

        {activePage === 'story' && (
          <div className="page">
            <div className="content-section">
              <h2>My Developer Journey</h2>
              <div className="story-section">
                <p className="story-text">
                  My journey into the world of development began in 2020 when I wrote my first discoverd <i><strong>Scratch</strong></i>. 
                  What started as curiosity quickly became a passion. I was fascinated by the power to create 
                  something from nothing but logic and creativity.
                </p>
                <p className="story-text">
                  Over the years, I've had the privilege of working on diverse projects. Each experience 
                  has shaped my approach to problem-solving and reinforced my belief in the importance of clean, 
                  maintainable code.
                </p>
              </div>
            </div>

            <div className="content-section">
              <h2>Developer's Timeline</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <h3 className="timeline-title">2024 - Present</h3>
                  <p className="timeline-desc">Learning React And Back-End</p>
                </div>
                <div className="timeline-item">
                  <h3 className="timeline-title">2024</h3>
                  <p className="timeline-desc">Won Silver Medal On <i><strong>The International STEM Olympiad</strong></i></p>
                </div>
                <div className="timeline-item">
                  <h3 className="timeline-title">2022 - 2024</h3>
                  <p className="timeline-desc">Web Development: HTML, CSS, JavaScript And More</p>
                </div>
                <div className="timeline-item">
                  <h3 className="timeline-title">2021 - 2022</h3>
                  <p className="timeline-desc">Mastered Python.<br/>Learned Java & SQL</p>
                </div>
                <div className="timeline-item">
                  <h3 className="timeline-title">2020</h3>
                  <p className="timeline-desc">Completed The <i><strong>Scratch</strong></i> Course</p>
                </div>
                <div className="timeline-item">
                  <h3 className="timeline-title">2019</h3>
                  <p className="timeline-desc">Started Coding Journey</p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>My Academics & Content Creating Journey</h2>
              <div className="story-section">
                <p className="story-text">
                  My journey into academia began in 2024 when I decided to persue a life of education with the dream of reaching <i><strong>the top global universities</strong></i>. 
                  It might have started weak but grew strong. I started learning in school, contributing to real-world researchs on many different sites and tutoring fellow students. 
                </p>
                <p className="story-text">
                  Over a couple month of this journey, I realized that all this knowledge wasn't just for me alone. Everyone deserves it.
                  In 2025, I created an educational page on TikTok called <i><strong>Free Insight (<a href="https://www.tiktok.com/@official.free.insight" target="_blank">official.free.insight</a>)</strong></i>.
                  Creating every sorts of educational content.
                </p>
              </div>
            </div>

            <div className="content-section">
              <h2>Developer's Timeline</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <h3 className="timeline-title">2025</h3>
                  <p className="timeline-desc">Contributed over 8 hours on 6 different researchs on <a href="https://www.zooniverse.org"><i><strong>Zooniverse.org</strong></i></a></p>
                </div>
                <div className="timeline-item">
                  <h3 className="timeline-title">2025</h3>
                  <p className="timeline-desc">Founded <i><strong>Free Insight</strong></i></p>
                </div>
                <div className="timeline-item">
                  <h3 className="timeline-title">2025</h3>
                  <p className="timeline-desc">Completed The <i><strong>UpCheive National Tutor</strong></i> Course</p>
                </div>
                <div className="timeline-item">
                  <h3 className="timeline-title">2024</h3>
                  <p className="timeline-desc">Started Academics Journey</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'achievements' && (
          <div className="page">
            <div className="content-section">
              <h2>Certifications & Achievements</h2>
              <div className="achievements-grid">
                <div className="achievement-card">
                  <img src="https://via.placeholder.com/400x200" alt="Certificate" className="certificate-img" />
                  <h3 className="achievement-title">AWS Certified Solutions Architect</h3>
                  <p className="achievement-desc">Professional level certification demonstrating cloud architecture expertise</p>
                  <p className="achievement-date">Rewarded: 2024</p>
                </div>
                <div className="achievement-card">
                  <img src="https://via.placeholder.com/400x200" alt="Certificate" className="certificate-img" />
                  <h3 className="achievement-title">React Advanced Certification</h3>
                  <p className="achievement-desc">Advanced proficiency in React and modern frontend development</p>
                  <p className="achievement-date">Issued: 2023</p>
                </div>
                <div className="achievement-card">
                  <img src="https://via.placeholder.com/400x200" alt="Certificate" className="certificate-img" />
                  <h3 className="achievement-title">Full Stack Web Developer</h3>
                  <p className="achievement-desc">Comprehensive certification in full stack development</p>
                  <p className="achievement-date">Issued: 2022</p>
                </div>
                <div className="achievement-card">
                  <img src="https://via.placeholder.com/400x200" alt="Certificate" className="certificate-img" />
                  <h3 className="achievement-title">Best Innovation Award</h3>
                  <p className="achievement-desc">Company award for developing innovative solutions</p>
                  <p className="achievement-date">Received: 2023</p>
                </div>
                <div className="achievement-card">
                  <img src="https://via.placeholder.com/400x200" alt="Certificate" className="certificate-img" />
                  <h3 className="achievement-title">Open Source Contributor</h3>
                  <p className="achievement-desc">Active contributor to major open source projects</p>
                  <p className="achievement-date">2020 - Present</p>
                </div>
                <div className="achievement-card">
                  <img src="https://via.placeholder.com/400x200" alt="Certificate" className="certificate-img" />
                  <h3 className="achievement-title">Tech Speaker</h3>
                  <p className="achievement-desc">Speaker at various tech conferences and meetups</p>
                  <p className="achievement-date">2021 - Present</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Page */}
        {activePage === 'contact' && (
          <div className="page">
            <div className="content-section">
              <h2>Get In Touch</h2>
              <p className="section-text contact-intro">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Demo)'); }}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>

              <div className="social-links">
                <a href="#" className="social-link" onClick={(e) => e.preventDefault()}>Li</a>
                <a href="#" className="social-link" onClick={(e) => e.preventDefault()}>Gh</a>
                <a href="#" className="social-link" onClick={(e) => e.preventDefault()}>Tw</a>
                <a href="#" className="social-link" onClick={(e) => e.preventDefault()}>@</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}