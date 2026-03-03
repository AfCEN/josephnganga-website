"use client";

import { RefObject } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timeline = [
  {
    year: "2024–",
    role: "CEO & Founder",
    org: "AfCEN (Africa Climate & Energy Nexus)",
    desc: "Building AI-powered infrastructure that connects African energy projects to global capital across 54 markets — spanning investment intelligence, regulatory monitoring, and satellite-verified project tracking.",
  },
  {
    year: "2023–",
    role: "Mission 300 Special Envoy",
    org: "African Development Bank & World Bank Group",
    desc: "Official representative engaging heads of state and ministers to secure Africa Energy Compacts, supporting the electrification of 300 million people by 2030.",
  },
  {
    year: "2023",
    role: "CEO, Inaugural Africa Climate Summit",
    org: "Appointed by H.E. President William Ruto of Kenya",
    desc: "Led the first-ever Africa Climate Summit hosted in Nairobi, convening African heads of state, global institutions, and private sector leaders.",
  },
  {
    year: "2021–2023",
    role: "Vice President for Africa",
    org: "Global Energy Alliance for People & Planet (GEAPP)",
    desc: "Oversaw Africa strategy for a major philanthropic initiative targeting clean energy access for underserved communities.",
  },
  {
    year: "2019–2021",
    role: "Executive Director, Power & Climate Africa",
    org: "The Rockefeller Foundation",
    desc: "Led the Foundation's climate and energy programme across Africa, deploying capital and expertise across the continent's energy transition.",
  },
  {
    year: "2014–2019",
    role: "Co-founder & Executive Director",
    org: "responsAbility Renewable Energy Holding (rAREH)",
    desc: "Grew the company to $121M, building, owning, and operating renewable energy projects across sub-Saharan Africa.",
  },
  {
    year: "2012–2014",
    role: "Head, Regional Office for Africa",
    org: "responsAbility AG",
    desc: "Led Africa operations for the $3B Swiss asset manager investing in Energy, Agriculture, and Financial Institutions.",
  },
  {
    year: "2008–2012",
    role: "Founder",
    org: "Renewable Energy Ventures (REV)",
    desc: "Project development and advisory in Nairobi. Led development of the Kenya Climate Innovation Centre (KCIC) — a $15M facility supporting clean energy entrepreneurs.",
  },
  {
    year: "Early career",
    role: "Investment Banker",
    org: "Bank of America",
    desc: "Charlotte, NC. Career foundation in structured finance and capital markets.",
  },
];

const institutions = [
  "African Development Bank",
  "World Bank Group",
  "European Investment Bank",
  "European Parliament",
  "ECOWAS",
  "UNDP",
  "SE4ALL",
  "GEAPP",
  "Rockefeller Foundation",
  "Africa50",
  "Enabel / GIZ",
  "Google X",
  "Acumen Academy",
];

const boardRoles = [
  { title: "Chair, Funders Council", org: "Sustainable Energy for All (SE4ALL)" },
  { title: "Governing Council Member", org: "Sustainable Energy Fund for Africa (SEFA)" },
  { title: "Board Member", org: "Carolina for Kibera" },
];

