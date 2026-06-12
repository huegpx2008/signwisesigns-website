import { ArrowUpRight } from "./icons";
import { SectionHeading } from "./section-heading";

const services = [
  {
    number: "01",
    title: "Exterior Signs",
    text: "Monument signs, channel letters, dimensional lettering, architectural signs, and storefront signage.",
  },
  {
    number: "02",
    title: "Interior & ADA",
    text: "Wayfinding, ADA-compliant signs, plaques, directories, wall graphics, and branded interior environments.",
  },
  {
    number: "03",
    title: "Vehicle Graphics",
    text: "Professional fleet graphics, wraps, decals, and lettering that carry your brand wherever the road leads.",
  },
  {
    number: "04",
    title: "Banners & Displays",
    text: "Banners, flags, tradeshow exhibits, construction signs, site signs, and temporary promotional displays.",
  },
  {
    number: "05",
    title: "Specialty Fabrication",
    text: "Sandblasted and routed signs, custom regulatory signage, decals, labels, and one-of-a-kind solutions.",
  },
  {
    number: "06",
    title: "Installation",
    text: "Careful, professional installation and refurbishment that helps your signage look right and last longer.",
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
