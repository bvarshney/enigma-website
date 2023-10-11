import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from "@/styles/designLanding.module.css";
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    text: 'Praesent vehicula nisl non efficitur. Vestibulum ut hendrerit purus.',
  },
  {
    name: 'Alice Johnson',
    text: 'Vivamus sit amet justo quis ligula tincidunt malesuada.',
  },
  {
    name: 'Bob Wilson',
    text: 'Fusce et odio a dui convallis vehicula. Aliquam erat volutpat.',
  },
  {
    name: 'Eva Brown',
    text: 'In at quam eget libero euismod ultrices. Nulla facilisi.',
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the index of the next slide
      const nextSlideIndex = (currentSlide + 1) % testimonials.length;
      setCurrentSlide(nextSlideIndex);
    }, 5000); // Change slide every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <CarouselProvider
      id="DesignLandingTesti"
      className={styles.testimonialCarousel}
      data-cursor-color="#ffffff"
      naturalSlideWidth={100}
      naturalSlideHeight={40}
      totalSlides={testimonials.length}
      currentSlide={currentSlide} // Set the current slide based on state
    >
      <Slider>
        {testimonials.map((testimonial, index) => (
          <Slide key={index} index={index}>
            <div className={styles.testiCard}>
              <p className={styles.testiContent}>{testimonial.text}</p>
              <p className={styles.testiName}>— {testimonial.name}</p>
            </div>
          </Slide>
        ))}
      </Slider>
      <div className={styles.testiButtonContainer}>
        <ButtonBack className={`${styles.testiButton} ${styles.backbtn}`}>
          <Image height={30} width={30} src='/assets/icons/next.png' alt='arrow'/>
        </ButtonBack>
        <ButtonNext className={styles.testiButton}>
          <Image height={30} width={30} src='/assets/icons/next.png' alt='arrow'/>
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Testimonial;
