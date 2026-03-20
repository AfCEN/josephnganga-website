"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const newsletterEditions = [
  {
    edition: "Edition #1",
    title: "I Built a 16-Agent AI Team That Runs My Company. Here's What I Learned.",
    excerpt:
      "Six months ago, I handed the operational management of my company to artificial intelligence. Not a chatbot. Not a copilot. Sixteen autonomous AI agents — each with a defined role, decision-making authority, and the ability to communicate with each other.",
    readTime: "7 min read",
    status: "published",
    url: "https://blog.josephnganga.com/i-built-a-16-agent-ai-team-that-runs-my-company-heres-what-i-learned/",
  },
  {
    edition: "Edition #2",
    title: "The Bankability Gap: Why 73% of African Energy Projects Never Close",
    excerpt:
      "The bottleneck in African infrastructure finance isn't capital. There is more patient capital chasing African assets than at any point in history. The bottleneck is intelligence — and the institutional machinery that turns a committed dollar into a deployed one.",
    readTime: "6 min read",
    status: "published",
    url: "https://blog.josephnganga.com/the-bankability-gap-why-73-of-african-energy-projects-never-close-the-bottleneck-isnt-capital-its-the-institutional-machinery-that-turns-a-committed-dollar-into-a-deployed-one/",
  },
  {
    edition: "Edition #3",
    title: "China Owns the Supply Chain. Africa Has the Minerals. Here's How That Changes.",
    excerpt:
      "The DRC alone holds 70% of global cobalt — essential for every F-35 avionics system, guided munition, EV battery, and AI chip on earth. China spent 20 years building the relationships to control access. The US has the rhetoric but not the intelligence infrastructure to compete.",
    readTime: "8 min read",
    status: "published",
    url: "https://blog.josephnganga.com/china-owns-the-supply-chain-africa-has-the-minerals-heres-how-that-changes-the-drc-holds-70-of-global-cobalt-china-spent-20-years-building-the-relationships-to-control-access-the-window/",
  },
];

export default function Insights() {
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Redirect to Ghost Portal signup with email pre-filled
    window.open(`https://blog.josephnganga.com/#/portal/signup?ref=josephnganga.com&email=${encodeURIComponent(email)}`, "_blank", "noopener,noreferrer");
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

        {/* Newsletter Editions */}
        <div>
            <div style={{ display: "grid", gap: "24px", marginBottom: "56px" }}>
              {newsletterEditions.map((ed, i) => {
                const CardWrapper = ed.url ? "a" : "div";
                const cardProps = ed.url ? { href: ed.url, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                <CardWrapper key={i} {...cardProps} className="fade-up" style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "32px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "24px",
                  alignItems: "start",
                  transition: "border-color 0.2s, background 0.2s",
                  textDecoration: "none",
                  cursor: ed.url ? "pointer" : "default",
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ color: "#d4a853", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{ed.edition}</span>
                      <span style={{ fontSize: "0.7rem", fontWeight: 600, background: ed.status === "published" ? "rgba(52,211,153,0.12)" : "rgba(212,168,83,0.12)", color: ed.status === "published" ? "#34d399" : "#d4a853", padding: "2px 10px", borderRadius: "20px" }}>
                        {ed.status === "upcoming" ? "Coming Soon" : "Read Now"}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.35, marginBottom: "12px" }}>{ed.title}</h3>
                    <p style={{ color: "#64748b", fontSize: "0.9375rem", lineHeight: 1.6 }}>{ed.excerpt}</p>
                  </div>
                  <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                    <span style={{ color: "#475569", fontSize: "0.8125rem" }}>{ed.readTime}</span>
                  </div>
                </CardWrapper>
                );
              })}
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

      </div>
    </section>
  );
}
