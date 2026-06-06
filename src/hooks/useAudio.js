const audioCache = {};

const getAudio = (src, volume = 1.0) => {
  if (!audioCache[src]) {
    const audio = new Audio(src);
    audio.volume = volume;
    audioCache[src] = audio;
  }
  return audioCache[src];
};

export const useAudio = () => {
  const playHover = () => {
    try {
      const audio = getAudio('/hover.mp3', 0.2);
      audio.currentTime = 0;
      audio.playbackRate = 1.1;
      audio.play().catch(() => {});
    } catch {}
  };

  const playClick = () => {
    try {
      const audio = getAudio('/click.mp3', 0.4);
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch {}
  };

  return { playHover, playClick };
};