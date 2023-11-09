import React from 'react';
import { useInView } from 'react-intersection-observer';

const SecondVideoLazy = ({ src, title }) => {
  const [ref, inView] = useInView();

  return (
    <div className="lazy-video">
      <div ref={ref}>
        {inView && (
          <video
            id={`${title}-video`}
            autoPlay
            loop
            muted
            src={inView ? src : ''}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default SecondVideoLazy;
