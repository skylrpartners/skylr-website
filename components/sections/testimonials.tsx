import { Container } from "../container";
import {
  Section,
  SectionEyebrow,
  SectionIntro,
  SectionTitle,
} from "../section-header";

const quotes = [
  {
    quote:
      "SKYLR challenged our commercial thinking in ways our internal team couldn't. Their approach pushed us well beyond the status quo — and the results showed it.",
    attr: "Chief Revenue Officer · Technology Company",
  },
  {
    quote:
      "SKYLR has been a true business partner. Every project delivered actionable insights with measurable impact on our revenue performance.",
    attr: "CEO · $200M+ B2B Services Company",
  },
  {
    quote:
      "The depth of operating experience SKYLR brought was unlike any external team we'd worked with. They set the tone for our entire revenue transformation.",
    attr: "VP Sales · Consumer Company",
  },
  {
    quote:
      "SKYLR didn't just give us tools — they expanded how our leadership team thinks about revenue. The frameworks we built together are still running our business today.",
    attr: "President · Mid-Market SaaS Company",
  },
];

export default function Testimonials() {
  return (
    <Section alt>
      <Container>
        <SectionEyebrow>What clients say</SectionEyebrow>
        <SectionTitle>Trusted by 300+ CXOs</SectionTitle>
        <SectionIntro>Success is measured by impact</SectionIntro>
        <div className="grid grid-cols-2 gap-5 max-[960px]:grid-cols-1">
          {quotes.map((q) => (
            <div
              key={q.attr}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: 28,
              }}
            >
              <div
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  color: "var(--text-primary)",
                  marginBottom: 18,
                  fontStyle: "italic",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    color: "var(--lime)",
                    fontSize: 28,
                    lineHeight: 0,
                    verticalAlign: "-10px",
                    marginRight: 4,
                    fontStyle: "normal",
                  }}
                >
                  &ldquo;
                </span>
                {q.quote}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--meta-size)",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.03em",
                }}
              >
                {q.attr}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
