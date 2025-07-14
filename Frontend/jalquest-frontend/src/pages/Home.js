import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Ensure you have a CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>
          Welcome to JalQuest 🌊
        </h1>
        <p>Gamified Water Conservation Platform</p>
        <Link to="/tasks" className="task-button">Go to Tasks</Link>
      <div className="tech-stack-scroll-container">
        <div className="tech-stack-title">Tech Stack Used</div>
        <div className="tech-stack-scroll">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="SpringBoot" title="SpringBoot" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" title="Java" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" title="SQL" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" title="Figma" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" title="Postman" />
          {/* Duplicate icons for seamless scroll */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="SpringBoot" title="SpringBoot" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" title="Java" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" title="SQL" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" title="Figma" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" title="Postman" />
        </div>
      </div>
      </header>

      <footer className="home-footer">
        <p>&copy; 2024 JalQuest. Developed by Devansh Srivastava.</p>
        <p><span className="badge">Winner of Hack X NIET</span></p>
        <p className="hackathon-project-label">Hackathon Project</p>
        <p style={{marginTop: "10px", fontSize: "16px", fontWeight: "600", color: "#004080", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"}}>
          <span role="img" aria-label="email" style={{fontSize: "20px"}}>✉️</span>
          <a href="mailto:messagedevansh@gmail.com" style={{color: "#e3ebf2ff", textDecoration: "none", fontWeight: "bold", borderBottom: "2px solid transparent", transition: "border-bottom-color 0.3s"}}>
            messagedevansh@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
