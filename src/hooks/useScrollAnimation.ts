"use client";

import { useEffect, useRef, RefObject } from "react";

export function useScrollAnimation(): RefObject<HTMLElement | null> {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatables = section.querySelectorAll(".fade-up, .fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    animatables.forEach((el) => observer.observe(el));

    return () => {
      animatables.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return sectionRef;
}
