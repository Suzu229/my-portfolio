// Filename: About.jsx
// Author: Ken Suzurimi.
// Student ID: 301459563
// Date: 2025-05-31
// Description: This component displays the About Me page, including a photo,
// a brief self-introduction, and a link to download the user's resume (PDF).

function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>About Me</h1>

      {/* Profile image */}
      <img
        src="/Photo.jpg"
        alt="My portrait"
        style={{ width: '200px', borderRadius: '50%', marginTop: '1rem' }}
      />

      {/* Short introduction */}
      <p style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
        Hello! My name is Ken. I'm a software development student at Centennial College with a passion
        for building web and desktop applications. I also enjoy working on fun game projects and learning new technologies.
      </p>

      {/* Resume download button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '0.8rem 1.6rem',
          backgroundColor: '#646cff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        Download My Resume
      </a>
    </div>
  );
}

export default About;
