import { About } from "@/components/about";
import { Clients } from "@/components/clients";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Gallery />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
