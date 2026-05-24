import type { ReactNode } from "react";
import { Container } from "../container";
import { CheckCircleIcon, CloudStackIcon, LockIcon, ShieldIcon } from "../icons";
import {
  Section,
  SectionEyebrow,
  SectionIntro,
  SectionTitle,
} from "../section-header";

const ICON_SIZE = 18;

const items: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <CloudStackIcon width={ICON_SIZE} height={ICON_SIZE} />,
    title: "Built on Google Cloud",
    body: "Cloud Run, Cloud SQL, Identity Platform, and Secret Manager — backed by Google's enterprise infrastructure and security defaults.",
  },
  {
    icon: <LockIcon width={ICON_SIZE} height={ICON_SIZE} />,
    title: "Identity Platform authentication",
    body: "Google Cloud Identity Platform with per-organization custom claims and JWT-scoped access control.",
  },
  {
    icon: <ShieldIcon width={ICON_SIZE} height={ICON_SIZE} />,
    title: "Org-scoped data isolation",
    body: "Every record is tenant-isolated. Cross-organization reads are architecturally impossible — enforced at the database and API layer.",
  },
  {
    icon: <CheckCircleIcon width={ICON_SIZE} height={ICON_SIZE} />,
    title: "No model training on your data",
    body: "AI inference runs through Claude under enterprise data processing terms. Your data is never used to train models.",
  },
];

export default function Security() {
  return (
    <Section>
      <Container>
        <SectionEyebrow>Security &amp; privacy</SectionEyebrow>
        <SectionTitle>Built secure, by design</SectionTitle>
        <SectionIntro>
          SKYLR OS runs on Google Cloud with strict multi-tenant isolation
          and customer-controlled data.
        </SectionIntro>
        <div className="grid grid-cols-2 gap-4 max-[960px]:grid-cols-1">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex"
              style={{
                gap: 18,
                padding: "22px 24px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "var(--lime-soft)",
                  border: "1px solid var(--lime-line)",
                  color: "var(--lime)",
                }}
              >
                {it.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 5,
                  }}
                >
                  {it.title}
                </div>
                <div
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    color: "var(--text-secondary)",
                  }}
                >
                  {it.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
