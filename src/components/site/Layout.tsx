import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { profile } from "@/data/portfolio";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">
            {profile.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </Link>

          <nav className="hidden gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-sm text-primary font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md border border-border px-3 py-1.5 text-sm text-foreground"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-border/70 px-5 pb-4 pt-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                activeProps={{ className: "block py-2 text-sm text-primary font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name} — {profile.location}
          </p>
          <a href={`mailto:${profile.email}`} className="hover:text-primary">
            {profile.email}
          </a>
        </div>
      </footer>
    </div>
  );
}

export function Section({
  label,
  title,
  children,
}: {
  label?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
      {label && <p className="rule-label">{label}</p>}
      {title && (
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      )}
      <div className={label || title ? "mt-8" : ""}>{children}</div>
    </section>
  );
}

export function PlaceholderTag() {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
      Placeholder — replace
    </span>
  );
}
