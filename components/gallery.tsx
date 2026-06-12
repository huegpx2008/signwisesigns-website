import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { SectionHeading } from "./section-heading";

const projects = [
  {
    src: "/Monument Signs/57.jpg",
    title: "Monument Signage",
    category: "Exterior",
    className: "gallery-tall",
    position: "center",
  },
  {
    src: "/Window & Wall Graphics/30 (3).JPG",
    title: "Window Graphics",
    category: "Glass Graphics",
    className: "",
    position: "center",
  },
  {
    src: "/ADA/27.jpg",
    title: "ADA Signage",
    category: "Interior",
    className: "",
    position: "center",
  },
  {
    src: "/Banners & Flags/21.jpg",
    title: "Street Banners",
    category: "Banners & Flags",
    className: "gallery-wide",
    position: "center",
  },
  {
    src: "/Dimesional Signs and Lettering/28.jpg",
    title: "Dimensional Lettering",
    category: "Custom Fabrication",
    className: "",
    position: "center",
  },
  {
    src: "/Sandblast & Routed Signs/37.jpg",
    title: "Routed Signs",
    category: "Sandblast & Routed",
    className: "",
    position: "center",
  },
  {
    src: "/Roadside Signs/20.jpg",
    title: "Leasing & Roadside Signs",
    category: "Property Signage",
    className: "",
    position: "center",
  },
  {
    src: "/Aluminum Signs/31 (2).JPG",
    title: "Aluminum Signs",
    category: "Regulatory & Property",
    className: "gallery-wide",
    position: "center",
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
            description="A quick look at real SignWise projects across exterior signs, interior signage, banners, routed signs, and glass graphics."
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
                alt={`${project.title} project example`}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                style={{ objectPosition: project.position }}
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
