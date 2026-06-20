import { Button } from "./Button";

export function ContactForm() {
  return (
    <form
      method="post"
      action="#"
      className="space-y-6"
      aria-label="Contact form"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className="form-input" />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className="form-input" />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className="form-input" />
        </div>
        <div>
          <label htmlFor="scope" className="form-label">
            Project scope
          </label>
          <input id="scope" name="scope" type="text" className="form-input" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea id="message" name="message" rows={6} className="form-input resize-none" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-sm leading-7 text-muted">
          Structured as a static form UI so it can be connected later to Formspree or any other static endpoint.
        </p>
        <Button type="submit" size="lg">
          Start a conversation
        </Button>
      </div>
    </form>
  );
}
