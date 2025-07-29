// Filename: Navbar.jsx
// Author: Ken Suzurimi.
// Student ID: 301459563
// Date: 2025-05-31
// Description: This component renders the top navigation bar with logo and page links.

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ccc'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Custom logo image */}
        <img
          src="/logo.jpg"
          alt="Logo"
          style={{ height: '40px', display: 'block' }}
        />

        {/* Navigation menu */}
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '2rem',
          margin: 0,
          padding: 0,
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
