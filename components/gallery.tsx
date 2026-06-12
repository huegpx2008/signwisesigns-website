import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="gallery-intro">
          <SectionHeading
            eyebrow="Selected work"
            title="Built for real spaces and lasting visibility."
            description="A quick look at real SignWise projects across exterior signs, interior signage, banners, routed signs, and glass graphics."
          />
          <a href="/quote" className="text-link">
            Plan your sign
            <ArrowUpRight />
          </a>
        </div>

        <div className="gallery-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.title}>
              <Image
                src={project.src}
                alt={`${project.title} project example`}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <div className="project-overlay">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
