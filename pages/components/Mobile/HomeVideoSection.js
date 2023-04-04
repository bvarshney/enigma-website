import React from "react";
import Link from "next/link";

export default function HomeVideoSection() {
  return (
    <>
      <div className="video-section-mobile">
        <div className="video-box">
          <video src="/assets/reels/hero.mp4" autoPlay muted loop></video>
        </div>

        <div className="video-content-box">
          <h1>
            Do you think we're the right partners to bring your idea to life and
            take your brand to the Next Level? 🚀
          </h1>
          <Link href="/contact">Say, Hello! 👋</Link>
        </div>
      </div>
    </>
  );
}
