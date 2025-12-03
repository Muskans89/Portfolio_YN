import React, { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
};

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 200,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(timer);

        // ⏳ Delay before navigating away
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000); // show full name for 1 second
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return (
    <h1 className="text-4xl font-heading font-bold text-white select-none">
      {displayedText}
      <span className="animate-blink">|</span>

      <style>{`
        .animate-blink {
          animation: blink 1s steps(4, start) infinite;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </h1>
  );
};

export default TypingText;
