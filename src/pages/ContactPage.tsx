import { ContactForm } from "../components/ui/ContactForm";
import { PageIntro } from "../components/ui/PageIntro";
import { Seo } from "../components/ui/Seo";
import { contactDetails, socialPlaceholders } from "../data/site";
import { getLocalizedText } from "../i18n";
import { useLanguage } from "../i18n/LanguageProvider";

export function ContactPage() {
  const { language } = useLanguage();

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Diego Carreras for creative direction, brand strategy, spatial projects, editorial work and AI-powered storytelling."
      />
      <PageIntro
        eyebrow="Contact"
        title="Let’s talk"
        description="Have a project in mind? I’d love to hear about it."
      />
      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="space-y-7">
            <div>
              <img
                src="/images/diegoprofile.png"
                alt="Portrait of Diego Carreras."
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div>
              <p className="eyebrow text-muted">Email</p>
              <a className="mt-2 block text-sm text-ink hover:text-muted sm:text-base" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-muted">Phone</p>
              <a
                className="mt-2 block text-sm text-ink hover:text-muted sm:text-base"
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              >
                {contactDetails.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow text-muted">Location</p>
              <p className="mt-2 text-sm text-ink sm:text-base">{getLocalizedText(contactDetails.location, language)}</p>
            </div>
            <div>
              <p className="eyebrow text-muted">Social</p>
              <div className="mt-3 flex flex-wrap gap-4 text-[0.72rem] uppercase tracking-[0.12em] text-muted">
                {socialPlaceholders.map((social) => (
                  <span key={social.href}>{getLocalizedText(social.label, language)}</span>
                ))}
              </div>
            </div>
          </aside>
          <div className="pt-1">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
