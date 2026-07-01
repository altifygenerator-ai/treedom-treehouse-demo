import SectionHeading from "@/components/SectionHeading";
import { pageCopy, photos, stayHighlights } from "@/data/site";

export default function IntroSection() {
  return (
    <section className="section shell intro-grid">
      <div>
        <SectionHeading title={pageCopy.introTitle} text={pageCopy.introText} />
        <div className="highlight-list">
          {stayHighlights.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="stacked-photos">
        <img src={photos[2].src} alt={photos[2].alt} />
        <img src={photos[5].src} alt={photos[5].alt} />
      </div>
    </section>
  );
}
