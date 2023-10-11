import { useState, useRef } from "react";
import styles from "@/styles/VideoPlayer.module.css";
import Image from "next/image";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    // const overlay = document.getElementById("overlay");

    // // Set opacity to 0 to make the image disappear
    // overlay.style.opacity = 0;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
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

  if (isPlaying) {
    playPauseButtonStyle.opacity = 0;
  }

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      onClick={togglePlay}
      data-cursor-text="Showreel"
      data-cursor-size="100px"
      data-cursor-color="#000"
    >
      {/* <Image
        width={1920}
        height={1080}
        src="/assets/about/videoOverlay.webp"
        alt="overlay"
        id="overlay"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "auto",
          height: "auto",
        }}
      /> */}
      <video ref={videoRef} 
      poster="/assets/about/videoOverlay.webp"
      src="/assets/reels/showreel.mp4"/>
      <div
        className="play-pause-button"
        style={playPauseButtonStyle}
        id="darkMode-reel-img"
      >
        {isPlaying ? (
          <div className={styles.svgBackground}>
            <Image
              width={350}
              height={350} 
              src="/assets/icons/pause.png"
              alt="showreel pause" />
          </div>
        ) : (
          <div className={styles.svgBackground}>
          <Image
              width={350}
              height={350}  
              src="/assets/icons/play.png"
              alt="showreel play" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
