import { hostDetails, pageCopy, ratings } from "@/data/site";

export default function Reviews() {
  return (
    <section className="section shell reviews-wrap">
      <div className="review-panel rating-panel">
        <p className="eyebrow">Guest ratings</p>
        <h2>{pageCopy.reviewsTitle}</h2>
        <p>{pageCopy.reviewsText}</p>
        <div className="rating-grid">
          {ratings.map((rating) => (
            <div key={rating.label}>
              <strong>{rating.value}</strong>
              <span>{rating.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="review-panel host-panel">
        <p className="eyebrow">Your host</p>
        <h2>Hosted by Lee.</h2>
        <p>
          Guests can settle in with self check-in, quick host communication, and local help nearby when they need it.
        </p>
        <div className="host-list">
          {hostDetails.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
