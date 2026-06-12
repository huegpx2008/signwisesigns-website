import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { SectionHeading } from "./section-heading";

const projects = [
  {
    src: "/gallery/monument.svg",
    title: "Monument Signage",
    category: "Exterior",
    className: "gallery-tall",
  },
  {
    src: "/gallery/window-graphics.svg",
    title: "Window Graphics",
    category: "Brand Environments",
    className: "",
  },
  {
    src: "/gallery/wayfinding.svg",
    title: "Wayfinding System",
    category: "Interior",
    className: "",
  },
  {
    src: "/gallery/vehicle.svg",
    title: "Fleet Graphics",
    category: "Vehicle",
    className: "gallery-wide",
  },
  {
    src: "/gallery/channel-letters.svg",
    title: "Channel Letters",
    category: "Illuminated",
    className: "",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="gallery-intro">
          <SectionHeading
            eyebrow="Selected work"
            title="Built for real spaces and lasting visibility."
            description="A sample of the signage and graphics we can create. Project photography can be added here as the new site is prepared for launch."
          />
          <a href="#quote" className="text-link">
            Plan your sign
            <ArrowUpRight />
          </a>
        </div>

        <div className="gallery-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.title}>
              <Image
                src={project.src}
                alt={`${project.title} project placeholder`}
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
