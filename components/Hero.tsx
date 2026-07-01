import { bookingUrl, facebookUrl, heroStats, quickFacts, site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow">{site.eyebrow}</p>
        <h1>{site.title}</h1>
        <p className="hero-lede">{site.description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">
            Check availability
          </a>
          <a className="button button-soft" href={facebookUrl} target="_blank" rel="noreferrer">
            Message on Facebook
          </a>
        </div>
        <div className="quick-facts" aria-label="Stay details">
          {quickFacts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
      </div>
      <div className="hero-media" aria-label="Treedom treehouse photo collage">
        <div className="hero-frame hero-frame-main">
          <img src={site.heroImage} alt="Treedom custom treehouse raised among the trees" />
        </div>
        <div className="hero-card">
          <span>Built by The Treehouse Guys</span>
          <strong>Custom treehouse stay</strong>
        </div>
        <div className="patriot-ribbon" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="stat-strip">
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
