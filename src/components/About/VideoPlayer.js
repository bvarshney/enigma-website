import { useState, useRef, useContext } from "react";
import Image from "next/image";
import styles from "@/styles/VideoPlayer.module.css";
import { useAudioPlayer } from '../Audio/AudioPlayer'; // Assuming this is the correct path

const VideoPlayer = () => {
  const { isPlaying: isAudioPlaying, playAudio, pauseAudio } = useAudioPlayer();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [wasAudioPlaying, setWasAudioPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;

    if (isVideoPlaying) {
      video.pause();
      setIsVideoPlaying(false);
      if (wasAudioPlaying) {
        playAudio();
      }
    } else {
      setWasAudioPlaying(isAudioPlaying);
      if (isAudioPlaying) {
        pauseAudio();
      }
      video.play();
      setIsVideoPlaying(true);
    }
  };

  let playPauseButtonStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
    transition: "all 0.3s ease-in",
    zIndex: "99",
  };
    
  if (isVideoPlaying) {
    playPauseButtonStyle.opacity = 0;
  }

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      onClick={togglePlay}
      data-cursor-text="Play/Pause"
      data-cursor-size="120px"
      data-cursor-color="#000"
    >
      <video ref={videoRef} poster="/assets/about/videoOverlay.webp" src="/assets/reels/showreel.mp4"/>
      <div className="play-pause-button" style={playPauseButtonStyle} id="darkMode-reel-img">
        {isVideoPlaying ? (
          <div className={styles.svgBackground}>
            <Image width={350} height={350} src="/assets/icons/pause.png" alt="showreel pause" />
          </div>
        ) : (
          <div className={styles.svgBackground}>
            <Image width={350} height={350} src="/assets/icons/play.png" alt="showreel play" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

