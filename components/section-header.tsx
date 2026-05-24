import type { ReactNode } from "react";

export function Section({
  children,
  alt,
  id,
  className,
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-[120px] max-[960px]:py-20 ${className ?? ""}`}
      style={alt ? { background: "var(--bg-elevated)" } : undefined}
    >
      {children}
    </section>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--lime)",
        marginBottom: 18,
      }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-bold mb-[18px] max-w-[920px] [font-size:44px] max-[960px]:[font-size:30px]"
      style={{
        fontFamily: "var(--font-display)",
        lineHeight: 1.1,
        letterSpacing: "-0.022em",
        color: "var(--text-primary)",
      }}
    >
      {children}
    </h2>
  );
}

export function SectionIntro({ children }: { children: ReactNode }) {
  return (
    <p
      className="max-w-[720px] mb-16"
      style={{
        fontSize: 18,
        lineHeight: 1.6,
        color: "var(--text-secondary)",
      }}
    >
      {children}
    </p>
  );
}
