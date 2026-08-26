import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Fikile Nkosi — Email & LinkedIn" },
      {
        name: "description",
        content:
          "Get in touch with Fikile Nkosi in Soweto by email at fikilenkosi275@gmail.com or via LinkedIn about internship opportunities.",
      },
      { property: "og:title", content: "Contact Fikile Nkosi" },
      {
        property: "og:description",
        content: "Email and LinkedIn details for internship enquiries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <SiteLayout>
      <Section label="Contact" title="Let's talk about your internship">
        <p className="-mt-4 max-w-2xl text-muted-foreground">
          I'm available immediately and happy to travel within Gauteng. The quickest way
          to reach me is email — I reply the same day.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="ink-card block p-6">
            <p className="rule-label">Email</p>
            <p className="mt-3 break-all text-lg font-medium">{profile.email}</p>
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-card block p-6"
          >
            <p className="rule-label">LinkedIn</p>
            <p className="mt-3 text-lg font-medium">{profile.linkedinLabel}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Link goes live once the profile URL is added.
            </p>
          </a>

          {profile.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-card block p-6"
            >
              <p className="rule-label">GitHub</p>
              <p className="mt-3 text-lg font-medium">View my code</p>
            </a>
          )}

          <div className="ink-card p-6">
            <p className="rule-label">Location</p>
            <p className="mt-3 text-lg font-medium">{profile.location}</p>
          </div>

          <a href={profile.cvUrl} download className="ink-card block p-6">
            <p className="rule-label">CV</p>
            <p className="mt-3 text-lg font-medium">Download PDF</p>
          </a>
        </div>
      </Section>
    </SiteLayout>
  );
}
