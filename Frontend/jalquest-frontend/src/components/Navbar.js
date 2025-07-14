import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/tasks" style={styles.link}>Tasks</Link>
      <Link to="/leaderboard" style={styles.link}>Leaderboard</Link>
      <Link to="/redeem" style={styles.link}>Redeem</Link>
      <Link to="/about" style={styles.aboutLink}>About JalQuest</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#007bff",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  aboutLink: {
    color: "#cce5ff",
    fontWeight: "bold",
    textDecoration: "underline",
    paddingBottom: "2px",
    transition: "color 0.3s",
  },
};

export default Navbar;
