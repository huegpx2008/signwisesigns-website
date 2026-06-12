import Image from "next/image";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";

const process = [
  "Listen first and define the signage need",
  "Design around the property, brand, and budget",
  "Fabricate with the right materials for the job",
  "Install carefully and stand behind the result",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About SignWise"
          title="Full-service signage from concept to installation."
          copy="SignWise helps property teams, businesses, communities, and organizations solve signage needs with practical design, dependable production, and responsive service."
        />
        <About />
        <section className="section process-section">
          <div className="container process-grid">
            <div className="process-media">
              <Image
                src="/New For Web/1.jpg"
                alt="SignWise signage project"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div>
              <p className="eyebrow">How we work</p>
              <h2>Built around relationships, not one-off orders.</h2>
              <div className="process-list">
                {process.map((item, index) => (
                  <div className="process-item" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
