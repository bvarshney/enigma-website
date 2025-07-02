"use client"
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';


gsap.registerPlugin(ScrollTrigger);

export default function Portfolio({ data, heading1, heading2 }) {
  
  const container = useRef(null);
  const main = useRef(null);

  useEffect(() => {
    if (globalThis.innerWidth >= 1024) {

      let ctx = gsap.context(() => {
        gsap.from(main.current, {
          scrollTrigger: {
            trigger: container.current,
            scrub: 0.25,
            start: "top bottom",
            end: "95% bottom",
            ease: "none",
          },
          scale: 0.5,
        });
      });
      return () => ctx.revert();
    }
  }, []);


  useEffect(() => {
    if (globalThis.innerWidth >= 1024) {

      let ctx = gsap.context(() => {
        gsap.to("#service-port-main", {
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "3500 top",
            scrub: 0.25,
            pin: true,
          },
          transform: "translateX(-66.8%)",
          ease: "none",
        });
      });
      return () => ctx.revert();
    }

  }, []);

  return (
    <>
      <section ref={container} id='section-3'>
        <div className='mx-auto p-[15px] h-screen w-screen overflow-hidden tablet:relative tablet:h-fit tablet:pt-[20vh] mobile:p-0 mobile:mt-[10vh]'>
          <div ref={main} className="overflow-hidden rounded-2xl h-full tablet:mb-[15%] mobile:rounded-none">
            <div className="h-full w-fit inline-flex rounded-2xl bg-white2 overflow-x-hidden tablet:block mobile:rounded-none mobile:pb-[50px]" id='service-port-main'>
              <div className="h-full flex items-center justify-center w-screen tablet:w-full tablet:p-[10%]">
                <h3 className='text-[8vw] text-black2 font-heading font-medium text-center tablet:text-[15vw] leading-[1.3]' data-cursor-size="12vw" data-cursor-exclusion>
                  <span>{heading1}{" "}</span>
                  <br />
                  <span>{heading2}</span>
                </h3>
              </div>
              <div className='flex py-[15px] h-full tablet:block tablet:p-0'>
                {data.map((item, index) => (
                  <Card
                    key={index}
                    cursorColor={item.cursorColor}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const Card = ({ cursorColor, title, description, image, link }) => {
  return (
    <div
      className='bg-white w-[48vw] fadeup rounded-xl mx-[8px] h-full flex flex-col justify-between p-[2vw] tablet:w-auto tablet:m-[20px] tablet:p-[3vw] mobile:p-[4vw] mobile:gap-[20px]'
      data-cursor-size="100px"
      data-cursor-color={cursorColor}
      data-cursor-text="View More"
    >
      <div className="text-right flex flex-col items-end gap-[30px] mobile:items-start">
        <div className='overflow-hidden rounded-xl'>
          <Image
            className='w-[21vw] h-auto tablet:w-[50vw] mobile:w-screen'
            src={image}
            alt={`${title} Image`}
            width={400}
            height={400}
            priority={false}
          />
        </div>
        <Link className="text-[1.2vw] px-[2vw] w-fit py-[0.7vw] font-semibold border-[1px] border-current rounded-full tablet:text-[2.5vw] tablet:px-[5vw] tablet:py-[2vw] mobile:text-[4vw] block mobile:py-[3vw] mobile:px-[7vw] mobile:text-center uppercase" href={link}>
          View Case Study
        </Link>
      </div>
      <div>
        <h4 className='font-heading text-primary text-[3.5vw] font-medium pb-[25px] tablet:text-[7vw] mobile:text-[9vw] mobile:pb-[10px]'>
          {title}
        </h4>
        <p className='text-[1.4vw] leading-[1.5] tracking-wide pb-[15px] tablet:text-[3.2vw] mobile:text-[4.5vw] mobile:text-justify'>
          {description}
        </p>
      </div>
    </div>
  )
}