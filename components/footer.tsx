import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Clients", href: "#clients" },
  { label: "Gallery", href: "#gallery" },
  { label: "Request a Quote", href: "#quote" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <a href="#home" className="footer-logo" aria-label="SignWise Signs home">
          <Image
            src="/signwise-logo.avif"
            alt="SignWise Signs"
            width={360}
            height={110}
          />
        </a>
        <nav aria-label="Footer navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} SignWise Signs. All rights reserved.</span>
        <span>Custom signs &amp; graphic designs in Georgia.</span>
      </div>
    </footer>
  );
}
