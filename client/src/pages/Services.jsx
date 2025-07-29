// Filename: Services.jsx
// Author: Ken Suzurimi.
// Student ID: 301459563
// Date: 2025-05-31
// Description: This component displays the Services page, showing a list of services
// with simple emoji icons and brief descriptions.

function Services() {
  // List of services with emoji and description
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Building responsive websites using HTML, CSS, JavaScript, and React.",
    },
    {
      icon: "🖥️",
      title: "Desktop Applications",
      description: "Creating efficient Windows desktop apps using C# and .NET.",
    },
    {
      icon: "🎮",
      title: "Game Prototyping",
      description: "Developing fun and creative games using Unity and C# scripting.",
    },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>My Services</h1>

      {/* Display list of services */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1.5rem',
            width: '250px'
          }}>
            <div style={{ fontSize: '2.5rem' }}>{service.icon}</div>
            <h2 style={{ marginTop: '1rem' }}>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
