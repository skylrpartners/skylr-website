import Image from "next/image";
import { Container } from "../container";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-[100] backdrop-blur-[14px]"
      style={{
        background: "rgba(30, 30, 30, 0.78)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-[68px]">
          <a
            href="#"
            className="flex items-center gap-3"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 18,
              color: "var(--text-primary)",
            }}
          >
            <Image
              src="/images/skylr-logo.png"
              alt="SKYLR"
              width={40}
              height={26}
              priority
            />
            SKYLR
          </a>
          <a
            href="#contact"
            style={{
              background: "var(--lime)",
              color: "#1E1E1E",
              fontWeight: 600,
              fontSize: 14,
              padding: "10px 20px",
              borderRadius: 8,
            }}
          >
            Request platform access
          </a>
        </div>
      </Container>
    </nav>
  );
}
