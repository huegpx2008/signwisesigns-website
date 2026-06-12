import { Mail, Phone, Pin } from "./icons";
import { SectionHeading } from "./section-heading";

export function Quote() {
  return (
    <section id="quote" className="section quote-section">
      <div className="quote-orb quote-orb-one" />
      <div className="quote-orb quote-orb-two" />
      <div className="container quote-grid">
        <div className="quote-copy">
          <SectionHeading
            eyebrow="Request a quote"
            title="Tell us what you have in mind."
            description="Share a few details about your project and our team will follow up to talk through options, timing, and next steps."
            light
          />
          <div className="contact-list">
            <a href="tel:+17703562775">
              <Phone />
              <span>
                <small>Call us</small>
                770-356-2775
              </span>
            </a>
            <a href="mailto:john@signwisesigns.com">
              <Mail />
              <span>
                <small>Email us</small>
                john@signwisesigns.com
              </span>
            </a>
            <div>
              <Pin />
              <span>
                <small>Mailing address</small>
                P.O. Box 367, Bethlehem, GA 30620
              </span>
            </div>
          </div>
        </div>

        <form className="quote-form" action="mailto:john@signwisesigns.com" method="post" encType="text/plain">
          <div className="form-row">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Company
              <input type="text" name="company" placeholder="Company name" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="(770) 555-0123" />
            </label>
          </div>
          <label>
            Project type
            <select name="project">
              <option>Exterior, storefront, or monument signage</option>
              <option>Interior, ADA, or wayfinding signage</option>
              <option>Dimensional, lighted, routed, or sandblasted signs</option>
              <option>Vehicle graphics, decals, or labels</option>
              <option>Banners, flags, tradeshow displays, or site signs</option>
              <option>Sign package, rebranding, refurbishing, or installation</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Project details
            <textarea
              name="details"
              rows={5}
              placeholder="Tell us about the sign, location, quantity, and ideal timing."
              required
            />
          </label>
          <button className="button button-form" type="submit">
            Send quote request
          </button>
          <p className="form-note">
            This starter form opens your email client. Connect it to your preferred
            form service before launch.
          </p>
        </form>
      </div>
    </section>
  );
}
