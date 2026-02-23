"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const intelligenceFeeds = [
  {
    product: "FORGE",
    label: "OEM Intelligence",
    color: "#d4a853",
    icon: "⚙️",
    teaser:
      "Solar module prices across East Africa dropped 12% in Q1 2026, driven by a surge in Chinese Tier 2 supplier inventory. Three manufacturers are currently offering aggressive pricing on 400W+ panels for projects above 5MW — but warranty structures vary significantly across the cohort.",
    cta: "Access OEM Intelligence →",
    tag: "Energy Equipment",
  },
  {
    product: "INVESTIQ",
    label: "Investment Intelligence",
    color: "#60a5fa",
    icon: "📊",
    teaser:
      "Of 847 African energy projects tracked in Q1 2026, 23% advanced from pipeline to active fundraising — a 6-point improvement over Q4 2025. East Africa leads in mini-grid activity; West Africa shows strongest momentum in utility-scale solar. Blended finance structures now feature in 61% of deals reaching term sheet.",
    cta: "Access InvestIQ →",
    tag: "Deal Intelligence",
  },
  {
    product: "POLICYPULSE",
    label: "Policy Intelligence",
    color: "#34d399",
    icon: "🏛️",
    teaser:
      "Kenya's Energy and Petroleum Regulatory Authority signalled a revised feed-in tariff framework expected Q2 2026 — first update since 2020. Nigeria's NERC is reviewing distribution privatisation timelines. Tanzania's EWURA fast-tracked licensing for off-grid providers under 1MW, effective March 1.",
    cta: "Access PolicyPulse →",
    tag: "Regulatory Radar",
  },
  {
    product: "SUPPLYCHAIN360",
    label: "Agricultural Compliance",
    color: "#a78bfa",
    icon: "🌿",
    teaser:
      "EUDR enforcement resumes June 2026 after the 12-month delay. Of 340 African agricultural suppliers assessed this quarter, 41% remain non-compliant with traceability requirements. Cocoa (Ghana, Côte d'Ivoire) and coffee (Ethiopia, Uganda) supply chains face highest exposure. Certification timelines are tightening.",
    cta: "Access SupplyChain360 →",
    tag: "EUDR Watch",
  },
  {
    product: "MINERALS",
    label: "Strategic Minerals Intelligence",
    color: "#f87171",
    icon: "⛏️",
    teaser:
      "DRC cobalt spot prices rose 8% in February on renewed EV demand signals from South Korean battery manufacturers. Three new off-take agreements signed in Q1 — two with Chinese counterparties, one with a US DFC-backed vehicle. Zimbabwe lithium export restrictions remain under legal challenge; resolution expected Q3.",
    cta: "Access Minerals Intelligence →",
    tag: "Critical Minerals",
  },
];

const newsletterEditions = [
  {
    edition: "Edition #1",
    title: "I Built a 16-Agent AI Team That Runs My Company. Here's What I Learned.",
    excerpt:
      "Six months ago, I handed the operational management of my company to artificial intelligence. Not a chatbot. Not a copilot. Sixteen autonomous AI agents — each with a defined role, decision-making authority, and the ability to communicate with each other.",
    readTime: "7 min read",
    status: "upcoming",
  },
  {
    edition: "Edition #2",
    title: "The Bankability Gap: Why 73% of African Energy Projects Never Close",
    excerpt:
      "The bottleneck in African infrastructure finance isn't capital. There is more patient capital chasing African assets than at any point in history. The bottleneck is intelligence — and the institutional machinery that turns a committed dollar into a deployed one.",
    readTime: "6 min read",
    status: "upcoming",
  },
  {
    edition: "Edition #3",
    title: "China Owns the Supply Chain. Africa Has the Minerals. Here's How That Changes.",
    excerpt:
      "The DRC alone holds 70% of global cobalt — essential for every F-35 avionics system, guided munition, EV battery, and AI chip on earth. China spent 20 years building the relationships to control access. The US has the rhetoric but not the intelligence infrastructure to compete.",
    readTime: "8 min read",
    status: "upcoming",
  },
];

