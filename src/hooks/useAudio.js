import useSound from 'use-sound';
import hoverSfx from '../assets/hover.mp3';
import clickSfx from '../assets/click.mp3';

export const useAudio = () => {
  const [playHover] = useSound(hoverSfx, { volume: 0.5 });
  const [playClick] = useSound(clickSfx, { volume: 0.5 });
  return { playHover, playClick };
};