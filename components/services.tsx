import { ArrowUpRight } from "./icons";
import { SectionHeading } from "./section-heading";

const services = [
  {
    number: "01",
    title: "Exterior & Storefront Signs",
    text: "Monument signs, retail and storefront signage, architectural signs, channel letters, and replacement sign faces.",
  },
  {
    number: "02",
    title: "Interior, ADA & Wayfinding",
    text: "ADA and regulatory signs, multifamily wayfinding, plaques, directories, wall graphics, and branded interior signage.",
  },
  {
    number: "03",
    title: "Dimensional & Lighted Signs",
    text: "Dimensional and 3-D signs, lighted signs, sandblasted signs, routed signs, and custom fabrication.",
  },
  {
    number: "04",
    title: "Vehicle Graphics",
    text: "Professional vehicle graphics, fleet lettering, decals, labels, and brand details that travel with your business.",
  },
  {
    number: "05",
    title: "Banners & Displays",
    text: "Banners, flags, tradeshow exhibits, displays, construction signs, site signs, and temporary promotional signage.",
  },
  {
    number: "06",
    title: "Sign Packages & Installation",
    text: "Apartment home sign packages, rebranding, refurbishing existing signs, and professional installation.",
  },
];

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
          <a href="#quote" className="text-link">
            Discuss a project
            <ArrowUpRight />
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
