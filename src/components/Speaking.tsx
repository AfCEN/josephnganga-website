"use client";

import { RefObject } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const topics = [
  {
    number: "01",
    title: "AI for Development Finance",
    subtitle: "Reimagining Capital Deployment",
    description:
      "How large language models, satellite intelligence, and predictive analytics are transforming how DFIs source, structure, and monitor climate and energy investments across emerging markets. A practical framework from the AfCEN platform.",
    audience: "DFIs · Institutional Investors · Multilaterals",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#d4a853" strokeWidth="1.5" />
        <path d="M9 14l3 3 7-7" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="7" r="3" fill="rgba(212,168,83,0.2)" stroke="#d4a853" strokeWidth="1.5" />
        <circle cx="7" cy="21" r="3" fill="rgba(212,168,83,0.2)" stroke="#d4a853" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Climate Deal Structuring in Africa",
    subtitle: '"Blank to Bankable"',
    description:
      "What it actually takes to turn an African climate or energy project from concept to financial close — navigating DFI mandate alignment, blended finance mechanisms, currency risk, and the institutional decision chains that determine whether capital flows.",
    audience: "Project Developers · Fund Managers · Governments",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L10 14L16 18L22 8" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="14" r="2" fill="#d4a853" />
        <circle cx="16" cy="18" r="2" fill="#d4a853" />
        <circle cx="22" cy="8" r="2" fill="#d4a853" />
        <path d="M4 6v16h20" stroke="rgba(212,168,83,0.4)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "African Energy Transition Strategy",
    subtitle: "A Continent on Its Own Terms",
    description:
      "Africa&apos;s energy transition is not Europe&apos;s energy transition. This talk reframes the debate: leapfrogging vs. baseload needs, the politics of Just Transition, the role of natural gas as a bridge fuel, and what a genuinely African transition pathway looks like.",
    audience: "Policymakers · Energy Sector · Development Community",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="6" stroke="#d4a853" strokeWidth="1.5" />
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.05 7.05l2.12 2.12M18.83 18.83l2.12 2.12M7.05 20.95l2.12-2.12M18.83 9.17l2.12-2.12" stroke="rgba(212,168,83,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "AI-Powered Organisation Design",
    subtitle: "The Human-AI Operating System",
    description:
      "Drawing on AfCEN&apos;s own architecture — a company where AI agents execute research, analysis, and monitoring at scale — this talk explores how mission-driven organisations can restructure for the AI era without losing institutional knowledge or human judgment.",
    audience: "CEOs · Leadership Teams · Board Members",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="5" width="7" height="7" rx="2" stroke="#d4a853" strokeWidth="1.5" />
        <rect x="16" y="5" width="7" height="7" rx="2" stroke="#d4a853" strokeWidth="1.5" />
        <rect x="5" y="16" width="7" height="7" rx="2" stroke="#d4a853" strokeWidth="1.5" />
        <rect x="16" y="16" width="7" height="7" rx="2" stroke="#d4a853" strokeWidth="1.5" />
        <path d="M12 8.5h4M12 19.5h4M8.5 12v4M19.5 12v4" stroke="rgba(212,168,83,0.5)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "EU-Africa Institutional Navigation",
    subtitle: "Bridging Two Worlds",
    description:
      "A practitioner&apos;s guide to how African entities can effectively engage European institutions — the EIB, European Parliament, Enabel, DG INTPA — to unlock capital, technical assistance, and policy alignment. Based on direct experience at the highest levels of EU-Africa diplomacy.",
    audience: "African Governments · NGOs · Private Sector",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#d4a853" strokeWidth="1.5" />
        <path d="M14 5c-3 3-5 5.5-5 9s2 6 5 9" stroke="rgba(212,168,83,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 5c3 3 5 5.5 5 9s-2 6-5 9" stroke="rgba(212,168,83,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.5 10h17M5.5 18h17" stroke="rgba(212,168,83,0.4)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Critical Minerals: Energy, Defense & Sovereignty",
    subtitle: "Africa&apos;s Strategic Moment",
    description:
      "Africa holds 30%+ of the world&apos;s critical mineral reserves — cobalt, lithium, rare earths, platinum group metals essential not just for clean energy, but for every advanced weapons system, semiconductor, and AI chip on earth. This talk makes the national security case that Western governments cannot afford to miss: the African minerals race is already underway, China has a 20-year head start, and intelligence infrastructure is the decisive advantage.",
    audience: "Defense · National Security · Sovereign Investors · Policy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polygon points="14,3 25,20 3,20" stroke="#d4a853" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <circle cx="14" cy="15" r="3" stroke="#d4a853" strokeWidth="1.5" />
        <path d="M14 12v-5" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 20l-3 4M20 20l3 4" stroke="rgba(212,168,83,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Africa and the AI Dominance Race",
    subtitle: "The Continent That Decides Who Wins",
    description:
      "AI dominance requires chips. Chips require rare earths, cobalt, and tantalum. Africa has them. Africa is also the largest remaining untapped data market — 1.4 billion people rapidly digitising — and whoever builds the AI infrastructure there gains both the supply chain and the training data advantage simultaneously. This talk maps Africa&apos;s pivotal role in the US-China AI competition, and what it means for investors, governments, and technology companies operating on the continent.",
    audience: "Tech Giants · AI Policy · Governments · Venture Capital",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="8" width="12" height="12" rx="2" stroke="#d4a853" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="3" stroke="#d4a853" strokeWidth="1.5" />
        <path d="M8 11H4M8 14H4M8 17H4M20 11h4M20 14h4M20 17h4M11 8V4M14 8V4M17 8V4M11 20v4M14 20v4M17 20v4" stroke="rgba(212,168,83,0.5)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Speaking() {
  const sectionRef = useScrollAnimation() as RefObject<HTMLElement>;

  return (
    <section
      id="speaking"
      ref={sectionRef}
      style={{
        background: "#0e1525",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          right: "-15%",
          width: "600px",
          height: "600px",
          transform: "translateY(-50%)",
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
        <div className="fade-up" style={{ marginBottom: "64px" }}>
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
              Keynotes &amp; Panels
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Speaking Topics
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "1.0625rem",
              maxWidth: "560px",
              lineHeight: 1.6,
            }}
          >
            Joseph speaks to executive audiences at global conferences, institutional
            forums, and private leadership gatherings. Each topic is drawn from direct
            practitioner experience — not theory.
          </p>
        </div>

        {/* Topics grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {topics.map((topic, i) => (
            <div
              key={topic.number}
              className={`fade-up stagger-${Math.min(i + 1, 5)} card-hover`}
              style={{
                background: "rgba(10, 15, 26, 0.7)",
                border: "1px solid rgba(30, 45, 69, 0.5)",
                borderRadius: "12px",
                padding: "32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Number watermark */}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "24px",
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  color: "rgba(212,168,83,0.05)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                }}
              >
                {topic.number}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: "rgba(212,168,83,0.06)",
                  border: "1px solid rgba(212,168,83,0.15)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {topic.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: "4px",
                  lineHeight: 1.3,
                }}
              >
                {topic.title}
              </h3>
              <p
                style={{
                  color: "#d4a853",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  marginBottom: "14px",
                  fontStyle: "italic",
                }}
                dangerouslySetInnerHTML={{ __html: topic.subtitle }}
              />

              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
                dangerouslySetInnerHTML={{ __html: topic.description }}
              />

              {/* Audience tag */}
              <div
                style={{
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(30, 45, 69, 0.4)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#475569",
                  }}
                >
                  Audience ·{" "}
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#94a3b8",
                  }}
                >
                  {topic.audience}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Speaking inquiry CTA */}
        <div
          className="fade-up"
          style={{
            marginTop: "64px",
            padding: "40px 48px",
            background: "rgba(14, 21, 37, 0.5)",
            border: "1px solid rgba(212,168,83,0.12)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#f8fafc",
                marginBottom: "6px",
              }}
            >
              Book Joseph for Your Event
            </h3>
            <p style={{ color: "#64748b", fontSize: "0.9375rem" }}>
              Conferences, leadership retreats, board offsites, and institutional
              forums worldwide.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#contact");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 72;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="btn-gold"
            style={{ textDecoration: "none" }}
          >
            Speaking Inquiry
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
