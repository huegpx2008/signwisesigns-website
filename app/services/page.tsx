import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title="Interior, exterior, temporary, and permanent signage."
          copy="A complete look at the sign types SignWise can design, produce, refurbish, and install for multi-family, residential, commercial, retail, and community spaces."
        />
        <section className="section service-catalog-section">
          <div className="container service-catalog">
            {services.map((service) => (
              <article className="service-feature-card" key={service.title}>
                <div className="service-feature-image">
                  <Image
                    src={service.image}
                    alt={`${service.title} example`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
