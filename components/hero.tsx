import Image from "next/image";
import { ArrowUpRight } from "./icons";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-pattern" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="hero-content">
        <p className="hero-kicker">Custom signs &amp; graphic design</p>
        <Image
          className="hero-logo"
          src="/signwise-logo.avif"
          alt="SignWise Signs and Graphic Designs"
          width={1000}
          height={310}
          priority
          sizes="(max-width: 768px) 90vw, 760px"
        />
        <p className="hero-copy">
          From the first idea to final installation, we create signs that help
          businesses stand out and spaces feel complete.
        </p>
        <div className="hero-actions">
          <a href="#quote" className="button button-primary">
            Start your project
            <ArrowUpRight />
          </a>
          <a href="#gallery" className="button button-secondary">
            View our work
          </a>
        </div>
      </div>

      <div className="hero-note">
        <span>Serving Georgia businesses</span>
        <span className="hero-note-dot" />
        <span>30+ years of experience</span>
      </div>
    </section>
  );
}
