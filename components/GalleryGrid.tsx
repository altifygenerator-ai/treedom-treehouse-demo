import { photos } from "@/data/site";

export default function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {photos.map((photo, index) => (
        <figure key={photo.src} className={index === 0 || index === 3 ? "gallery-card gallery-card-wide" : "gallery-card"}>
          <img src={photo.src} alt={photo.alt} />
          <figcaption>
            <strong>{photo.title}</strong>
            <span>{photo.text}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
