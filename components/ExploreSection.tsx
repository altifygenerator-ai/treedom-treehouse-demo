import { nearby, photos } from "@/data/site";

export default function ExploreSection() {
  return (
    <section className="section shell explore-layout">
      <div className="explore-copy">
        <p className="eyebrow">Explore nearby</p>
        <h2>Stay tucked away with Jonesborough close by.</h2>
        <p>
          Start slow at the treehouse, head into town when you want to wander, then come back for disc golf,
          a firepit evening, arcade games, and a quiet soak under the trees.
        </p>
        <div className="nearby-list">
          {nearby.map((place) => (
            <article key={place.title}>
              <span>{place.time}</span>
              <h3>{place.title}</h3>
              <p>{place.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="explore-photo-stack">
        <img src={photos[0].src} alt={photos[0].alt} />
        <img src={photos[2].src} alt={photos[2].alt} />
      </div>
    </section>
  );
}
