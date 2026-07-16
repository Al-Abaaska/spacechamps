"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [entered, setEntered] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) { firstLoad.current = false; return; }

    setTransitioning(true);
    setEntered(false);

    if (barRef.current) {
      barRef.current.style.opacity = "1";
      barRef.current.style.width = "0%";
      let progress = 0;
      const iv = setInterval(() => {
        progress += Math.random() * 20 + 8;
        if (progress > 90) progress = 90;
        if (barRef.current) barRef.current.style.width = progress + "%";
      }, 50);
      const t = setTimeout(() => clearInterval(iv), 500);
      const t2 = setTimeout(() => {
        setEntered(true);
        if (barRef.current) {
          barRef.current.style.width = "100%";
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.opacity = "0";
              setTimeout(() => {
                if (barRef.current) barRef.current.style.width = "0%";
                setTransitioning(false);
              }, 250);
            }
          }, 150);
        }
      }, 180);
      return () => { clearInterval(iv); clearTimeout(t); clearTimeout(t2); };
    } else {
      const t = setTimeout(() => setEntered(true), 180);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  return (
    <>
      <div ref={barRef} className="route-loader" />
      <div className={`page-wrap ${entered ? "page-enter" : ""} ${transitioning ? "page-transitioning" : ""}`}>
        {children}
      </div>
    </>
  );
}
