import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Gallery"
          title="A first pass at real project photography."
          copy="These images are pulled from the new service folders so the site can start feeling like SignWise while final project selections are still being gathered."
        />
        <section className="section gallery-page-section">
          <div className="container gallery-page-grid">
            {projects.map((project) => (
              <article className="gallery-page-card" key={project.title}>
                <Image
                  src={project.src}
                  alt={`${project.title} project example`}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <div>
                  <span>{project.category}</span>
                  <h2>{project.title}</h2>
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
