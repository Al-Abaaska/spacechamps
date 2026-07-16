"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function setupObservers() {
  const staggerEls = document.querySelectorAll<HTMLElement>("[data-reveal-stagger]");
  const lineEls = document.querySelectorAll<HTMLElement>(".line-draw");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("reveal-visible");
      });
    },
    { threshold: 0.15 }
  );

  staggerEls.forEach((el) => io.observe(el));
  lineEls.forEach((el) => io.observe(el));

  return () => { io.disconnect(); };
}

function setupMouseGlow() {
  const hero = document.querySelector<HTMLElement>(".hero");
  if (!hero) return;
  let container = hero.querySelector<HTMLElement>(".mouse-glow");
  if (!container) {
    container = document.createElement("div");
    container.className = "mouse-glow";
    hero.style.position = "relative";
    hero.prepend(container);
  }
  const handler = (e: MouseEvent) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    container!.style.setProperty("--mx", x + "%");
    container!.style.setProperty("--my", y + "%");
  };
  hero.addEventListener("mousemove", handler, { passive: true });
  return () => hero.removeEventListener("mousemove", handler);
}

function setupTiltCards() {
  const cards = document.querySelectorAll<HTMLElement>(".tilt-card");
  const cleanups: (() => void)[] = [];
  cards.forEach((card) => {
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const inner = card.firstElementChild as HTMLElement | null;
      if (inner) {
        inner.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(8px)`;
      }
    };
    const onLeave = () => {
      const inner = card.firstElementChild as HTMLElement | null;
      if (inner) inner.style.transform = "";
    };
    card.addEventListener("mousemove", onMove, { passive: true });
    card.addEventListener("mouseleave", onLeave);
    cleanups.push(() => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    });
  });
  return () => cleanups.forEach((fn) => fn());
}

function setupRipple() {
  const btns = document.querySelectorAll<HTMLElement>(".button, .nav-action");
  const cleanups: (() => void)[] = [];
  btns.forEach((btn) => {
    const handler = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "btn-ripple";
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };
    btn.addEventListener("click", handler);
    cleanups.push(() => btn.removeEventListener("click", handler));
  });
  return () => cleanups.forEach((fn) => fn());
}

function setupParallax() {
  const layers = document.querySelectorAll<HTMLElement>(".parallax-layer");
  if (!layers.length) return;
  const handler = () => {
    const scrollY = window.scrollY;
    layers.forEach((layer) => {
      const speed = parseFloat(layer.dataset.speed || "0.3");
      const rect = layer.parentElement?.getBoundingClientRect();
      if (rect && rect.bottom > 0 && rect.top < window.innerHeight) {
        layer.style.transform = `translateY(${scrollY * speed}px)`;
      }
    });
  };
  window.addEventListener("scroll", handler, { passive: true });
  handler();
  return () => window.removeEventListener("scroll", handler);
}

export default function Animations() {
  const pathname = usePathname();

  useEffect(() => {
    const timers: number[] = [];
    const cleanups: (() => void)[] = [];

    timers.push(window.setTimeout(() => {
      cleanups.push(setupObservers() || (() => {}));
      cleanups.push(setupMouseGlow() || (() => {}));
      cleanups.push(setupTiltCards() || (() => {}));
      cleanups.push(setupRipple() || (() => {}));
      cleanups.push(setupParallax() || (() => {}));
    }, 120));

    return () => {
      timers.forEach((t) => clearTimeout(t));
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
