import { useCallback, useEffect, useRef } from "react";

const audioCache = {};

const getAudio = (src) => {
  if (!audioCache[src]) {
    const audio = new Audio(src);
    audioCache[src] = audio;
  }
  return audioCache[src];
};

const preloadAudio = (src) => {
  if (!audioCache[src]) {
    const audio = new Audio(src);
    audio.preload = "auto";
    audioCache[src] = audio;
  }
};

export const useAudio = () => {
  const playHover = useCallback(() => {
    try {
      const audio = getAudio("/hover.mp3");
      audio.volume = 0.2;
      audio.currentTime = 0;
      audio.playbackRate = 1.1;
      audio.play().catch(() => {});
    } catch {}
  }, []);

  const playClick = useCallback(() => {
    try {
      const audio = getAudio("/click.mp3");
      audio.volume = 0.4;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch {}
  }, []);

  useEffect(() => {
    preloadAudio("/hover.mp3");
    preloadAudio("/click.mp3");
  }, []);

  return { playHover, playClick };
};