import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">Treedom</p>
      <h1>That page wandered off into the trees.</h1>
      <p>Head back home to keep planning your treehouse stay.</p>
      <Link className="button button-primary" href="/">
        Back home
      </Link>
    </section>
  );
}
