import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { Quote } from "@/components/quote";

export default function QuotePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Request a Quote"
          title="Tell SignWise what you need built, replaced, or refreshed."
          copy="Share the project type, site details, quantities, and timing. The starter form opens an email now and can be connected to a form service before launch."
        />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
