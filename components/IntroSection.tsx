import SectionHeading from "@/components/SectionHeading";
import { pageCopy, photos, stayHighlights } from "@/data/site";

export default function IntroSection() {
  return (
    <section className="section shell intro-layout">
      <div className="intro-copy-card">
        <SectionHeading eyebrow="The treehouse" title={pageCopy.introTitle} text={pageCopy.introText} />
        <div className="highlight-list">
          {stayHighlights.map((item) => (
            <article key={item.title}>
              <span aria-hidden="true">✦</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="treehouse-mosaic">
        <img src={photos[1].src} alt={photos[1].alt} />
        <img src={photos[4].src} alt={photos[4].alt} />
        <div className="mosaic-note">
          <strong>Custom-built</strong>
          <span>by The Treehouse Guys</span>
        </div>
      </div>
    </section>
  );
}
