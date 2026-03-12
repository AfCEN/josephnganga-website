"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Bio Content ─── */

const SHORT_BIO = `Joseph Nganga is the Founder & CEO of the Africa Climate and Energy Nexus (AfCEN), former Mission 300 Special Envoy, former VP for Africa at GEAPP, and CEO of Kenya\u2019s inaugural Africa Climate Summit. A pioneer in Africa\u2019s energy transition, he has mobilised billions in climate and energy investment across the continent.`;

const MEDIUM_BIO = `Joseph Nganga is the Founder and CEO of the Africa Climate and Energy Nexus (AfCEN) and one of Africa\u2019s most prominent figures in energy access and climate finance. He recently served as the Mission 300 Special Envoy \u2014 the World Bank and AfDB initiative to connect 300 million Africans to electricity by 2030 \u2014 and as Vice President for Africa at the Global Energy Alliance for People and Planet (GEAPP), where he helped mobilise over $50 billion in energy investment commitments and deployed $270 million across 60+ projects.

He was appointed by Kenya\u2019s President William Ruto as CEO of the inaugural Africa Climate Summit (2023), placing Africa at the heart of global climate negotiations. Earlier roles include Executive Director, Power & Climate Africa at The Rockefeller Foundation, co-founder of responsAbility Renewable Energy Holding (scaled to $121M), and founder of Renewable Energy Ventures in Nairobi.

Joseph holds a degree from Queens University of Charlotte and has completed executive education at Harvard Business School. He chairs the Funders Council at SEforALL and serves on the Governing Council of the Sustainable Energy Fund for Africa (SEFA).`;

const FULL_BIO = `Joseph Nganga is a leading voice in Africa\u2019s energy transition and climate finance landscape, with over two decades of experience spanning investment banking, entrepreneurship, institutional leadership, and high-level policy advocacy.

Most recently, Joseph served as the Mission 300 Special Envoy \u2014 the flagship World Bank and African Development Bank initiative to connect 300 million people across Africa to electricity by 2030 \u2014 and as Vice President for Africa at the Global Energy Alliance for People and Planet (GEAPP). In this dual role, he drove continental-scale mobilisation of capital and political will, helping secure over $50 billion in partner pledges at the Mission 300 Africa Energy Summit. During his tenure, GEAPP deployed over $270 million into the African energy sector, catalysing more than $500 million in additional funding across more than 60 projects, from solar-powered irrigation in Ethiopia to battery energy storage in Malawi.

Joseph is also the CEO of the inaugural Africa Climate Summit (ACS 2023), having been personally appointed to the role by H.E. President William Ruto of the Republic of Kenya. The Summit, held in Nairobi, placed Africa at the centre of the global climate conversation and produced a set of landmark commitments on green growth, carbon markets, and climate finance.

He most recently founded the Africa Climate and Energy Nexus (AfCEN), where he continues to champion Africa\u2019s climate-positive development agenda by connecting policymakers, financiers, and industry to unlock sustainable investment across the continent.

Prior to these roles, Joseph served as Executive Director, Power & Climate Africa at The Rockefeller Foundation, where he led the Foundation\u2019s energy access and climate strategy across sub-Saharan Africa. Before that, he co-founded and scaled responsAbility Renewable Energy Holding into a $121 million company that builds, owns, and operates renewable energy projects across sub-Saharan Africa. He also headed the Regional Office for Africa at responsAbility A.G., a $3 billion Swiss asset manager investing in energy, agriculture, and financial institutions.

Joseph\u2019s entrepreneurial roots go back further still: he founded Renewable Energy Ventures (REV) in Nairobi, a project development and advisory firm that developed renewable energy projects, distributed clean energy products, and supported the design and fundraising for the Kenya Climate Innovation Centre (KCIC) \u2014 a $15 million facility backing local entrepreneurs in the climate and clean energy space. He also worked with AGRA\u2019s Africa Enterprise Challenge Fund (AECF) in the REACT window, advising and investing in clean energy companies.

He began his professional career as an Investment Banker at Bank of America in Charlotte, North Carolina.

Joseph holds a Liberal Arts degree from Queens University of Charlotte and has completed the Executive Education programme on governing for nonprofits at Harvard Business School. He serves as Chair of the Funders Council at Sustainable Energy for All (SEforALL), a Governing Council Member at the Sustainable Energy Fund for Africa (SEFA), and sits on the Board of Carolina for Kibera, a Nairobi-based youth development charity.`;

