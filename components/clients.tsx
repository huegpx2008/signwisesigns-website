import { SectionHeading } from "./section-heading";

const clients = [
  "Emory Point",
  "Gables",
  "Saks Fifth Avenue",
  "AMLI Residential",
  "The Battery",
  "Ricoh",
  "CMA",
  "Norcross High",
];

export function Clients() {
  return (
    <section id="clients" className="section clients-section">
      <div className="container">
        <SectionHeading
          eyebrow="Our clients"
          title="Trusted by organizations across Georgia."
          description="We are proud to support property teams, retailers, schools, communities, and local businesses with signage that works."
          centered
        />
        <div className="client-grid">
          {clients.map((client) => (
            <div className="client-name" key={client}>
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
