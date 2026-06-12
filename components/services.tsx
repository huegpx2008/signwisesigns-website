import { ArrowUpRight } from "./icons";
import { SectionHeading } from "./section-heading";
import { featuredServices } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="services-intro">
          <SectionHeading
            eyebrow="What we do"
            title="One partner for your complete signage needs."
            description="Flexible capabilities, experienced guidance, and careful execution for businesses, residential communities, and commercial properties."
          />
          <a href="/quote" className="text-link">
            Discuss a project
            <ArrowUpRight />
          </a>
        </div>

        <div className="services-grid">
          {featuredServices.map((item, index) => (
            <article className="service-card" key={item.title}>
              <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
