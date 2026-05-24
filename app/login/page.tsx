import Image from "next/image";

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

        <form action="/api/login" method="POST" className="flex flex-col gap-4">
          <input type="hidden" name="next" value={next} />
          <label htmlFor="password" className="sr-only">
            Access code
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            autoFocus
            placeholder="Access code"
            style={{
              background: "var(--bg-elevated)",
              border: `1px solid ${hasError ? "var(--danger)" : "var(--border-strong)"}`,
              borderRadius: 8,
              padding: "12px 14px",
              fontSize: 15,
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
              outline: "none",
            }}
          />
          {hasError && (
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--danger)",
              }}
            >
              Incorrect access code. Try again.
            </div>
          )}
          <button
            type="submit"
            style={{
              background: "var(--lime)",
              color: "#1E1E1E",
              fontWeight: 600,
              fontSize: 15,
              padding: "12px 24px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </form>

        <p
          className="mt-6"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-muted)",
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
