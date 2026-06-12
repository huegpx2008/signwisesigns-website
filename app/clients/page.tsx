import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { clients } from "@/lib/site-data";

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our Clients"
          title="Trusted by property teams, retailers, schools, and local businesses."
          copy="Logo artwork can drop in later, but this gives the client page the same airy teal field and client-wall feel as the existing SignWise site."
        />
        <section className="section clients-page-section">
          <div className="container">
            <div className="client-logo-wall">
              {clients.map((client) => (
                <div className="client-logo-type" key={client}>
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
