import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="hero">
      <video
        className="hero-video"
        src="/owl video2.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-video-wash" />

      <div className="hero-content">
        <Image
          className="hero-logo"
          src="/signwise-logo.avif"
          alt="SignWise Signs and Graphic Designs"
          width={1000}
          height={310}
          priority
          sizes="(max-width: 768px) 90vw, 760px"
        />
      </div>
    </section>
  );
}