/* ─── Speaking Topics ─── */

const speakingTopics = [
  {
    number: "01",
    title: "AI for Development Finance",
    subtitle: "Reimagining Capital Deployment",
  },
  {
    number: "02",
    title: "Climate Deal Structuring in Africa",
    subtitle: "Blank to Bankable",
  },
  {
    number: "03",
    title: "African Energy Transition Strategy",
    subtitle: "A Continent on Its Own Terms",
  },
  {
    number: "04",
    title: "AI-Powered Organisation Design",
    subtitle: "The Human-AI Operating System",
  },
  {
    number: "05",
    title: "EU-Africa Institutional Navigation",
    subtitle: "Bridging Two Worlds",
  },
  {
    number: "06",
    title: "Critical Minerals: Energy, Defense & Sovereignty",
    subtitle: "Africa's Strategic Moment",
  },
  {
    number: "07",
    title: "Africa and the AI Dominance Race",
    subtitle: "The Continent That Decides Who Wins",
  },
];

/* ─── Collapsible Bio Section ─── */

function BioSection({
  label,
  wordCount,
  text,
  defaultOpen,
}: {
  label: string;
  wordCount: string;
  text: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div
      style={{
        border: "1px solid rgba(30, 45, 69, 0.6)",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "16px",
        background: "rgba(14, 21, 37, 0.5)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 28px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              color: "#f8fafc",
              fontSize: "1.0625rem",
              fontWeight: 700,
            }}
          >
            {label}
          </span>
          <span
            style={{
              color: "#64748b",
              fontSize: "0.8125rem",
              fontWeight: 500,
              background: "rgba(212, 168, 83, 0.08)",
              border: "1px solid rgba(212, 168, 83, 0.15)",
              borderRadius: "20px",
              padding: "2px 12px",
            }}
          >
            {wordCount}
          </span>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="#d4a853"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          style={{
            padding: "0 28px 24px",
            borderTop: "1px solid rgba(30, 45, 69, 0.4)",
          }}
        >
          <div
            style={{
              color: "#94a3b8",
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              whiteSpace: "pre-line",
              paddingTop: "20px",
            }}
          >
            {text}
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(text);
            }}
            style={{
              marginTop: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(212, 168, 83, 0.08)",
              border: "1px solid rgba(212, 168, 83, 0.2)",
              borderRadius: "6px",
              padding: "8px 16px",
              color: "#d4a853",
              fontSize: "0.8125rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.background =
                "rgba(212, 168, 83, 0.15)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.background =
                "rgba(212, 168, 83, 0.08)")
            }
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect
                x="4.5"
                y="4.5"
                width="8"
                height="8"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M9.5 4.5V2.5a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h2"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Page ─── */

