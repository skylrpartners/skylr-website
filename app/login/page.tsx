import Image from "next/image";
import AccessCodeForm from "./access-code-form";

type SearchParams = Promise<{ next?: string; error?: string }>;

export const metadata = {
  title: "Sign in · SKYLR Partners",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const hasError = params.error === "1";
  const next = params.next ?? "/";

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="w-full max-w-[400px]"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 18,
          padding: 40,
        }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/images/skylr-logo.png"
            alt="SKYLR"
            width={40}
            height={26}
            priority
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 18,
              color: "var(--text-primary)",
            }}
          >
            SKYLR
          </span>
        </div>

        <h1
          className="mb-2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 24,
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          Access required
        </h1>
        <p
          className="mb-8"
          style={{
            fontSize: 14,
            lineHeight: 1.55,
            color: "var(--text-secondary)",
          }}
        >
          Enter your access code to view skylrpartners.com.
        </p>

        <AccessCodeForm next={next} hasError={hasError} />

        <p
          className="mt-6"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--meta-size)",
            color: "var(--text-secondary)",
            letterSpacing: "0.04em",
          }}
        >
          Need access? Email{" "}
          <a href="mailto:info@skylrpartners.com" style={{ color: "var(--lime)" }}>
            info@skylrpartners.com
          </a>
        </p>
      </div>
    </main>
  );
}
