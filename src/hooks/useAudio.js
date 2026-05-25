import useSound from 'use-sound';
import hoverSfx from '../assets/hover.mp3';
import clickSfx from '../assets/click.mp3';

export const useAudio = () => {
  const [playHover] = useSound(hoverSfx, { volume: 0.1 });
  const [playClick] = useSound(clickSfx, { volume: 0.2 });
  return { playHover, playClick };
};