export default function PressKitPage() {
  return (
    <div
      style={{
        background: "#0a0f1a",
        minHeight: "100vh",
        color: "#f8fafc",
        fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
      }}
    >
      {/* ── Nav Bar ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10, 15, 26, 0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(30, 45, 69, 0.4)",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#d4a853",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            josephnganga.com
          </Link>
          <span
            style={{
              color: "#475569",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Press Kit
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        style={{
          padding: "100px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "800px",
            height: "800px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 60%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{ width: "48px", height: "2px", background: "#d4a853" }}
            />
            <span
              style={{
                color: "#d4a853",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Media Resources
            </span>
            <div
              style={{ width: "48px", height: "2px", background: "#d4a853" }}
            />
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            Press Kit
          </h1>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.125rem",
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Official biographies, headshots, and speaking topics for Joseph
            Ng&apos;ang&apos;a. For media inquiries, please use the contact
            details below.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        {/* ── Headshots ── */}
        <section style={{ marginBottom: "80px" }}>
          <SectionHeader title="Headshots" />
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              marginBottom: "32px",
            }}
          >
            High-resolution headshots for editorial and event use. Right-click
            or tap to download.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            <HeadshotCard
              src="/headshots/joseph-nganga-hero.jpg"
              label="Primary Headshot"
              filename="joseph-nganga-hero.jpg"
            />
            <HeadshotCard
              src="/headshots/joseph-nganga-secondary.jpg"
              label="Secondary Headshot"
              filename="joseph-nganga-secondary.jpg"
            />
          </div>
        </section>

        {/* ── Bios ── */}
        <section style={{ marginBottom: "80px" }}>
          <SectionHeader title="Biography" />
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              marginBottom: "32px",
            }}
          >
            Select the version that best fits your publication or event
            programme. Click to expand and copy.
          </p>
          <BioSection
            label="Full Bio"
            wordCount="~500 words"
            text={FULL_BIO}
          />
          <BioSection
            label="Medium Bio"
            wordCount="~200 words"
            text={MEDIUM_BIO}
          />
          <BioSection
            label="Short Bio"
            wordCount="~50 words"
            text={SHORT_BIO}
            defaultOpen
          />
        </section>

        {/* ── Speaking Topics ── */}
        <section style={{ marginBottom: "80px" }}>
          <SectionHeader title="Speaking Topics" />
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              marginBottom: "32px",
            }}
          >
            Joseph speaks at global conferences, institutional forums, and
            private leadership gatherings. Each topic is drawn from direct
            practitioner experience.
          </p>
          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {speakingTopics.map((topic) => (
              <div
                key={topic.number}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "20px 24px",
                  background: "rgba(14, 21, 37, 0.5)",
                  border: "1px solid rgba(30, 45, 69, 0.5)",
                  borderRadius: "10px",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(212, 168, 83, 0.25)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(30, 45, 69, 0.5)")
                }
              >
                <span
                  style={{
                    color: "#d4a853",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {topic.number}
                </span>
                <div>
                  <span
                    style={{
                      color: "#f8fafc",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                    }}
                  >
                    {topic.title}
                  </span>
                  <span
                    style={{
                      color: "#64748b",
                      fontSize: "0.875rem",
                      marginLeft: "8px",
                      fontStyle: "italic",
                    }}
                  >
                    {topic.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Media Contact ── */}
        <section style={{ marginBottom: "100px" }}>
          <SectionHeader title="Media Contact" />
          <div
            style={{
              padding: "40px",
              background: "rgba(14, 21, 37, 0.5)",
              border: "1px solid rgba(212, 168, 83, 0.12)",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              For press inquiries, interview requests, or speaking
              engagements:
            </p>
            <a
              href="mailto:joseph.nganga@africacen.org"
              style={{
                color: "#d4a853",
                fontSize: "1.125rem",
                fontWeight: 700,
                textDecoration: "none",
                borderBottom: "1px solid rgba(212, 168, 83, 0.3)",
                paddingBottom: "2px",
                transition: "border-color 0.2s ease",
              }}
            >
              joseph.nganga@africacen.org
            </a>
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://josephnganga.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#64748b",
                  fontSize: "0.8125rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#d4a853")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#64748b")
                }
              >
                josephnganga.com
              </a>
              <a
                href="https://x.com/ngangaj"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#64748b",
                  fontSize: "0.8125rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#d4a853")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#64748b")
                }
              >
                @ngangaj
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(30, 45, 69, 0.4)",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#475569", fontSize: "0.8125rem" }}>
          &copy; {new Date().getFullYear()} Joseph Ng&apos;ang&apos;a. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

/* ─── Shared Components ─── */

function SectionHeader({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px",
      }}
    >
      <div style={{ width: "48px", height: "2px", background: "#d4a853" }} />
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 800,
          color: "#f8fafc",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function HeadshotCard({
  src,
  label,
  filename,
}: {
  src: string;
  label: string;
  filename: string;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(30, 45, 69, 0.6)",
        borderRadius: "12px",
        overflow: "hidden",
        background: "rgba(14, 21, 37, 0.5)",
        transition: "border-color 0.25s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "3/4",
          background: `url(${src}) center/cover no-repeat`,
          borderBottom: "1px solid rgba(30, 45, 69, 0.4)",
        }}
      />
      <div
        style={{
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "#94a3b8",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          {label}
        </span>
        <a
          href={src}
          download={filename}
          style={{
            color: "#d4a853",
            fontSize: "0.8125rem",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 2v8M4 7l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 11h10"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
          Download
        </a>
      </div>
    </div>
  );
}
