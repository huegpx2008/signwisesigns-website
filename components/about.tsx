import Image from "next/image";
import { Check } from "./icons";
import { SectionHeading } from "./section-heading";

const qualities = [
  "Design through installation",
  "Interior and exterior signage",
  "Rebranding, refurbishing, and replacement faces",
];

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHeading
            eyebrow="About SignWise"
            title="Signs made with care, built to make an impression."
          />
          <p>
            SignWise is a full-service custom sign company providing thoughtful,
            practical solutions from conception to installation. Whether you
            need a complete sign package, rebranding, a monument sign,
            refurbishing, a replacement sign face, or one temporary sign, we
            shape the project around your needs and budget.
          </p>
          <p>
            Our team brings more than 30 years of sign-industry experience to
            every job, with a steady focus on responsive service and quality
            craftsmanship.
          </p>
          <ul className="check-list">
            {qualities.map((quality) => (
              <li key={quality}>
                <span>
                  <Check />
                </span>
                {quality}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-visual">
          <Image
            src="/gallery/storefront.svg"
            alt="Modern storefront signage concept"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="experience-card">
            <strong>30+</strong>
            <span>Years of industry experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
