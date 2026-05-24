import { Container } from "../container";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-center py-[140px] max-[960px]:py-20"
      style={{ background: "var(--bg-elevated)" }}
    >
      {/* Lime radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "50%",
          left: "50%",
          width: 900,
          height: 450,
          background:
            "radial-gradient(ellipse, rgba(193, 255, 114, 0.08) 0%, transparent 62%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Container>
        <div className="relative">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--lime)",
              marginBottom: 22,
            }}
          >
            Get started
          </div>
          <h2
            className="font-bold [font-size:48px] max-[960px]:[font-size:30px]"
            style={{
              fontFamily: "var(--font-display)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 18,
            }}
          >
            Ready to deploy SKYLR OS?
          </h2>
          <p
            className="mx-auto max-w-[560px]"
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "var(--text-secondary)",
              marginBottom: 40,
            }}
          >
            Request access for a platform walkthrough
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:info@skylrpartners.com"
              className="inline-flex items-center"
              style={{
                background: "var(--lime)",
                color: "#1E1E1E",
                fontWeight: 600,
                fontSize: 16,
                padding: "16px 32px",
                borderRadius: 10,
                gap: 8,
              }}
            >
              Request platform access →
            </a>
            <a
              href="mailto:info@skylrpartners.com"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                color: "var(--text-muted)",
              }}
            >
              or email info@skylrpartners.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
