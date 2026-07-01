import { amenities } from "@/data/site";

export default function AmenityHighlights() {
  return (
    <div className="amenity-list">
      {amenities.map((amenity) => (
        <span key={amenity}>{amenity}</span>
      ))}
    </div>
  );
}
