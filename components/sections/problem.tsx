import { Container } from "../container";
import {
  Section,
  SectionEyebrow,
  SectionIntro,
  SectionTitle,
} from "../section-header";

const cards = [
  {
    num: "01 — SILOED EXECUTION",
    title: "Your teams run in silos, not as a system.",
    body: "59% of revenue teams cite siloed execution as their top barrier.* Sales, marketing, finance, and ops each work in their own tool — no shared cadence, no shared truth.",
  },
  {
    num: "02 — UNCLEAR VALUE DRIVERS",
    title: "You track lagging outcomes, not leading levers.",
    body: "Revenue and ARR are measured weekly. But the inputs that move them — win rate, pipeline coverage, ACV, expansion attach — are rarely identified, let alone owned or governed.",
  },
  {
    num: "03 — REVENUE LEAKS",
    title: "Value escapes before you can see it.",
    body: "Pricing exceptions, segment mix, churn signals — each one leaks revenue quietly. Without a diagnostic layer, you can't size the problem, let alone fix it.",
  },
];

export default function Problem() {
  return (
    <Section alt>
      <Container>
        <SectionEyebrow>Where revenue stalls</SectionEyebrow>
        <SectionTitle>
          Most $100M–$500M companies are leaving 15–20% revenue on the table
        </SectionTitle>
        <SectionIntro>
          Companies at this stage track output metrics — and miss the input
          levers that move them. Three failure patterns repeat across nearly
          every company we&apos;ve worked with.
        </SectionIntro>
        <div className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-1">
          {cards.map((card) => (
            <div
              key={card.num}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--lime)",
                  marginBottom: 18,
                }}
              >
                {card.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 12,
                  lineHeight: 1.25,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--meta-size)",
            color: "var(--text-secondary)",
            marginTop: 28,
            letterSpacing: "0.02em",
            lineHeight: 1.5,
          }}
        >
          * Source: SKYLR analysis of 600+ organizations, drawing from public
          sources and industry experience.
        </p>
      </Container>
    </Section>
  );
}
