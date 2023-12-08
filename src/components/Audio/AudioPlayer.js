import { createContext, useContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => {
  return useContext(AudioPlayerContext);
};

const AudioPlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [wasPlayingBeforeHide, setWasPlayingBeforeHide] = useState(false);

  const playAudio = () => audio.play();
  const pauseAudio = () => audio.pause();

  const [audio] = useState(
    new Howl({
      src: ['/assets/music/bg.mp3'],
      loop: true,
      volume: 0.3,
      onplay: () => setIsPlaying(true), 
      onpause: () => setIsPlaying(false), 
    })
  );

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setWasPlayingBeforeHide(isPlaying);
        audio.pause();
      } else if (document.visibilityState === 'visible' && wasPlayingBeforeHide) {
        audio.play();
      }
    };
  
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [audio, isPlaying, wasPlayingBeforeHide]);

  return (
    <AudioPlayerContext.Provider value={{ togglePlay, isPlaying, playAudio, pauseAudio }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioPlayerProvider;
