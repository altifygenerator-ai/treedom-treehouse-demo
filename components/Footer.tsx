import Link from "next/link";
import { bookingUrl, facebookUrl, navItems, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="footer-brand">
          <span className="brand-mark">T</span>
          <span>
            <strong>{site.name}</strong>
            <small>{site.location}</small>
          </span>
        </Link>
        <p>
          A custom treehouse stay with a private hot tub, arcade, firepit, disc golf, and wooded space
          to explore near historic downtown Jonesborough.
        </p>
      </div>
      <div className="footer-links">
        <strong>Plan your stay</strong>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="footer-links">
        <strong>Book</strong>
        <a href={bookingUrl} target="_blank" rel="noreferrer">
          Airbnb listing
        </a>
        <a href={facebookUrl} target="_blank" rel="noreferrer">
          Facebook page
        </a>
      </div>
    </footer>
  );
}
