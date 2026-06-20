import { Link } from "react-router-dom";
import { buttonStyles } from "../components/ui/Button";
import { Seo } from "../components/ui/Seo";

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="The page you requested could not be found." />
      <section className="section-shell flex min-h-[68vh] items-center py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-muted">404</p>
          <h1 className="mt-4 text-[2.4rem] font-medium leading-[1.02] tracking-[-0.05em] text-ink sm:text-[3.5rem]">
            This page does not exist.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            The route may have changed during the move from the previous site. Return to the main portfolio and continue from
            there.
          </p>
          <Link to="/" className={buttonStyles("secondary", "lg") + " mt-10"}>
            Back home
          </Link>
        </div>
      </section>
    </>
  );
}
