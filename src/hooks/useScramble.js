import { useState, useEffect, useRef } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#$0123456789";
const FRAME_INTERVAL = 25;

export const useScramble = (text, delay = 0) => {
  const [output, setOutput] = useState("");
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const frameRef = useRef(0);

  useEffect(() => {
    frameRef.current = 0;

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        const frame = frameRef.current;
        setOutput(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (frame > i * 2) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (frameRef.current > text.length * 2) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        frameRef.current += 1;
      }, FRAME_INTERVAL);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      timeoutRef.current = null;
      intervalRef.current = null;
    };
  }, [text, delay]);

  return output;
};