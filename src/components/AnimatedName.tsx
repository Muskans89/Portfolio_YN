import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedName: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <h1
      ref={nameRef}
      className="text-5xl font-heading font-bold text-blue-400 select-none"
    >
      Yashvi Nagda
    </h1>
  );
};

export default AnimatedName;
