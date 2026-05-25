import { Container } from "../container";
import VdtMock from "./vdt-mock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-[120px] max-[960px]:pt-[60px] max-[960px]:pb-20">
      {/* Lime radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: -280,
          left: "50%",
          width: 900,
          height: 900,
          background:
            "radial-gradient(circle, rgba(193, 255, 114, 0.08) 0%, transparent 62%)",
          transform: "translateX(-50%)",
        }}
      />
      <Container>
        <div className="relative grid items-center grid-cols-[1.1fr_0.9fr] gap-[72px] max-[960px]:grid-cols-1 max-[960px]:gap-12">
          <div>
            <div
              className="inline-flex items-center gap-[10px] mb-7"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--lime)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--lime)",
                  boxShadow: "0 0 14px var(--lime)",
                }}
              />
              AI-Native Revenue Platform · SKYLR OS
            </div>
            <h1
              className="font-bold mb-[18px] [font-size:64px] max-[960px]:[font-size:44px]"
              style={{
                fontFamily: "var(--font-display)",
                lineHeight: 1.06,
                letterSpacing: "-0.028em",
                color: "var(--text-primary)",
              }}
            >
              The AI-native operating system for{" "}
              <span style={{ color: "var(--lime)" }}>revenue growth</span>
            </h1>
            <p
              className="mb-10 max-w-[520px]"
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--text-secondary)",
              }}
            >
              From revenue diagnostics to weekly execution: agentic AI and a
              growing suite of GTM tools on one unified platform. Onboarded in
              days, not quarters.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-[22px]">
              <a
                href="#contact"
                className="inline-flex items-center gap-2"
                style={{
                  background: "var(--lime)",
                  color: "#1E1E1E",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "14px 28px",
                  borderRadius: 10,
                }}
              >
                Request platform access →
              </a>
              <a
                href="#product"
                style={{
                  background: "transparent",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                  fontSize: 15,
                  padding: "13px 24px",
                  border: "1px solid var(--border-strong)",
                  borderRadius: 10,
                }}
              >
                See what&apos;s inside
              </a>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--meta-size)",
                color: "var(--text-secondary)",
                letterSpacing: "0.04em",
                lineHeight: 1.8,
              }}
            >
              Built for $50M–$1B+ revenue companies <CredDot /> By operators
              who scaled $90M to $30B+ <CredDot /> Amazon <CredDot /> BCG{" "}
              <CredDot /> Microsoft <CredDot /> MIT <CredDot /> Wharton
            </div>
          </div>
          <VdtMock />
        </div>
      </Container>
    </section>
  );
}

function CredDot() {
  return (
    <span style={{ color: "rgba(193, 255, 114, 0.5)", margin: "0 6px" }}>·</span>
  );
}
