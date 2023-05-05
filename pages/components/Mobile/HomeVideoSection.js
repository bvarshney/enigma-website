import React from "react";
import Link from "next/link";

export default function HomeVideoSection() {
  return (
    <>
      <div className="video-section-mobile">
        <div className="video-box">
          <video
            src="/assets/reels/hero.webm"
            autoPlay
            muted
            loop
            loading="lazy"
          ></video>
        </div>

        <div className="video-content-box">
          <h1>
            Do you think we're the right partners to bring your idea to life and
            take your brand to the Next Level?{" "}
            <span className="emoji-dark">🚀</span>
          </h1>
          <div className="cb-outro-header">
            <Link href="/contact">
              Say, Hello! <span className="emoji-dark">👋</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
