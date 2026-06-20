import { Link } from "react-router-dom";
import { buttonStyles } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactCtaSection() {
  return (
    <section className="section-light">
      <div className="section-shell border-x border-line bg-paper pb-16 sm:pb-20">
        <div className="flex flex-col gap-8 border-y border-line px-8 py-10 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <SectionHeading
          eyebrow="Start a conversation"
          title="Looking for creative leadership that balances strategy, taste and execution?"
          description="Whether the brief starts with a rebrand, a spatial concept, a launch story or an AI-led image workflow, Diego can shape the direction."
        />
        <Link to="/contact" className={buttonStyles("secondary", "lg")}>
          Contact Diego
        </Link>
        </div>
      </div>
    </section>
  );
}
