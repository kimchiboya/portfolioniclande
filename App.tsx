import './App.css'

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo"></div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About Me
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="content-wrapper">
          <div className="text-section">
            <div className="name-container">
              <h1 className="name">Clande Joey</h1>
              <h1 className="name">N. Lemosnero</h1>
            </div>
            <p className="title">UI/UX Designer & Website Developer</p>
            
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:your.email@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>

            <button className="get-started-btn">
              Get Started
            </button>
          </div>
          <div className="profile-section">
            <img 
              src="/port.jpg" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
      
      <div id="about" className="about-section">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm a passionate UI/UX Designer and Website Developer with a keen eye for creating 
            beautiful, functional, and user-centered digital experiences. With expertise in 
            modern web technologies and design principles, I strive to build solutions that 
            make a difference.
          </p>
          <div className="skills-grid">
            <div className="skill-card">
              <i className="fab fa-react skill-icon"></i>
              <h3>React</h3>
              <p>Building modern and interactive web applications with React's component-based architecture.</p>
            </div>
            <div className="skill-card">
              <i className="fab fa-js-square skill-icon"></i>
              <h3>TypeScript</h3>
              <p>Developing type-safe applications with enhanced code quality and maintainability.</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-paint-brush skill-icon"></i>
              <h3>UI/UX Design</h3>
              <p>Creating intuitive and visually appealing interfaces focused on user experience.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div id="projects" className="projects-section">
        <div className="projects-content">
          <h2 className="projects-title">Recent Projects</h2>
          <p className="projects-text">
            Here are some of my recent works that showcase my skills and experience in web development and design.
          </p>
          
          <div className="projects-grid">
            <div className="project-card">
              <img src="/e-com.png" alt="React Project" className="project-image" />
              <div className="project-content">
                <h3>VintageVault E-commerce</h3>
                <p>A full-featured online shopping platform built with React and Redux. Features include product filtering, cart management, and secure checkout.</p>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src="/react.png" alt="EnergyTrack Mobile App" className="project-image" />
              <div className="project-content">
                <h3>EnergyTrack Mobile App</h3>
                <p>A TypeScript-powered task management app with a modern UI, created to track you dailyt energy consumption of energy.</p>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src="/ui.png" alt="UI/UX Project" className="project-image" />
              <div className="project-content">
                <h3>EnergyTrack Prototype</h3>
                <p>A modern UI/UX design for the EnergyTrack mobile app. Features an intuitive interface for tracking your daily energy consumption.</p>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <div className="contact-grid">
            <div className="contact-card">
              <i className="fas fa-envelope contact-icon"></i>
              <h3>Email</h3>
              <a href="clandej.lemosnero@gmail.com">clandej.lemosnero@gmail.com</a>
            </div>
            
            <div className="contact-card">
              <i className="fab fa-linkedin contact-icon"></i>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/clandej-lemosnero-60111a28a" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/clandej-lemosnero
              </a>
            </div>
            
            <div className="contact-card">
              <i className="fab fa-github contact-icon"></i>
              <h3>GitHub</h3>
              <a href="https://github.com/clandej" target="_blank" rel="noopener noreferrer">
                github.com/clandej
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send me a message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App