export default function About() {
  const sectionRef = useScrollAnimation() as RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: "#0a0f1a",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Section header */}
        <div
          className="fade-up"
          style={{ marginBottom: "64px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
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
              Background
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            About Joseph
          </h2>
        </div>

        {/* Bio text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            marginBottom: "96px",
          }}
        >
          <div
            className="fade-up stagger-1"
            style={{
              maxWidth: "800px",
            }}
          >
            <p
              style={{
                color: "#cbd5e1",
                fontSize: "1.1875rem",
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              Joseph Nganga is the Founder and CEO of{" "}
              <span style={{ color: "#d4a853", fontWeight: 600 }}>
                AfCEN (Africa Climate &amp; Energy Nexus)
              </span>
              , where he&apos;s building AI-powered infrastructure that connects African energy
              projects to global capital. AfCEN&apos;s platform — spanning investment
              intelligence, regulatory monitoring, and satellite-verified project tracking —
              operates across 54 African markets.
            </p>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              Before AfCEN, Joseph built deep expertise at the intersection of energy project
              development, institutional finance, and digital systems across Africa and Europe.
              He currently serves as{" "}
              <span style={{ color: "#d4a853", fontWeight: 500 }}>
                Mission 300 Special Envoy
              </span>{" "}
              for the AfDB and World Bank Group — engaging heads of state and ministers to
              secure Africa Energy Compacts with the goal of electrifying 300 million people by
              2030.
            </p>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              In 2023, Joseph was appointed by{" "}
              <span style={{ color: "#d4a853", fontWeight: 500 }}>
                H.E. President William Ruto
              </span>{" "}
              of Kenya as CEO of the inaugural Africa Climate Summit — convening African heads
              of state, the world&apos;s leading development finance institutions, and the private
              sector on African soil.
            </p>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
              }}
            >
              Joseph advises governments, DFIs, and multilaterals on climate investment
              strategy, AI-powered organisation design, and African energy transition pathways.
              He is a sought-after speaker who has engaged with institutions including the
              African Development Bank, European Investment Bank, European Parliament, ECOWAS,
              UNDP, Enabel, Google X, and Africa50.
            </p>
          </div>

          {/* Board roles */}
          <div
            className="fade-up stagger-2"
            style={{
              background: "rgba(14, 21, 37, 0.6)",
              border: "1px solid rgba(30, 45, 69, 0.6)",
              borderRadius: "12px",
              padding: "32px",
              maxWidth: "480px",
            }}
          >
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#d4a853",
                marginBottom: "20px",
              }}
            >
              Board &amp; Council Roles
            </h3>
            {boardRoles.map((role) => (
              <div
                key={role.org}
                style={{
                  paddingBottom: "16px",
                  marginBottom: "16px",
                  borderBottom: "1px solid rgba(30, 45, 69, 0.4)",
                }}
              >
                <div
                  style={{
                    color: "#f8fafc",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    marginBottom: "2px",
                  }}
                >
                  {role.title}
                </div>
                <div
                  style={{
                    color: "#64748b",
                    fontSize: "0.875rem",
                  }}
                >
                  {role.org}
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: "8px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(30, 45, 69, 0.4)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#d4a853",
                  marginBottom: "16px",
                }}
              >
                Education
              </h3>
              <div style={{ marginBottom: "10px" }}>
                <div style={{ color: "#f8fafc", fontWeight: 600, fontSize: "0.9375rem" }}>
                  Liberal Arts
                </div>
                <div style={{ color: "#64748b", fontSize: "0.875rem" }}>
                  Queens University of Charlotte
                </div>
              </div>
              <div>
                <div style={{ color: "#f8fafc", fontWeight: 600, fontSize: "0.9375rem" }}>
                  Executive Education — Governing for Nonprofits
                </div>
                <div style={{ color: "#64748b", fontSize: "0.875rem" }}>
                  Harvard Business School
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="fade-up stagger-3" style={{ marginBottom: "96px" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#f8fafc",
              marginBottom: "48px",
              letterSpacing: "-0.01em",
            }}
          >
            Career Timeline
          </h3>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "90px",
                top: "12px",
                bottom: "12px",
                width: "1px",
                background: "linear-gradient(to bottom, #d4a853, rgba(212,168,83,0.1))",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`fade-up stagger-${Math.min(i + 1, 5)}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "90px 1fr",
                    gap: "32px",
                    alignItems: "start",
                  }}
                >
                  {/* Year */}
                  <div style={{ textAlign: "right", paddingRight: "28px", position: "relative" }}>
                    <span
                      style={{
                        color: "#d4a853",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.year}
                    </span>
                    {/* Dot */}
                    <div
                      style={{
                        position: "absolute",
                        right: "-5px",
                        top: "6px",
                        width: "9px",
                        height: "9px",
                        borderRadius: "50%",
                        background: "#d4a853",
                        border: "2px solid #0a0f1a",
                        boxShadow: "0 0 0 2px rgba(212,168,83,0.3)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="card-hover"
                    style={{
                      background: "rgba(14, 21, 37, 0.4)",
                      border: "1px solid rgba(30, 45, 69, 0.4)",
                      borderRadius: "8px",
                      padding: "20px 24px",
                    }}
                  >
                    <div
                      style={{
                        color: "#f8fafc",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        marginBottom: "2px",
                      }}
                    >
                      {item.role}
                    </div>
                    <div
                      style={{
                        color: "#d4a853",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        marginBottom: "8px",
                      }}
                    >
                      {item.org}
                    </div>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Institutional Engagements */}
        <div className="fade-up">
          <h3
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#475569",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Institutional Engagements &amp; Collaborations
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {institutions.map((inst) => (
              <span
                key={inst}
                style={{
                  padding: "8px 18px",
                  border: "1px solid rgba(30, 45, 69, 0.6)",
                  borderRadius: "100px",
                  color: "#94a3b8",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  background: "rgba(14, 21, 37, 0.4)",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLSpanElement).style.borderColor = "rgba(212,168,83,0.4)";
                  (e.target as HTMLSpanElement).style.color = "#d4a853";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLSpanElement).style.borderColor = "rgba(30, 45, 69, 0.6)";
                  (e.target as HTMLSpanElement).style.color = "#94a3b8";
                }}
              >
                {inst}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
