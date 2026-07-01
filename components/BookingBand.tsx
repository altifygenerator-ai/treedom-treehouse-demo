import { bookingUrl, facebookUrl, pageCopy } from "@/data/site";

export default function BookingBand() {
  return (
    <section className="booking-band shell">
      <div>
        <p className="eyebrow">Book Treedom</p>
        <h2>{pageCopy.bookTitle}</h2>
        <p>{pageCopy.bookText}</p>
      </div>
      <div className="booking-actions">
        <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">
          Check dates on Airbnb
        </a>
        <a className="button button-soft" href={facebookUrl} target="_blank" rel="noreferrer">
          Visit Facebook
        </a>
      </div>
    </section>
  );
}
