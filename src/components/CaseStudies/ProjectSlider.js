import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from '../ProjectsSection/ProjectData';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSlider = ({ currentProjectLink }) => {
  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const filteredProjects = projects.filter(project => project.link !== currentProjectLink);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cb-layout',
        scrub: true,
        start: 'top bottom'
        }
    });

    let ctx = gsap.context(() => {
      tl.from(".project-slider", {
        x: 300,
        duration: 2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>

      <div className="cb-layout">
        <div className="cb-content">
          <div className="project-slider-heading">
            <p>
              More Projects{" "}
              <span>
                <img
                  src="/assets/casestudies/vector.webp"
                  alt="arrow image more projects"
                  id="case-study-arrow"
                />
              </span>
            </p>
          </div>

          <div className='project-slider'>
            <Slider {...settings}>
              {filteredProjects.map(project => (
                <div data-cursor-size="90px" data-cursor-text="Drag" key={project.link} className="project-slide">
                  <Image width={1000} height={1000} src={`/assets/projects/project-slider/${project.srcSLider}`} alt={project.name} />
                  <Link href={`/${project.link}`}>{project.name}</Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSlider;