import { nearby, photos } from "@/data/site";

export default function ExploreSection() {
  return (
    <section className="section shell explore-layout">
      <div className="explore-photo">
        <img src={photos[0].src} alt={photos[0].alt} />
      </div>
      <div>
        <p className="eyebrow">Explore nearby</p>
        <h2>Stay in the trees with Jonesborough close by.</h2>
        <p>
          Spend the morning around the property, head into town for part of the day, or keep the trip simple with golf,
          mountain views, hot tub time, and a quiet night by the firepit.
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
    </section>
  );
}
