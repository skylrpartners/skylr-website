import { Container } from "../container";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "48px 0 36px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <Container>
        <div
          className="flex flex-wrap items-center justify-between"
          style={{ gap: 16 }}
        >
          <div
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              maxWidth: 760,
              lineHeight: 1.6,
            }}
          >
            © 2026{" "}
            <strong style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
              SKYLR LLC
            </strong>{" "}
            · doing business as SKYLR Partners · All rights reserved.
            <br />
            Revenue Forensics™, Revenue Blueprint™, and Revenue Velocity™ are
            trademarks of SKYLR LLC.
          </div>
          <div
            className="flex"
            style={{ gap: 24, fontSize: 13 }}
          >
            <a
              href="mailto:info@skylrpartners.com"
              style={{ color: "var(--text-muted)" }}
            >
              Contact
            </a>
            <a href="#" style={{ color: "var(--text-muted)" }}>
              Privacy
            </a>
            <a href="#" style={{ color: "var(--text-muted)" }}>
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
