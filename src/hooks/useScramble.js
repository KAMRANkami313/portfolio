import { useState, useEffect } from 'react';

export const useScramble = (text, delay = 0) => {
  const [output, setOutput] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    let frame = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setOutput(text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (frame > i * 3) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));

        if (frame > text.length * 3) clearInterval(interval);
        frame++;
      }, 30);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return output;
};