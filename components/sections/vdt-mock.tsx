export default function VdtMock() {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 18,
        padding: 24,
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between"
        style={{
          paddingBottom: 18,
          borderBottom: "1px solid var(--border)",
          marginBottom: 22,
        }}
      >
        <div className="flex items-center gap-[10px]">
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--lime)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Meridian SaaS · FY26 Revenue Plan
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--lime)",
            background: "var(--lime-soft)",
            padding: "4px 10px",
            borderRadius: 6,
          }}
        >
          SKYLR OS
        </span>
      </div>

      {/* Root node */}
      <div
        style={{
          background: "rgba(193, 255, 114, 0.05)",
          border: "1px solid var(--lime-line)",
          borderRadius: 10,
          padding: "14px 16px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-muted)",
            marginBottom: 4,
          }}
        >
          TOTAL REVENUE · ROOT
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 700,
            color: "var(--lime)",
          }}
        >
          $480M
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-secondary)",
            marginTop: 4,
          }}
        >
          Target $580M{" "}
          <span style={{ color: "var(--danger)" }}>· Gap −17%</span>
        </div>
      </div>

      {/* Connector */}
      <svg
        viewBox="0 0 300 18"
        preserveAspectRatio="none"
        style={{ width: "100%", height: 18, margin: "6px 0" }}
        aria-hidden="true"
      >
        <line x1="150" y1="0" x2="150" y2="6" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="50" y1="6" x2="250" y2="6" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="50" y1="6" x2="50" y2="14" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="150" y1="6" x2="150" y2="14" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="250" y1="6" x2="250" y2="14" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      </svg>

      {/* Children */}
      <div className="grid grid-cols-3 gap-2">
        <ChildNode label="NEW ARR" value="$120M" meta="+18% YoY" metaColor="var(--lime)" />
        <ChildNode label="EXPANSION" value="$180M" meta="+24% YoY" metaColor="var(--lime)" />
        <ChildNode label="RETAINED" value="$180M" meta="−4% YoY" metaColor="var(--danger)" />
      </div>
    </div>
  );
}

function ChildNode({
  label,
  value,
  meta,
  metaColor,
}: {
  label: string;
  value: string;
  meta: string;
  metaColor: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: "14px 16px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--text-muted)",
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--text-secondary)",
          marginTop: 4,
        }}
      >
        <span style={{ color: metaColor }}>{meta}</span>
      </div>
    </div>
  );
}
