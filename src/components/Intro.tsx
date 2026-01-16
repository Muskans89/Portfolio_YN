// src/components/Intro.tsx
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import TypingText from "./Typing";
const Intro: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (typingDone && typingRef.current) {
      const headerName = document.getElementById("header-name");
      if (!headerName || !containerRef.current) return;

      const typingRect = typingRef.current.getBoundingClientRect();
      const headerRect = headerName.getBoundingClientRect();

      const dx = headerRect.left - typingRect.left;
      const dy = headerRect.top - typingRect.top;
      const scaleX = headerRect.width / typingRect.width;
      const scaleY = headerRect.height / typingRect.height;

      const timeline = gsap.timeline({
        onComplete: () => {
          onFinish();
        },
      });

      timeline.to(typingRef.current, {
        x: dx,
        y: dy,
        scaleX: scaleX,
        scaleY: scaleY,
        duration: 1.5,
        ease: "power2.inOut",
      });

      timeline.to(containerRef.current, { opacity: 0, duration: 0.5, delay: 0.3 }, "-=0.5");
    }
  }, [typingDone, onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex justify-center items-center z-50"
      style={{ pointerEvents: typingDone ? "none" : "auto" }}
    >
      <div ref={typingRef}>
        {!typingDone ? (
          <TypingText text="Yashvi Nagda" onComplete={() => setTypingDone(true)} />
        ) : (
          <h1 className="text-6xl font-heading font-bold text-blue-500 select-none whitespace-nowrap drop-shadow-lg">
            Yashvi Nagda
          </h1>
        )}
      </div>
    </div>
  );
};

export default Intro;