export default function Insights() {
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"newsletter" | "intelligence">("newsletter");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubscribed(true);
    setLoading(false);
  };

  return (
    <section
      id="insights"
      ref={sectionRef}
      style={{
        background: "#080d18",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div aria-hidden style={{
        position: "absolute", top: "30%", left: "-10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div className="fade-up" style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div className="gold-line" />
            <span style={{ color: "#d4a853", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Intelligence & Insights
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f8fafc", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            The Nexus Brief
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.0625rem", maxWidth: "600px", lineHeight: 1.6 }}>
            Weekly intelligence at the intersection of African infrastructure, critical minerals, AI systems, and global capital — plus live snapshots from AfCEN&apos;s five intelligence platforms.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="fade-up" style={{ display: "flex", gap: "4px", marginBottom: "48px", background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "4px", width: "fit-content" }}>
          {(["newsletter", "intelligence"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 24px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.875rem",
                transition: "all 0.2s",
                background: activeTab === tab ? "#d4a853" : "transparent",
                color: activeTab === tab ? "#0a0f1a" : "#64748b",
              }}
            >
              {tab === "newsletter" ? "📰 The Nexus Brief" : "⚡ Intelligence Feed"}
            </button>
          ))}
        </div>

        {/* Newsletter Tab */}
        {activeTab === "newsletter" && (
          <div>
            <div style={{ display: "grid", gap: "24px", marginBottom: "56px" }}>
              {newsletterEditions.map((ed, i) => (
                <div key={i} className="fade-up" style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "32px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "24px",
                  alignItems: "start",
                  transition: "border-color 0.2s",
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ color: "#d4a853", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{ed.edition}</span>
                      <span style={{ fontSize: "0.7rem", fontWeight: 600, background: "rgba(212,168,83,0.12)", color: "#d4a853", padding: "2px 10px", borderRadius: "20px" }}>
                        {ed.status === "upcoming" ? "Coming Soon" : "Read Now"}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.35, marginBottom: "12px" }}>{ed.title}</h3>
                    <p style={{ color: "#64748b", fontSize: "0.9375rem", lineHeight: 1.6 }}>{ed.excerpt}</p>
                  </div>
                  <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                    <span style={{ color: "#475569", fontSize: "0.8125rem" }}>{ed.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscribe */}
            <div className="fade-up" style={{
              background: "linear-gradient(135deg, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0.03) 100%)",
              border: "1px solid rgba(212,168,83,0.2)",
              borderRadius: "20px",
              padding: "48px",
              textAlign: "center",
            }}>
              <h3 style={{ fontSize: "1.625rem", fontWeight: 700, color: "#f8fafc", marginBottom: "12px" }}>
                Subscribe to The Nexus Brief
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "1rem", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
                Weekly intelligence on African infrastructure, critical minerals, AI systems, and global capital. No noise. No filler.
              </p>
              {subscribed ? (
                <div style={{ color: "#d4a853", fontWeight: 600, fontSize: "1.0625rem" }}>
                  ✓ You&apos;re on the list. First edition coming soon.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "12px", maxWidth: "440px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
                  <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com" required
                    style={{
                      flex: 1, minWidth: "220px", padding: "14px 18px",
                      background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "10px", color: "#f8fafc", fontSize: "0.9375rem", outline: "none",
                    }}
                  />
                  <button type="submit" disabled={loading} style={{
                    padding: "14px 28px", background: "#d4a853", color: "#0a0f1a",
                    border: "none", borderRadius: "10px", fontWeight: 700,
                    fontSize: "0.9375rem", cursor: "pointer", whiteSpace: "nowrap",
                  }}>
                    {loading ? "..." : "Subscribe →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Intelligence Feed Tab */}
        {activeTab === "intelligence" && (
          <div>
            <p className="fade-up" style={{ color: "#64748b", fontSize: "0.9375rem", marginBottom: "36px", maxWidth: "600px" }}>
              Live intelligence snapshots from AfCEN&apos;s five platforms — updated weekly. Subscribe to The Nexus Brief for full reports.
            </p>
            <div style={{ display: "grid", gap: "20px" }}>
              {intelligenceFeeds.map((feed, i) => (
                <div key={i} className="fade-up" style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "28px 32px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: "20px",
                  alignItems: "start",
                  transition: "border-color 0.2s",
                }}>
                  {/* Icon + label */}
                  <div style={{ paddingTop: "2px" }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "10px",
                      background: `${feed.color}18`,
                      border: `1px solid ${feed.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.25rem",
                    }}>{feed.icon}</div>
                  </div>
                  {/* Content */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                      <span style={{ color: feed.color, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{feed.label}</span>
                      <span style={{ color: "#475569", fontSize: "0.7rem", fontWeight: 600, background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: "20px" }}>{feed.tag}</span>
                    </div>
                    <p style={{ color: "#94a3b8", fontSize: "0.9375rem", lineHeight: 1.65 }}>{feed.teaser}</p>
                  </div>
                  {/* CTA */}
                  <div style={{ whiteSpace: "nowrap", paddingTop: "2px" }}>
                    <button style={{
                      background: "transparent", border: `1px solid ${feed.color}40`,
                      color: feed.color, padding: "8px 16px", borderRadius: "8px",
                      fontSize: "0.8125rem", fontWeight: 600, cursor: "pointer",
                      transition: "all 0.2s",
                    }}>
                      {feed.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscribe nudge */}
            <div className="fade-up" style={{ marginTop: "40px", padding: "24px 32px", background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.15)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <p style={{ color: "#f1f5f9", fontWeight: 600, marginBottom: "4px" }}>Get the full intelligence reports every week</p>
                <p style={{ color: "#64748b", fontSize: "0.875rem" }}>Subscribe to The Nexus Brief — these snapshots plus deep analysis, deals, and policy signals.</p>
              </div>
              <button
                onClick={() => setActiveTab("newsletter")}
                style={{ padding: "12px 24px", background: "#d4a853", color: "#0a0f1a", border: "none", borderRadius: "10px", fontWeight: 700, fontSize: "0.875rem", cursor: "pointer", whiteSpace: "nowrap" }}>
                Subscribe to The Nexus Brief →
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
