"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#speaking", label: "Speaking" },
  { href: "#advisory", label: "Advisory" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled
          ? "rgba(10, 15, 26, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30, 45, 69, 0.6)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            textAlign: "left",
          }}
        >
          <span
            style={{
              color: "#f8fafc",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            Joseph Ng&apos;ang&apos;a
          </span>
          <span
            style={{
              color: "#d4a853",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            AfCEN · Climate Finance · AI
          </span>
        </button>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "32px",
            listStyle: "none",
            alignItems: "center",
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#94a3b8",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  padding: "4px 0",
                  transition: "color 0.2s ease",
                  fontFamily: "inherit",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#d4a853";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#94a3b8";
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-gold"
              style={{ padding: "9px 20px", fontSize: "0.8125rem" }}
            >
              Get in Touch
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#f8fafc",
            padding: "8px",
          }}
        >
          <div
            style={{
              width: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                height: "2px",
                background: menuOpen ? "#d4a853" : "#f8fafc",
                borderRadius: "2px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: "#f8fafc",
                borderRadius: "2px",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: menuOpen ? "#d4a853" : "#f8fafc",
                borderRadius: "2px",
                transition: "transform 0.3s ease",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10, 15, 26, 0.97)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(30, 45, 69, 0.6)",
            padding: "16px 24px 24px",
          }}
          className="nav-mobile-menu"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#94a3b8",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "12px 0",
                textAlign: "left",
                fontFamily: "inherit",
                borderBottom: "1px solid rgba(30, 45, 69, 0.4)",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-gold"
            style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}
          >
            Get in Touch
          </button>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-toggle { display: none; }
        .nav-mobile-menu { display: block; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
