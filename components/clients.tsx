import { SectionHeading } from "./section-heading";
import { clients } from "@/lib/site-data";

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
          {clients.slice(0, 12).map((client) => (
            <div className="client-name" key={client}>
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
