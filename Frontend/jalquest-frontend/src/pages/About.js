import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌊 About JalQuest</h1>
      <p style={styles.paragraph}>
        JalQuest is a mission-driven platform  that promotes **water conservation** through task-based rewards, real-life engagement, and tech-powered tracking. Users complete simple yet impactful challenges like fixing a leak 🛠️ or harvesting rainwater 🌧️ — and earn **Boonds** 💎 as recognition for their contribution to saving our planet! 🌍
      </p>

      <h2 style={styles.subheading}>🛠️ Tech Stack</h2>
      <ul style={styles.list}>
        <li>⚛️ <strong>Frontend:</strong> React.js, Axios, React-Webcam</li>
        <li>☕ <strong>Backend:</strong> Spring Boot (Java), Spring Data JPA, Hibernate</li>
        <li>🛢️ <strong>Database:</strong> PostgreSQL (Hosted on Neon.tech)</li>
        <li>🚀 <strong>Deployment:</strong> 
          <ul>
            <li>Frontend: Netlify</li>
            <li>Backend: Render</li>
            <li>Database: Neon</li>
          </ul>
        </li>
      </ul>

      <h2 style={styles.subheading}>💡 Why JalQuest?</h2>
      <p style={styles.paragraph}>
        India 🇮🇳 and many parts of the world 🌏 face an increasing **water crisis**. JalQuest is more than just a project — it’s a 🌱 movement. By turning conservation into a **quest**, it inspires people to act responsibly and joyfully. With each completed task 📸 and every Boond earned 💠, users become heroes in their own sustainability story!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f4f4f9",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: "20px",
    textAlign: "center",
  },
  subheading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#0077b6",
    marginTop: "30px",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "20px",
  },
  list: {
    fontSize: "16px",
    color: "#555",
    paddingLeft: "20px",
    listStyleType: "disc",
  },
};

export default About;
