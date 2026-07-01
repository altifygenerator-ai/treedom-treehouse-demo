type ExperienceItem = {
  title: string;
  text: string;
};

type ExperienceGridProps = {
  items: ExperienceItem[];
};

export default function ExperienceGrid({ items }: ExperienceGridProps) {
  return (
    <div className="experience-grid">
      {items.map((item, index) => (
        <article key={item.title} className="experience-card">
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
