import BookingBand from "@/components/BookingBand";
import GalleryGrid from "@/components/GalleryGrid";
import { pageCopy, photos } from "@/data/site";

export const metadata = {
  title: "Gallery",
  description: "Photos of Treedom treehouse, deck, hot tub, arcade, sleeping spaces, and wooded outdoor details.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero page-hero-centered shell">
        <div>
          <p className="eyebrow">Gallery</p>
          <h1>{pageCopy.galleryTitle}</h1>
          <p>{pageCopy.galleryText}</p>
        </div>
      </section>
      <section className="section shell full-gallery">
        <GalleryGrid />
      </section>
      <section className="section shell image-band">
        <img src={photos[2].src} alt={photos[2].alt} />
        <div>
          <p className="eyebrow">Deck time</p>
          <h2>Hot tub, trees, and room to slow down.</h2>
          <p>
            Soak on the deck, listen to the woods, and enjoy a stay that makes the outside part of the whole trip.
          </p>
        </div>
      </section>
      <BookingBand />
    </>
  );
}
