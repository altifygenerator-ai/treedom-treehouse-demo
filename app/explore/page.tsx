import BookingBand from "@/components/BookingBand";
import ExploreSection from "@/components/ExploreSection";
import ExperienceGrid from "@/components/ExperienceGrid";
import SectionHeading from "@/components/SectionHeading";
import { nearby, outdoorExperiences, photos } from "@/data/site";

export const metadata = {
  title: "Explore",
  description: "Explore the Treedom property, nearby historic downtown Jonesborough, golf, mountain views, and outdoor spaces.",
};

export default function ExplorePage() {
  return (
    <>
      <section className="page-hero shell">
        <div>
          <p className="eyebrow">Explore</p>
          <h1>Stay tucked away while Jonesborough and outdoor fun stay close.</h1>
          <p>
            Treedom sits on a 27-acre compound with access to 20+ acres of hills, grasslands, a stream,
            a pond, disc golf, wooded space, and quiet places to slow down.
          </p>
        </div>
        <img src={photos[4].src} alt={photos[4].alt} />
      </section>
      <section className="section shell">
        <SectionHeading
          eyebrow="On the property"
          title="Explore outside without leaving the stay."
          text="Walk the land, play disc golf, gather around the firepit, or enjoy a quiet evening back at the treehouse."
        />
        <ExperienceGrid items={outdoorExperiences} />
      </section>
      <ExploreSection />
      <section className="section shell">
        <SectionHeading eyebrow="Close by" title="Nearby stops for your trip." />
        <div className="nearby-card-grid">
          {nearby.map((place) => (
            <article key={place.title}>
              <span>{place.time}</span>
              <h3>{place.title}</h3>
              <p>{place.text}</p>
            </article>
          ))}
        </div>
      </section>
      <BookingBand />
    </>
  );
}
