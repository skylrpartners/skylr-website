import type { ReactNode } from "react";
import { Container } from "../container";
import { BoltIcon, MagnifierIcon, TreeIcon } from "../icons";
import {
  Section,
  SectionEyebrow,
  SectionIntro,
  SectionTitle,
} from "../section-header";

type Pillar = {
  icon: ReactNode;
  tagline: string;
  title: string;
  body: string;
  apps: string;
};

const ICON_SIZE = 24;

const pillars: Pillar[] = [
  {
    icon: <MagnifierIcon width={ICON_SIZE} height={ICON_SIZE} />,
    tagline: "DIAGNOSE",
    title: "Revenue Forensics™",
    body: "AI diagnostic platform that uncovers revenue leaks across pipeline, pricing, segmentation, and retention. An agentic AI pipeline delivers board-ready findings in 5–7 days — not the months a traditional diagnostic would take.",
    apps: "Agentic AI diagnostics",
  },
  {
    icon: <TreeIcon width={ICON_SIZE} height={ICON_SIZE} />,
    tagline: "PLAN & GOVERN",
    title: "Revenue Blueprint™",
    body: "AI-native value driver trees, target setting, and business reviews. Map every output metric to the inputs that move it. Top-down targets meet bottom-up plans, with AI-generated insights at every node.",
    apps: "Value Driver Tree · Business Reviews · Northstar",
  },
  {
    icon: <BoltIcon width={ICON_SIZE} height={ICON_SIZE} />,
    tagline: "EXECUTE",
    title: "Revenue Velocity™",
    body: "The AI execution layer. From lead scoring and account planning to RAG-powered sales enablement, AI sales training, dynamic pricing, churn prediction, and NRR growth recommendations — a growing suite of GTM apps on a unified data layer, sharing context across every revenue motion.",
    apps: "Unified data layer · AI-native execution",
  },
];

export default function Pillars() {
  return (
    <Section id="product">
      <Container>
        <SectionEyebrow>The platform</SectionEyebrow>
        <SectionTitle>
          An AI-native platform built for revenue operators
        </SectionTitle>
        <SectionIntro>
          SKYLR OS combines agentic AI for revenue diagnostics, AI-native
          planning and governance, and a growing suite of GTM tools — all
          designed to accelerate revenue velocity across the customer
          lifecycle. Built on operating models that scaled revenue across
          consumer, retail, SaaS, and B2B services.
        </SectionIntro>
        <div className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-1">
          {pillars.map((p) => (
            <div
              key={p.title}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 18,
                padding: "36px 32px",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "var(--lime-soft)",
                  border: "1px solid var(--lime-line)",
                  marginBottom: 28,
                  color: "var(--lime)",
                }}
              >
                {p.icon}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--lime)",
                  marginBottom: 14,
                  letterSpacing: "0.08em",
                }}
              >
                {p.tagline}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 14,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  marginBottom: 22,
                }}
              >
                {p.body}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--meta-size)",
                  color: "var(--text-secondary)",
                  paddingTop: 18,
                  borderTop: "1px solid var(--border)",
                }}
              >
                {p.apps}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
