import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { profile, softSkills, projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fikile Nkosi — Matric Graduate & Aspiring Tech Intern" },
      {
        name: "description",
        content:
          "Portfolio of Fikile Nkosi, an organised 2024 matric graduate from Soweto seeking her first internship in tech. Skills, projects and contact details.",
      },
      { property: "og:title", content: "Fikile Nkosi — Portfolio" },
      {
        property: "og:description",
        content:
          "Organised 2024 matric graduate from Soweto building digital skills and looking for a first internship.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const real = projects.filter((p) => !p.placeholder);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-5 pb-8 pt-16 sm:pt-24">
        <p className="rule-label">{profile.location}</p>
        <h1 className="mt-4 text-5xl font-semibold leading-[1.05] sm:text-7xl">
          {profile.name.split(" ")[0]}
          <br />
          <span className="text-primary">{profile.name.split(" ")[1]}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {profile.tagline}
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-foreground/85">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
          <Link
            to="/projects"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            See my projects
          </Link>
          <a
            href={profile.cvUrl}
            download
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Download CV
          </a>
        </div>
      </section>

      <Section label="What I bring" title="Strengths first, experience next">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="ink-card p-6">
            <h3 className="text-xl font-semibold">Proven initiative</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I built and ran a matric peer study group from scratch — the timetable,
              the resource library and the follow-ups were all mine to keep alive.
            </p>
          </div>
          <div className="ink-card p-6">
            <h3 className="text-xl font-semibold">Learning every week</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I'm working through free online courses in digital literacy and web
              basics, and this site grows as those skills do.
            </p>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
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

      <Section label="Selected work" title="Real project">
        {real.map((p) => (
          <article key={p.title} className="ink-card p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <span className="text-sm text-muted-foreground">{p.year}</span>
            </div>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              {p.summary}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <li
                  key={t}
                  className="rounded border border-primary/40 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <Link
          to="/projects"
          className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
        >
          View all projects →
        </Link>
      </Section>
    </SiteLayout>
  );
}
