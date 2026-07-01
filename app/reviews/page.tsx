import BookingBand from "@/components/BookingBand";
import Reviews from "@/components/Reviews";
import SectionHeading from "@/components/SectionHeading";
import { pageCopy, photos } from "@/data/site";

export const metadata = {
  title: "Reviews",
  description: "Guest ratings and host details for Treedom treehouse in Jonesborough, Tennessee.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero shell">
        <div>
          <p className="eyebrow">Reviews</p>
          <h1>{pageCopy.reviewsTitle}</h1>
          <p>{pageCopy.reviewsText}</p>
        </div>
        <img src={photos[0].src} alt={photos[0].alt} />
      </section>
      <Reviews />
      <section className="section shell host-note">
        <SectionHeading
          eyebrow="Hosted stay"
          title="A secluded treehouse with hosts nearby if guests need them."
          text="The owners live onsite on the 27-acre compound, while the treehouse remains tucked away for a private stay. Guests may also ask about farm moments, mountain views, or local things to do."
        />
      </section>
      <BookingBand />
    </>
  );
}
