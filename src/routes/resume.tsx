import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PlaceholderTag } from "@/components/site/Layout";
import { education, certifications, involvement, profile } from "@/data/portfolio";

export const Route = createFileRoute("/resume")({
  component: Resume,
  head: () => ({
    meta: [
      { title: "Resume — Fikile Nkosi | Matric 2024, Soweto" },
      {
        name: "description",
        content:
          "Education, leadership involvement and in-progress certifications for Fikile Nkosi, plus a downloadable CV.",
      },
      { property: "og:title", content: "Resume — Fikile Nkosi" },
      {
        property: "og:description",
        content: "Matric 2024, leadership involvement and courses in progress.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resume" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
});

function Resume() {
  return (
    <SiteLayout>
      <Section label="Resume" title="Education & involvement">
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <a
            href={profile.cvUrl}
            download
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Download CV (PDF)
          </a>
          <span className="text-xs text-muted-foreground">
            Placeholder document — replace it with your real CV before applying.
          </span>
        </div>

        <h3 className="text-2xl font-semibold">🎓 Education</h3>
        <div className="mt-5 space-y-4">
          {education.map((e) => (
            <div key={e.qualification} className="ink-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-lg font-semibold">{e.qualification}</p>
                <span className="text-sm text-muted-foreground">{e.year}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
              <p className="mt-3 text-sm text-foreground/80">{e.subjects}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-2xl font-semibold">💼 Leadership & involvement</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          No formal employment yet — this is the responsibility I've carried so far.
        </p>
        <div className="mt-5 space-y-4">
          {involvement.map((it) => (
            <div key={it.role} className="ink-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-lg font-semibold">{it.role}</p>
                <span className="text-sm text-muted-foreground">{it.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-2xl font-semibold">📜 Certifications</h3>
        <div className="mt-3">
          <PlaceholderTag />
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{certifications.note}</p>
        <ul className="mt-5 space-y-3">
          {certifications.items.map((c) => (
            <li key={c.name} className="ink-card flex flex-wrap items-center justify-between gap-2 p-4">
              <span className="text-sm font-medium">{c.name}</span>
              <span className="text-xs uppercase tracking-widest text-primary">{c.status}</span>
            </li>
          ))}
        </ul>
      </Section>
    </SiteLayout>
  );
}
