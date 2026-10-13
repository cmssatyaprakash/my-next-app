
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page home-page">
      <section className="hero">
        <p className="subtitle">WELCOME TO MY WEBSITE</p>

        <h1>
          Build Something <span>Amazing</span>
        </h1>

        <p className="description">
          We create modern, responsive, and user-friendly
          web experiences to help your business grow.
        </p>

        <div className="hero-buttons">
          <Link href="/services" className="btn-primary">
            Explore Services
          </Link>

          <Link href="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Modern Design</h3>
          <p>Clean and attractive interfaces for your website.</p>
        </div>

        <div className="feature-card">
          <h3>Responsive Layout</h3>
          <p>Works smoothly on desktops, tablets, and phones.</p>
        </div>

        <div className="feature-card">
          <h3>Quality Code</h3>
          <p>Maintainable and reusable frontend components.</p>
        </div>
      </section>
    </main>
  );
}
