"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@/components/icons";

export default function AccessCodeForm({
  next,
  hasError,
}: {
  next: string;
  hasError: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action="/api/login" method="POST" className="flex flex-col gap-4">
      <input type="hidden" name="next" value={next} />
      <label htmlFor="password" className="sr-only">
        Access code
      </label>

      <div className="relative">
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          autoFocus
          placeholder="Access code"
          style={{
            background: "var(--bg-elevated)",
            border: `1px solid ${hasError ? "var(--danger)" : "var(--border-strong)"}`,
            borderRadius: 8,
            padding: "12px 44px 12px 14px",
            fontSize: 15,
            color: "var(--text-primary)",
            fontFamily: "var(--font-mono)",
            outline: "none",
            width: "100%",
          }}
        />
        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          aria-label={showPassword ? "Hide access code" : "Show access code"}
          aria-pressed={showPassword}
          className="absolute inset-y-0 right-0 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-100"
          style={{
            width: 40,
            color: "var(--text-muted)",
            background: "transparent",
            border: "none",
            opacity: 0.75,
          }}
        >
          {showPassword ? (
            <EyeOffIcon width={18} height={18} />
          ) : (
            <EyeIcon width={18} height={18} />
          )}
        </button>
      </div>

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
  );
}
