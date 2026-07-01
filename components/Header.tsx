import Link from "next/link";
import { bookingUrl, navItems, site } from "@/data/site";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Treedom home">
        <span className="brand-mark">T</span>
        <span>
          <strong>{site.name}</strong>
          <small>Treehouse getaway</small>
        </span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="header-cta" href={bookingUrl} target="_blank" rel="noreferrer">
        Book the Treehouse
      </a>
    </header>
  );
}
