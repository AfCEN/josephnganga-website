"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const placeholderPosts = [
  {
    category: "Climate Finance",
    title: "Why African DFI Deals Take 18 Months (and What's Finally Changing)",
    excerpt:
      "The bottleneck in African climate finance isn't capital — it's the institutional machinery between a committed dollar and a deployed one. Here's the anatomy of the problem, and how AI is beginning to compress timelines.",
    readTime: "8 min read",
    date: "Coming soon",
  },
  {
    category: "AI & Strategy",
    title: "Building the AI-Native Development Finance Institution",
    excerpt:
      "What would an AfDB or IFC look like if it were designed from scratch today? Starting with the investment thesis: intelligence as infrastructure, not overhead.",
    readTime: "12 min read",
    date: "Coming soon",
  },
  {
    category: "Africa Energy",
    title: "The Electrification Paradox: Why 300 Million Is Both Ambitious and Insufficient",
    excerpt:
      "Mission 300 is the most credible large-scale electrification push the continent has seen. It is also, by definition, a floor — not a ceiling. On the politics of setting targets in public.",
    readTime: "6 min read",
    date: "Coming soon",
  },
];

export default function Insights() {
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Placeholder — connect to Substack or email provider
    await new Promise((r) => setTimeout(r, 800));
    setSubscribed(true);
    setLoading(false);
  };

  return (
    <section
      id="insights"
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
          top: "0",
          left: "-10%",
          width: "500px",
          height: "500px",
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
              Writing &amp; Analysis
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
            Insights
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "1.0625rem",
              maxWidth: "560px",
              lineHeight: 1.6,
            }}
          >
            Occasional essays on climate finance, African energy transition, AI
            in development, and institutional strategy. Written for practitioners
            — not for press releases.
          </p>
        </div>

        {/* Placeholder posts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "80px",
          }}
        >
          {placeholderPosts.map((post, i) => (
            <div
              key={post.title}
              className={`fade-up stagger-${i + 1} card-hover`}
              style={{
                background: "rgba(10, 15, 26, 0.6)",
                border: "1px solid rgba(30, 45, 69, 0.5)",
                borderRadius: "12px",
                padding: "32px",
                position: "relative",
              }}
            >
              {/* Coming soon badge */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  padding: "3px 10px",
                  background: "rgba(30, 45, 69, 0.6)",
                  borderRadius: "100px",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#475569",
                }}
              >
                Coming soon
              </div>

              {/* Category */}
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#d4a853",
                  opacity: 0.7,
                }}
              >
                {post.category}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "#f8fafc",
                  lineHeight: 1.4,
                  marginTop: "10px",
                  marginBottom: "12px",
                  paddingRight: "48px",
                }}
              >
                {post.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
              >
                {post.excerpt}
              </p>

              {/* Meta */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(30, 45, 69, 0.4)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#475569",
                  }}
                >
                  {post.readTime}
                </span>
                <span style={{ color: "#1e2d45" }}>·</span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#475569",
                    fontStyle: "italic",
                  }}
                >
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter subscribe */}
        <div
          className="fade-up"
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            textAlign: "center",
            padding: "56px 48px",
            background: "rgba(10, 15, 26, 0.7)",
            border: "1px solid rgba(212,168,83,0.12)",
            borderRadius: "16px",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "rgba(212,168,83,0.08)",
              border: "1px solid rgba(212,168,83,0.2)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                stroke="#d4a853"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#f8fafc",
              marginBottom: "10px",
              letterSpacing: "-0.01em",
            }}
          >
            The Briefing
          </h3>
          <p
            style={{
              color: "#64748b",
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              marginBottom: "32px",
            }}
          >
            Infrequent. Substantive. No noise. When Joseph publishes, you&apos;ll know.
            Essays on climate finance, African energy, and the AI transformation of
            development institutions.
          </p>

          {subscribed ? (
            <div
              style={{
                padding: "16px 24px",
                background: "rgba(212,168,83,0.08)",
                border: "1px solid rgba(212,168,83,0.2)",
                borderRadius: "8px",
                color: "#d4a853",
                fontWeight: 600,
                fontSize: "0.9375rem",
              }}
            >
              ✓ You&apos;re on the list. Thank you.
            </div>
          ) : (
            <form onSubmit={handleSubscribe}>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="form-input"
                  style={{ flex: "1 1 200px" }}
                />
                <button
                  type="submit"
                  className="btn-gold"
                  disabled={loading}
                  style={{
                    opacity: loading ? 0.7 : 1,
                    flexShrink: 0,
                  }}
                >
                  {loading ? "..." : "Subscribe"}
                </button>
              </div>
              <p
                style={{
                  marginTop: "12px",
                  color: "#334155",
                  fontSize: "0.75rem",
                }}
              >
                No spam. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
