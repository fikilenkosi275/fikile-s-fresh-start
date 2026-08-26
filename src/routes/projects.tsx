import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PlaceholderTag } from "@/components/site/Layout";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — Fikile Nkosi" },
      {
        name: "description",
        content:
          "Projects by Fikile Nkosi, including the Matric Peer Study Group she founded in 2024 using WhatsApp and Google Docs.",
      },
      { property: "og:title", content: "Projects — Fikile Nkosi" },
      {
        property: "og:description",
        content: "Real and upcoming projects, clearly labelled.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function Projects() {
  return (
    <SiteLayout>
      <Section label="Portfolio" title="Projects">
        <p className="-mt-4 mb-8 max-w-2xl text-sm text-muted-foreground">
          Everything real is described exactly as it happened. Slots reserved for future
          work are tagged, so nothing here overstates my experience.
        </p>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <article
              key={`${p.title}-${i}`}
              className={`ink-card p-6 sm:p-8 ${p.placeholder ? "opacity-80" : ""}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold">{p.title}</h2>
                <span className="text-sm text-muted-foreground">{p.year}</span>
              </div>

              {p.placeholder && (
                <div className="mt-3">
                  <PlaceholderTag />
                </div>
              )}

              <p className="mt-4 max-w-2xl leading-relaxed text-foreground/85">{p.summary}</p>

              <ul className="mt-5 space-y-2">
                {p.details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <p className="rule-label">Tools used</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-primary/40 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
