"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type FormState = "idle" | "sending" | "success" | "error";

const inquiryTypes = [
  { value: "", label: "Select inquiry type" },
  { value: "speaking", label: "Speaking Engagement" },
  { value: "retainer", label: "Strategic Retainer" },
  { value: "workshop", label: "Workshop / Training" },
  { value: "board", label: "Board Advisory" },
  { value: "media", label: "Media / Press" },
  { value: "other", label: "Other" },
];

// Replace with your actual Formspree form ID
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

export default function Contact() {
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          inquiryType: form.inquiryType,
          message: form.message,
        }),
      });

      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", inquiryType: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: "#0a0f1a",
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
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(212,168,83,0.04) 0%, transparent 60%)",
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left column */}
          <div>
            <div className="fade-up" style={{ marginBottom: "48px" }}>
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
                  Get in Touch
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#f8fafc",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Work With Joseph
              </h2>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                }}
              >
                Whether you&apos;re looking to book a keynote, explore an advisory
                arrangement, or simply start a conversation — use the form to
                reach out. Joseph reviews all inquiries personally.
              </p>
            </div>

            {/* Contact info blocks */}
            <div
              className="fade-up stagger-1"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {[
                {
                  label: "Based in",
                  value: "Nairobi, Kenya · Washington, DC",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1.5C6.1 1.5 3.75 3.85 3.75 6.75c0 4.14 5.25 9.75 5.25 9.75s5.25-5.61 5.25-9.75C14.25 3.85 11.9 1.5 9 1.5z" stroke="#d4a853" strokeWidth="1.25" />
                      <circle cx="9" cy="6.75" r="1.5" stroke="#d4a853" strokeWidth="1.25" />
                    </svg>
                  ),
                },
                {
                  label: "Organisation",
                  value: "AfCEN — Africa Climate & Energy Nexus",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="5" width="14" height="10" rx="1.5" stroke="#d4a853" strokeWidth="1.25" />
                      <path d="M5 5V4a4 4 0 018 0v1" stroke="#d4a853" strokeWidth="1.25" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  label: "Response time",
                  value: "Typically within 3–5 business days",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="6.75" stroke="#d4a853" strokeWidth="1.25" />
                      <path d="M9 5.25V9l2.25 2.25" stroke="#d4a853" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(212,168,83,0.06)",
                      border: "1px solid rgba(212,168,83,0.15)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#475569",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social / links */}
            <div
              className="fade-up stagger-2"
              style={{
                marginTop: "40px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(30, 45, 69, 0.4)",
              }}
            >
              <a
                href="https://twitter.com/ngangaj"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#64748b",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#d4a853";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
                @ngangaj on X / Twitter
              </a>
            </div>
          </div>

          {/* Right column — Form */}
          <div className="fade-up stagger-2">
            <div
              style={{
                background: "rgba(14, 21, 37, 0.6)",
                border: "1px solid rgba(30, 45, 69, 0.6)",
                borderRadius: "16px",
                padding: "40px",
              }}
            >
              {formState === "success" ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  {/* Success icon */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "rgba(212,168,83,0.1)",
                      border: "1px solid rgba(212,168,83,0.25)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M7 14l5 5 9-9"
                        stroke="#d4a853"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "#f8fafc",
                      marginBottom: "12px",
                    }}
                  >
                    Message Received
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Thank you for reaching out. Joseph reviews all inquiries
                    personally and will be in touch within 3–5 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#f8fafc",
                      marginBottom: "28px",
                    }}
                  >
                    Send a Message
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        style={{
                          display: "block",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "#94a3b8",
                          marginBottom: "6px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          display: "block",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "#94a3b8",
                          marginBottom: "6px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@organisation.com"
                        className="form-input"
                      />
                    </div>

                    {/* Inquiry type */}
                    <div>
                      <label
                        htmlFor="inquiryType"
                        style={{
                          display: "block",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "#94a3b8",
                          marginBottom: "6px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={form.inquiryType}
                        onChange={handleChange}
                        className="form-input"
                        style={{
                          appearance: "none",
                          WebkitAppearance: "none",
                          cursor: "pointer",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2364748b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                          paddingRight: "40px",
                        }}
                      >
                        {inquiryTypes.map((t) => (
                          <option
                            key={t.value}
                            value={t.value}
                            style={{ background: "#0e1525", color: t.value ? "#f8fafc" : "#475569" }}
                          >
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          display: "block",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "#94a3b8",
                          marginBottom: "6px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell Joseph about your organisation and what you're looking for..."
                        rows={5}
                        className="form-input"
                        style={{ resize: "vertical", minHeight: "120px" }}
                      />
                    </div>

                    {/* Error state */}
                    {formState === "error" && (
                      <div
                        style={{
                          padding: "12px 16px",
                          background: "rgba(239, 68, 68, 0.08)",
                          border: "1px solid rgba(239, 68, 68, 0.2)",
                          borderRadius: "6px",
                          color: "#fca5a5",
                          fontSize: "0.875rem",
                        }}
                      >
                        Something went wrong. Please try again or email directly.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="btn-gold"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        opacity: formState === "sending" ? 0.7 : 1,
                        cursor: formState === "sending" ? "not-allowed" : "pointer",
                      }}
                    >
                      {formState === "sending" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M2 8h12M10 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </>
                      )}
                    </button>

                    <p
                      style={{
                        textAlign: "center",
                        color: "#334155",
                        fontSize: "0.75rem",
                        lineHeight: 1.5,
                      }}
                    >
                      Your details are kept private and used only to respond to
                      your inquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
