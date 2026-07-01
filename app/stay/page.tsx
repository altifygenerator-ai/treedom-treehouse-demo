import BookingBand from "@/components/BookingBand";
import StayDetail from "@/components/StayDetail";
import SectionHeading from "@/components/SectionHeading";
import { photos, site } from "@/data/site";

export const metadata = {
  title: "The Stay",
  description:
    "Inside Treedom treehouse in Jonesborough, Tennessee, with sleeping spaces, amenities, outdoor areas, and booking details.",
};

export default function StayPage() {
  return (
    <>
      <section className="page-hero shell">
        <div>
          <p className="eyebrow">The stay</p>
          <h1>Sleep in the trees, relax on the deck, and keep the whole trip easy.</h1>
          <p>
            Treedom sleeps up to 5 guests with a king bedroom, a second bedroom with twin sleeping space,
            a private hot tub, indoor entertainment, kitchen supplies, coffee, parking, and self check-in.
          </p>
        </div>
        <img src={photos[1].src} alt={photos[1].alt} />
      </section>
      <section className="section shell">
        <SectionHeading
          eyebrow={site.location}
          title="A custom treehouse with everyday comforts built in."
          text="Guests can enjoy the character of a one-of-a-kind treehouse without giving up Wi-Fi, coffee, kitchen basics, clean sleeping spaces, and simple arrival details."
        />
      </section>
      <StayDetail />
      <BookingBand />
    </>
  );
}
