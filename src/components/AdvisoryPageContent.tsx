"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "DFI Market Access",
    description:
      "Positioning for multilateral capital (AfDB, World Bank, EIB, KfW, OFID, bilateral DFIs), structuring proposals, and navigating procurement and co-financing channels.",
  },
  {
    title: "Institutional & Policy Positioning",
    description:
      "Aligning company capabilities with active sovereign and regional initiatives across ECOWAS, AUDA-NEPAD (54 AU member states), and bilateral frameworks.",
  },
  {
    title: "Capital Mobilization Strategy",
    description:
      "Connecting pipeline-ready projects to the right funding instruments — concessional, blended, commercial, and grant — with the intelligence layer to match.",
  },
];

const credentials = [
  "CEO & Founder, AfCEN (Africa Climate and Energy Nexus) — Africa\u2019s infrastructure intelligence layer",
  "Co-Executive Secretariat, ECOWAS West Africa Investment & Infrastructure Summit",
  "MoU with AUDA-NEPAD covering all 54 African Union member states",
  "Former CEO, Africa Climate Summit 2023 ($26B in commitments)",
  "Former Special Envoy, Mission 300 (AfDB/World Bank, $50B+ in commitments)",
  "Co-founder, responsAbility Renewable Energy Holding (now Serengeti Energy)",
];

const engagements = [
  {
    title: "Retainer Advisory",
    description:
      "Ongoing strategic counsel for companies navigating DFI and institutional channels. Monthly retainer basis.",
  },
  {
    title: "Board & Advisory Seats",
    description:
      "For companies at the intersection of energy, critical minerals, digital transformation, and African infrastructure. Equity-based.",
  },
  {
    title: "Deal Origination & Capital Mobilization",
    description:
      "Success-based engagement for companies with pipeline-ready projects seeking institutional or blended capital.",
  },
];

export default function AdvisoryPageContent() {
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0a0f1a",
        paddingTop: "160px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(212,168,83,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
        {/* ── Headline ── */}
        <div className="fade-up" style={{ marginBottom: "64px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="gold-line" />
            <span
              style={{
                color: "#d4a853",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Advisory
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "24px",
            }}
          >
            Strategic Advisory for African Infrastructure & Technology Companies
          </h1>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "640px",
            }}
          >
            Helping founders and leadership teams navigate Africa&apos;s
            institutional capital landscape — from DFIs and multilateral banks to
            sovereign initiatives and policy frameworks.
          </p>
        </div>

        {/* ── Section 1: What I Do ── */}
        <div className="fade-up" style={{ marginBottom: "72px" }}>
          <h2
            style={{
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.01em",
              marginBottom: "12px",
            }}
          >
            What I Do
          </h2>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            I advise African technology and infrastructure companies on three
            things:
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`fade-up stagger-${i + 1}`}
                style={{
                  paddingLeft: "24px",
                  borderLeft: "2px solid rgba(212,168,83,0.3)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "#f8fafc",
                    marginBottom: "8px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "rgba(212,168,83,0.25)",
            marginBottom: "72px",
          }}
        />

        {/* ── Section 2: Why This Exists ── */}
        <div className="fade-up" style={{ marginBottom: "72px" }}>
          <h2
            style={{
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}
          >
            Why This Exists
          </h2>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            Africa&apos;s infrastructure gap is an intelligence problem, not a
            capital problem. Billions are committed but pipelines don&apos;t move
            because founders and project developers can&apos;t navigate the
            institutional architecture. I&apos;ve spent 18 years inside that
            architecture — co-founding platforms, mobilizing capital, and building
            the relationships that connect ambition to deployment.
          </p>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "rgba(212,168,83,0.25)",
            marginBottom: "72px",
          }}
        />

        {/* ── Section 3: Credentials ── */}
        <div className="fade-up" style={{ marginBottom: "72px" }}>
          <h2
            style={{
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.01em",
              marginBottom: "28px",
            }}
          >
            Credentials
          </h2>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {credentials.map((item, i) => (
              <li
                key={i}
                className={`fade-up stagger-${Math.min(i + 1, 5)}`}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#d4a853",
                    flexShrink: 0,
                    marginTop: "8px",
                    opacity: 0.7,
                  }}
                />
                <span
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "rgba(212,168,83,0.25)",
            marginBottom: "72px",
          }}
        />

        {/* ── Section 4: Engagement Models ── */}
        <div className="fade-up" style={{ marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.01em",
              marginBottom: "32px",
            }}
          >
            Engagement Models
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            {engagements.map((eng, i) => (
              <div
                key={eng.title}
                className={`fade-up stagger-${i + 1}`}
                style={{
                  paddingLeft: "24px",
                  borderLeft: "2px solid rgba(212,168,83,0.3)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "#f8fafc",
                    marginBottom: "8px",
                  }}
                >
                  {eng.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                  }}
                >
                  {eng.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="fade-up"
          style={{
            padding: "40px",
            background: "rgba(14, 21, 37, 0.6)",
            border: "1px solid rgba(30, 45, 69, 0.5)",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            To discuss an engagement, reach out at
          </p>
          <a
            href="mailto:joseph.nganga@africacen.org"
            className="btn-gold"
            style={{
              textDecoration: "none",
              display: "inline-flex",
            }}
          >
            joseph.nganga@africacen.org
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
