import { Container } from "../container";
import {
  Section,
  SectionEyebrow,
  SectionIntro,
  SectionTitle,
} from "../section-header";

type Case = {
  tag: string;
  company: string;
  challenge: string;
  results: { lead?: string; strong: string; tail?: string }[];
};

const cases: Case[] = [
  {
    tag: "$200M · GLOBAL PARTNERSHIPS SAAS",
    company: "Revenue Growth & Cash Flow Turnaround",
    challenge:
      "Scaling revenue hindered by unclear goals, ownership gaps, and limited visibility into execution.",
    results: [
      { strong: "31%+ YoY revenue growth", tail: " despite tough market conditions" },
      { lead: "Restored ", strong: "positive cash flow in 4 months", tail: ", enabling reinvestment into growth" },
      { lead: "Enabled timely course corrections to exceed revenue targets", strong: "" },
    ],
  },
  {
    tag: "$300M · GLOBAL HOSPITALITY OPERATOR",
    company: "Customer Intelligence & Attachment Rate Growth",
    challenge:
      "Stalled revenue expansion into adjacent customer experience streams.",
    results: [
      { lead: "Insight generation accelerated ", strong: "from weeks to minutes", tail: " with AI voice-of-customer analytics" },
      { strong: "Doubled attachment rates", tail: " for new revenue streams within 2 quarters" },
    ],
  },
  {
    tag: "$500M · B2B SERVICES",
    company: "Cross-Sell & Upsell Capture + Churn Reduction",
    challenge:
      "Service friction and value erosion limiting cross-sell and upsell revenue growth.",
    results: [
      { lead: "Captured ", strong: "100% of cross- and up-sell opportunities", tail: " with AI agents" },
      { lead: "Slashed response time ", strong: "from 3 weeks to 5 minutes" },
      { strong: "Halved churn rate within 4 months" },
    ],
  },
  {
    tag: "$1B+ · US INGREDIENTS MANUFACTURER",
    company: "Sales Intelligence & Revenue Velocity",
    challenge:
      "Knowledge silos constraining sales growth and account discovery.",
    results: [
      { lead: "Delivered ", strong: "6-figure efficiency savings", tail: " by eliminating knowledge bottleneck" },
      { lead: "Freed sales team to pursue ", strong: "7-figure revenue uplifts" },
      { lead: "Compressed sales cycles ", strong: "from weeks to minutes" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <Section alt>
      <Container>
        <SectionEyebrow>Client results</SectionEyebrow>
        <SectionTitle>Results from the field</SectionTitle>
        <SectionIntro>
          Every deployment is tied to measurable revenue impact. Here&apos;s
          what that looks like in practice.
        </SectionIntro>
        <div className="grid grid-cols-2 gap-5 max-[960px]:grid-cols-1">
          {cases.map((c) => (
            <div
              key={c.tag}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: 28,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--lime)",
                  letterSpacing: "0.08em",
                  marginBottom: 10,
                }}
              >
                {c.tag}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {c.company}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginBottom: 16,
                  paddingBottom: 16,
                  borderBottom: "1px solid var(--border)",
                  lineHeight: 1.5,
                }}
              >
                {c.challenge}
              </div>
              <ul className="list-none p-0">
                {c.results.map((r, i) => (
                  <li
                    key={i}
                    className="relative"
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: "var(--text-secondary)",
                      padding: "6px 0 6px 18px",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute"
                      style={{
                        left: 0,
                        top: 13,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "var(--lime)",
                        opacity: 0.7,
                      }}
                    />
                    {r.lead}
                    {r.strong && (
                      <strong
                        style={{ color: "var(--lime)", fontWeight: 600 }}
                      >
                        {r.strong}
                      </strong>
                    )}
                    {r.tail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
