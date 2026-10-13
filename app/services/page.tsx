
const services = [
  {
    title: "Web Development",
    description:
      "Modern websites built with React and Next.js.",
  },
  {
    title: "UI/UX Design",
    description:
      "Simple, intuitive, and user-friendly interfaces.",
  },
  {
    title: "Responsive Design",
    description:
      "Websites that adapt to mobile, tablet, and desktop.",
  },
  {
    title: "API Integration",
    description:
      "Connect frontend applications with REST APIs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <section className="content-section">
        <p className="subtitle">WHAT WE DO</p>
        <h1>Our Services</h1>

        <p className="description">
          Explore the solutions we offer to help you
          build and improve your digital presence.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
