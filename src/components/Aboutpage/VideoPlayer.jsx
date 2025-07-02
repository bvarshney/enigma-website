"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";

const VideoPlayer = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const [isVideoInViewport, setIsVideoInViewport] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!('IntersectionObserver' in window)) {
      setIsVideoInViewport(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVideoInViewport(true);
          observer.disconnect();
        }
      });
    });

    if (videoElement) {
      observer.observe(videoElement);
    }
    return () => {
      if (observer && videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;

    if (isVideoPlaying) {
      video.pause();
      setIsVideoPlaying(false);
    } else {
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
    <section
      className="relative overflow-hidden h-screen w-screen tablet:h-auto"
      onClick={togglePlay}
      data-cursor-text="Play/Pause"
      data-cursor-size="120px"
      data-cursor-color="#000"
    >
      <video ref={videoRef} className="w-full h-full object-cover" poster="/assets/about/poster.webp">
        {isVideoInViewport && (
          <source src="/showreel.mp4" type="video/mp4" />
        )}
      </video>
      <div className="play-pause-button" style={playPauseButtonStyle} id="darkMode-reel-img">
        {isVideoPlaying ? (
          <div className={styles.svgBackground}>
            <Image width={350} height={350} priority={false} src="/assets/icons/pause.png" alt="showreel pause" />
          </div>
        ) : (
          <div className={styles.svgBackground}>
            <Image width={350} height={350} priority={false} src="/assets/icons/play.png" alt="showreel play" />
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoPlayer;