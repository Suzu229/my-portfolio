// Filename: Home.jsx
// Author: Ken Susuzurimi.
// Student ID: 301459563
// Date: 2025-05-31
// Description: This component displays the Home page, including a welcome message,
// a mission statement, and navigation buttons to other sections of the site.

import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{
      padding: "3rem",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      {/* Welcome message */}
      <h1>Welcome to My Portfolio!</h1>
      
      {/* Short introduction */}
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        I'm Ken, a passionate software development student focused on building clean,
        effective, and creative applications.
      </p>

      {/* Mission Statement section */}
      <h2 style={{ marginTop: "2rem", fontSize: "1.5rem" }}>My Mission</h2>
      <p>
        To continuously grow as a developer by building meaningful projects that solve real problems,  
        and to challenge myself creatively in the world of software and game development.
      </p>

      {/* Navigation buttons to key pages */}
      <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/about">
          <button>About Me</button>
        </Link>
        <Link to="/projects">
          <button>My Projects</button>
        </Link>
        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
