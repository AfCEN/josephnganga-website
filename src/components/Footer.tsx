"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#060b15",
        borderTop: "1px solid rgba(30, 45, 69, 0.5)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              color: "#f8fafc",
              fontWeight: 700,
              fontSize: "0.9375rem",
              letterSpacing: "-0.01em",
              marginBottom: "4px",
            }}
          >
            Joseph Ng&apos;ang&apos;a
          </div>
          <div
            style={{
              color: "#334155",
              fontSize: "0.8125rem",
            }}
          >
            CEO &amp; Founder, AfCEN · Mission 300 Special Envoy
          </div>
        </div>

        {/* Center — nav links */}
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {[
              { href: "#about", label: "About" },
              { href: "#speaking", label: "Speaking" },
              { href: "#advisory", label: "Advisory" },
              { href: "#insights", label: "Insights" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 72;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  style={{
                    color: "#475569",
                    fontSize: "0.8125rem",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#d4a853";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#475569";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right */}
        <div
          style={{
            color: "#334155",
            fontSize: "0.75rem",
            textAlign: "right",
          }}
        >
          <div>© {year} Joseph Ng&apos;ang&apos;a</div>
          <div style={{ marginTop: "2px" }}>
            <a
              href="https://africacen.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#475569",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#d4a853";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#475569";
              }}
            >
              africacen.org ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
