"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Entrance animation
    const elements = hero.querySelectorAll(".hero-animate");
    elements.forEach((el, i) => {
      const elem = el as HTMLElement;
      elem.style.opacity = "0";
      elem.style.transform = "translateY(28px)";
      setTimeout(() => {
        elem.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        elem.style.opacity = "1";
        elem.style.transform = "translateY(0)";
      }, 300 + i * 150);
    });
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a0f1a",
      }}
    >
      {/* Background gradient mesh */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(212,168,83,0.06) 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 10% 80%, rgba(14,30,60,0.8) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Animated geometric background elements */}
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        {/* Large circle ring */}
        <div
          className="animate-spin-slow"
          style={{
            position: "absolute",
            top: "50%",
            right: "-5%",
            width: "700px",
            height: "700px",
            marginTop: "-350px",
            border: "1px solid rgba(212,168,83,0.07)",
            borderRadius: "50%",
          }}
        />
        {/* Medium ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-5%",
            width: "500px",
            height: "500px",
            marginTop: "-250px",
            border: "1px solid rgba(212,168,83,0.1)",
            borderRadius: "50%",
          }}
        />
        {/* Small ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-5%",
            width: "300px",
            height: "300px",
            marginTop: "-150px",
            border: "1px solid rgba(212,168,83,0.14)",
            borderRadius: "50%",
          }}
        />

        {/* Glowing orb */}
        <div
          className="animate-pulse-glow"
          style={{
            position: "absolute",
            top: "20%",
            right: "12%",
            width: "280px",
            height: "280px",
            background:
              "radial-gradient(circle, rgba(212,168,83,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(20px)",
          }}
        />

        {/* Floating diamond */}
        <div
          className="animate-float"
          style={{
            position: "absolute",
            top: "28%",
            right: "18%",
            width: "64px",
            height: "64px",
            border: "1px solid rgba(212,168,83,0.25)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          className="animate-float"
          style={{
            position: "absolute",
            top: "28%",
            right: "18%",
            width: "64px",
            height: "64px",
            background: "rgba(212,168,83,0.04)",
            transform: "rotate(45deg)",
            animationDelay: "0.5s",
          }}
        />

        {/* Small dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "3px",
              height: "3px",
              background: "#d4a853",
              borderRadius: "50%",
              opacity: 0.3 + i * 0.05,
              top: `${20 + i * 12}%`,
              right: `${8 + (i % 3) * 8}%`,
            }}
          />
        ))}

        {/* Horizontal lines */}
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(212,168,83,0.08) 30%, rgba(212,168,83,0.08) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Dot grid pattern */}
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          width: "100%",
          padding: "120px 24px 80px",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          {/* Eyebrow */}
          <div
            className="hero-animate"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "1px",
                background: "#d4a853",
              }}
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
              CEO & Founder, AfCEN
            </span>
          </div>

          {/* Name */}
          <h1
            className="hero-animate"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "8px",
            }}
          >
            Joseph
          </h1>
          <h1
            className="hero-animate"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
              background: "linear-gradient(135deg, #d4a853 0%, #e8c06a 50%, #d4a853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ng&apos;ang&apos;a
          </h1>

          {/* Title */}
          <p
            className="hero-animate"
            style={{
              color: "#94a3b8",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 500,
              letterSpacing: "0.01em",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}
          >
            Climate Finance Architect · AI Systems Builder
            <br />
            <span style={{ color: "#64748b" }}>
              Nairobi · Washington, DC
            </span>
          </p>

          {/* Tagline */}
          <p
            className="hero-animate"
            style={{
              color: "#cbd5e1",
              fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              marginBottom: "48px",
              maxWidth: "560px",
              fontStyle: "italic",
            }}
          >
            &ldquo;Connecting African infrastructure to global capital.&rdquo;
          </p>

          {/* CTAs */}
          <div
            className="hero-animate"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <button onClick={scrollToContact} className="btn-gold">
              Work With Me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={scrollToAbout} className="btn-outline">
              About & Background
            </button>
          </div>

          {/* Quick stats */}
          <div
            className="hero-animate"
            style={{
              marginTop: "64px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(30, 45, 69, 0.5)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              maxWidth: "480px",
            }}
          >
            {[
              { value: "54", label: "African Markets" },
              { value: "300M", label: "People to Electrify" },
              { value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#d4a853",
                    lineHeight: 1,
                    marginBottom: "4px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#64748b",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "#475569",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 7.5l5 5 5-5"
            stroke="#475569"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
