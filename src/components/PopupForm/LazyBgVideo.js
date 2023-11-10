import React from 'react';
import { useInView } from 'react-intersection-observer';

const LazyVideo = ({ src, title }) => {
  const [ref, inView] = useInView();

  return (
    <div className="lazy-video">
      <div ref={ref}>
        {inView && (
          <video
            // poster='/assets/contact/poster-bg.webp'
            className="VideoPopUp"
            id={`${title}-video`}
            autoPlay
            loop
            muted
            playsInline
            src={inView ? src : ''}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default LazyVideo;
