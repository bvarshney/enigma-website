import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyVideo = ({ srcWebm, srcMp4, title, poster }) => {
  const [ref, inView] = useInView();
  const [hasPlayed, setHasPlayed] = useState(false);

  // When the video comes into view, set hasPlayed to true
  if (inView && !hasPlayed) {
    setHasPlayed(true);
  }

  return (
    <div className="lazy-video" ref={ref}>
        {(inView || hasPlayed) && (
          <video autoPlay muted loop id={title} title={title} poster={poster} alt="About Us Video">
            <source src={srcWebm} type='video/webm'/>
            <source src={srcMp4} type='video/mp4'/>
            Your browser does not support the video tag.
          </video>
        )}
    </div>
  );
};

export default LazyVideo;
