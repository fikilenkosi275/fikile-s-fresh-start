import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { about, technicalSkills, softSkills, profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Fikile Nkosi — Matric Graduate from Soweto" },
      {
        name: "description",
        content:
          "Fikile Nkosi matriculated in 2024, led a peer study group in Soweto and is building technical and soft skills toward a first role in tech.",
      },
      { property: "og:title", content: "About Fikile Nkosi" },
      {
        property: "og:description",
        content: "A self-driven 2024 matric graduate from Soweto building digital skills.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <SiteLayout>
      <Section label="About me" title="Honest about where I am, clear about where I'm going">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {about.map((p) => (
              <p key={p.slice(0, 24)} className="leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
          </div>

          <aside className="ink-card h-fit p-6">
            <p className="rule-label">Quick facts</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Based in</dt>
                <dd className="font-medium">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Education</dt>
                <dd className="font-medium">National Senior Certificate, 2024</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Looking for</dt>
                <dd className="font-medium">Internship / entry-level role</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="font-medium text-primary hover:underline">
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section label="Skills" title="Technical skills">
        <p className="-mt-4 mb-6 text-sm text-muted-foreground">
          Only what I can genuinely claim today. I add to this list as I finish each course.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {technicalSkills.map((s) => (
            <div key={s.name} className="ink-card flex items-center justify-between p-4">
              <span className="text-sm font-medium">{s.name}</span>
              <span className="text-xs uppercase tracking-widest text-primary">{s.level}</span>
            </div>
          ))}
        </div>

        <h3 className="mt-12 text-2xl font-semibold">Soft skills</h3>
        <ul className="mt-5 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
      </Section>
    </SiteLayout>
  );
}
