"use client"
import React, { useRef, useState, useEffect } from 'react';

const LazyVideo = ({ poster, type = "video/mp4", controls = false, autoPlay = false, loop = false, muted = true, videoSrc, className = "" }) => {
    const videoRef = useRef(null);
    const [isVideoInViewport, setIsVideoInViewport] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!('IntersectionObserver' in window)) {
            setIsVideoInViewport(true); // Load video immediately if IntersectionObserver is not available
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVideoInViewport(true);
                    observer.disconnect(); // Disconnect observer since we no longer need to observe once video is loaded
                }
            });
        });

        if (videoElement) {
            observer.observe(videoElement);
        }

        // Cleanup function to unobserve if the component unmounts
        return () => {
            if (observer && videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <video
            ref={videoRef}
            poster={poster}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            className={className}
            playsInline
        >
            {isVideoInViewport && (
                <source src={videoSrc} type={type} />
            )}
            Your browser does not support the video tag.
        </video>
    );
};

export default LazyVideo;