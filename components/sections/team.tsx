import Image from "next/image";
import { Container } from "../container";
import {
  Section,
  SectionEyebrow,
  SectionIntro,
  SectionTitle,
} from "../section-header";

type Founder = {
  name: string;
  role: string;
  photo: string;
  headline: string;
  bullets: string[];
  pills: string[];
};

const founders: Founder[] = [
  {
    name: "Yeeli Lee",
    role: "Co-Founder · Chief Revenue Officer",
    photo: "/images/yeeli-headshot.png",
    headline:
      "Former Amazon Vice President who scaled Amazon Global Stores GMV from $90M to $1B+ — now bringing that operating system to your revenue team",
    bullets: [
      "Behavioral Insights Agency CEO, exited to IPSOS",
      "Success Coach, Wharton CRO Executive Program",
      "Led category and country expansion for Amazon Global Stores, grew GMV by 11x from $90M to $1B+ in 18 months",
      "MEng Cornell. MBA Wharton. BCG",
    ],
    pills: ["Amazon", "BCG", "Wharton", "Cornell"],
  },
  {
    name: "Rajesh Srinivasan",
    role: "Co-Founder · Chief Product & Technology Officer",
    photo: "/images/rajesh-headshot.png",
    headline:
      "Former COO of a SaaS unicorn; scaled Amazon Associates from $10B to $30B+ — now architecting the technology and AI layer of SKYLR OS",
    bullets: [
      "Scaled Amazon Associates 3x from $10B to $30B+ across 20 countries; Influencer Program $0 to $500M+; Promo Codes $0 to $500M+",
      "Grew partnerships marketplace GMV at Impact Tech from $30B to $40B+",
      "Key driver of Microsoft Security revenue growth from $200M to $705M through strategy, planning and business development",
      "MS EECS MIT. MBA MIT Sloan. BCG",
    ],
    pills: ["Amazon", "Microsoft", "Impact Tech", "BCG", "MIT"],
  },
];

export default function Team() {
  return (
    <Section>
      <Container>
        <SectionEyebrow>Who&apos;s behind it</SectionEyebrow>
        <SectionTitle>
          Former Amazon operators who scaled $90M to $30B+ — now deploying
          that system in your company
        </SectionTitle>
        <SectionIntro>
          Big Tech executives building the platform we wish we&apos;d had —
          embedding SKYLR OS and running it alongside your team
        </SectionIntro>
        <div className="grid grid-cols-2 gap-5 max-[960px]:grid-cols-1">
          {founders.map((f) => (
            <div
              key={f.name}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 18,
                padding: 36,
              }}
            >
              <div
                className="flex items-center mb-5 max-[480px]:flex-col max-[480px]:items-start"
                style={{ gap: 26 }}
              >
                <div
                  className="relative shrink-0 overflow-hidden rounded-full"
                  style={{
                    width: 150,
                    height: 150,
                    border: "2px solid var(--lime)",
                  }}
                >
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    sizes="150px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 700,
                    }}
                  >
                    {f.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--lime)",
                      marginTop: 4,
                      fontWeight: 500,
                    }}
                  >
                    {f.role}
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  marginBottom: 18,
                  paddingBottom: 18,
                  borderBottom: "1px solid var(--border)",
                  fontStyle: "italic",
                }}
              >
                {f.headline}
              </div>
              <ul className="list-none p-0">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: "var(--text-secondary)",
                      padding: "8px 0 8px 20px",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute"
                      style={{
                        left: 0,
                        top: 16,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "var(--lime)",
                        opacity: 0.55,
                      }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <div
                className="flex flex-wrap"
                style={{
                  gap: 10,
                  marginTop: 18,
                  paddingTop: 18,
                  borderTop: "1px solid var(--border)",
                }}
              >
                {f.pills.map((p) => (
                  <span
                    key={p}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "rgba(255, 255, 255, 0.85)",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border)",
                      borderRadius: 5,
                      padding: "5px 12px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
