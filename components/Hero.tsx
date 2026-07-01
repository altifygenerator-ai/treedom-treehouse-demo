import { bookingUrl, facebookUrl, heroStats, quickFacts, site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero-full">
      <img className="hero-bg" src={site.heroImage} alt="Treedom treehouse tucked into the woods" />
      <div className="hero-overlay" />
      <div className="hero-shell shell">
        <div className="hero-copy">
          <p className="eyebrow">{site.eyebrow}</p>
          <h1>{site.title}</h1>
          <p className="hero-lede">{site.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">
              Check availability
            </a>
            <a className="button button-ghost" href={facebookUrl} target="_blank" rel="noreferrer">
              Message Treedom
            </a>
          </div>
        </div>

        <aside className="hero-booking-card" aria-label="Treehouse booking highlights">
          <span className="card-kicker">Treehouse stay</span>
          <h2>Hot tub nights, arcade breaks, and room to roam.</h2>
          <div className="quick-facts" aria-label="Stay details">
            {quickFacts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
          <a className="booking-card-link" href={bookingUrl} target="_blank" rel="noreferrer">
            View Airbnb listing <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>

      <div className="trust-dock shell" aria-label="Treedom highlights">
        {heroStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
