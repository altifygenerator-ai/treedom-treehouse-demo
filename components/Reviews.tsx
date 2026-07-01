import { hostDetails, ratings } from "@/data/site";

export default function Reviews() {
  return (
    <section className="section shell reviews-grid">
      <div className="review-panel">
        <p className="eyebrow">Guest ratings</p>
        <h2>5.0 overall from Airbnb guests.</h2>
        <p>
          Guests have rated Treedom 5.0 overall, with 5.0 ratings shown for cleanliness, accuracy,
          check-in, communication, location, and value.
        </p>
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
          Lee is listed as a Superhost with years of hosting experience, a strong guest rating, and quick response times.
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
