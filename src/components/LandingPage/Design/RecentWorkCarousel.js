import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "@/styles/designLanding.module.css";
import Image from 'next/image';

const SliderComponent = () => {
    const [slidesToShow, setSlidesToShow] = useState(1);
    const [slidesToScroll, setSetSlidesToScroll] = useState(1);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth > 1024) {
                setSlidesToShow(3);
            } else if (window.innerWidth < 1024 && window.innerWidth > 770) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    useEffect(() => {
        const updateSlidesToScroll = () => {
            if (window.innerWidth > 1024) {
                setSetSlidesToScroll(3);
            } else if (window.innerWidth < 1024 && window.innerWidth > 770) {
                setSetSlidesToScroll(2);
            } else {
                setSetSlidesToScroll(1);
            }
        };

        updateSlidesToScroll();
        window.addEventListener('resize', updateSlidesToScroll);
        return () => {
            window.removeEventListener('resize', updateSlidesToScroll);
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll,
        draggable: true,
        button: false,
    };

    return (
        <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map(num => (
                <div key={num} className={styles.workCarouselImg}>
                    <Image
                        height={500}
                        width={500}
                        src={`/assets/landing-page/design/c-${num}.webp`} 
                        alt={`Image ${num}`} 
                    />
                </div>
            ))}
        </Slider>
    );
};

export default SliderComponent;