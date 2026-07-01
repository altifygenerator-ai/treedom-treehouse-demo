import AmenityHighlights from "@/components/AmenityHighlights";
import SectionHeading from "@/components/SectionHeading";
import { houseRules, outdoorExperiences, photos, sleep } from "@/data/site";

export default function StayDetail() {
  return (
    <div className="stay-detail">
      <section className="section shell detail-grid">
        <div className="detail-card detail-card-dark">
          <p className="eyebrow">Sleeping spaces</p>
          <h2>Room for up to 5 guests.</h2>
          <div className="sleep-list">
            {sleep.map((item) => (
              <article key={item.room}>
                <strong>{item.room}</strong>
                <span>{item.beds}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="detail-photo">
          <img src={photos[6].src} alt={photos[6].alt} />
        </div>
      </section>

      <section className="section shell">
        <SectionHeading
          eyebrow="Amenities"
          title="Packed with the comforts guests look for in a cabin stay."
          text="Treedom keeps the essentials easy, from coffee and kitchen supplies to Wi-Fi, parking, entertainment, and outdoor spaces made for gathering."
        />
        <AmenityHighlights />
      </section>

      <section className="section shell detail-grid detail-grid-flipped">
        <div className="detail-photo">
          <img src={photos[4].src} alt={photos[4].alt} />
        </div>
        <div className="detail-card">
          <p className="eyebrow">Outdoor space</p>
          <h2>Walk the land, play outside, and come back to the deck.</h2>
          <div className="mini-list">
            {outdoorExperiences.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell rules-card">
        <SectionHeading
          eyebrow="Good to know"
          title="Simple stay details before you book."
          text="Dates, rates, and full booking details are handled through Airbnb."
        />
        <div className="rule-list">
          {houseRules.map((rule) => (
            <span key={rule}>{rule}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
