import BookingBand from "@/components/BookingBand";
import ExploreSection from "@/components/ExploreSection";
import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Reviews from "@/components/Reviews";
import SectionHeading from "@/components/SectionHeading";
import { outdoorExperiences, pageCopy, photos, site, stayHighlights } from "@/data/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.name,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jonesborough",
      addressRegion: "TN",
      addressCountry: "US",
    },
    image: photos.map((photo) => photo.src),
    amenityFeature: [
      "Hot tub",
      "Wi-Fi",
      "Free parking",
      "Kitchen",
      "Firepit",
      "Disc golf course",
      "Arcade system",
    ].map((feature) => ({ "@type": "LocationFeatureSpecification", name: feature, value: true })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "4",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <IntroSection />
      <section className="section shell">
        <SectionHeading
          eyebrow="Inside and outside"
          title="Built for hot tub nights, arcade breaks, firepit time, and exploring."
          text="Treedom gives guests a mix of treehouse character, useful comforts, and outdoor activities without leaving the property."
          align="center"
        />
        <div className="feature-row">
          {[...stayHighlights, ...outdoorExperiences].slice(0, 3).map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section shell gallery-preview">
        <SectionHeading eyebrow="Gallery" title={pageCopy.galleryTitle} text={pageCopy.galleryText} />
        <GalleryGrid />
      </section>
      <ExploreSection />
      <Reviews />
      <BookingBand />
    </>
  );
}
