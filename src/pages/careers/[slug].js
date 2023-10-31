import { useRouter } from 'next/router';
import jobs from "@/components/Careers/JobsData";
import Head from 'next/head';
import Image from 'next/image';
import SmoothScroll from "@/components/utils/SmoothScroll";
import { Cursor } from "../../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import FooterMobile from '@/components/Mobile/FooterMobile';
import JobApply from '../../components/Careers/JobApply';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function JobDetail() {
  
  const router = useRouter();
  const { slug } = router.query;

  // Find the job by its id or slug
  const job = jobs.find(j => j.slug === slug);

  if (!job) {
    return <div>Job not found</div>;
  }

    // Page Transitions
    useEffect(() => {
      const loaderBars = document.querySelectorAll("#loaderbars");
      const tl = gsap.timeline();
  
      let ctx = gsap.context(() => {
  
        tl.from(".loader-wrap-heading h1", {
          delay: 0.5,
          y: 200,
          skewY: 10,
          duration: 1,
        }).to(".loader-wrap-heading h1", {
          delay: 0.5,
          y: -200,
          skewY: 10,
          duration: 1,
        }).to(loaderBars, {
          height: 0,
          duration: 0.6,
          delay: -0.5,
          ease: "power2.easeIn",
          stagger: 0.1,
        }).to("#loader", {
          y: "-1500",
          opacity: 0,
          ease: "power2.inOut",
        });
      });
      return () => ctx.revert();
    }, []);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      const triggerElement = document.querySelector(".jd__s1"); 
      const logoElement = document.querySelector(".jd__main .header-section .header-logo .main-logo");
      const hamburgerElement = document.querySelectorAll(".jd__main .menu svg path");
  
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "100% top", 
        onEnter: () => {
          gsap.to(logoElement, { filter: "invert(0)", delay: 0.2, duration: 0.5, stagger: 0});
          gsap.to(hamburgerElement, { stroke: "#000000",delay: -2, duration: 0, stagger: 0});
        },
        onLeaveBack: () => {
          gsap.to(logoElement, { filter: "invert(1)", delay: 0.5, duration: 0.5, stagger: 0 });
          gsap.to(hamburgerElement, { stroke: "#ffffff", delay: -2, duration: 0, stagger: 0 });
        }
      });
  
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);


  // On Page Seo Data
  const pageTitle = `${job.title} | Careers at Enigma Digital `;
  const pageDescription = `Experience top-tier UI/UX design, front-end development, and organic marketing jobs with Enigma Digital. Find The Right Jobs`;

  const structuredData = {
    "@context": "http://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.sDescription,
    "experienceRequirements": job.experience,
    "employmentType": "FULL_TIME", // Adjust this according to your data
    "location": {
      "@type": "Place",
      "address": {
        "@type": "201301",
        "addressLocality": job.location
      }
    }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/fav-icon.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      {/* Loader */}
        <div className="invisible loader-wrap" id="loader" style={{ zIndex: 999 }}>
          <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>
          <div className="loader-wrap-heading">
            <span>
              <h1>{job.title}</h1>
            </span>
          </div>
        </div>

      <SmoothScroll />
      <Cursor isGelly={true} />

      <main className='jd__main'>
        
        <Header/>

        <section className='jd__s1 relative h-[50vh] w-screen mx-auto mb-24 flex items-center justify-center'>
        <span className='jd__bgcover'> 
        </span>
        <Image 
          className='jd__bg absolute z-[-2] w-full h-[57vh] top-[-7vh] object-cover'
          src="/assets/careers/jd-bg.jpg"
          alt='JD Background Image'
          width={1500}
          height={800}/>
          <div className='w-[80%] '>
            <div className='w-full text-white jd__head'>
                <h1 className='text-[7vw] lg:text-[5vw] font-medium'>{job.title}</h1>
                <p className='text-xl md:text-2xl text-gray-100 tracking-wide font-body'>{job.sDescription}</p>
                
                <div className='my-4 font-body flex items-center'>
                  
                  <div className='flex items-center gap-2 text-xl border-r-2 pr-8 border-gray-400'>
                    <svg className='w-8 mb-1' fill="currentColor" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.25 12.063v3.75c-2.969 1.094-6.656 1.719-10.625 1.719s-7.656-0.625-10.625-1.719v-3.75c0-0.688 0.563-1.25 1.25-1.25h5.156v-0.938c0-1.438 1.188-2.656 2.656-2.656h3.125c1.469 0 2.656 1.219 2.656 2.656v0.938h5.156c0.688 0 1.25 0.563 1.25 1.25zM7.969 9.875v0.938h5.313v-0.938c0-0.594-0.5-1.094-1.094-1.094h-3.125c-0.594 0-1.094 0.5-1.094 1.094zM9.063 15.594v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313zM0 23.969v-6.813c3 1.031 6.656 1.625 10.625 1.625s7.625-0.594 10.625-1.625v6.813c0 0.688-0.563 1.25-1.25 1.25h-18.75c-0.688 0-1.25-0.563-1.25-1.25zM12.188 20.75v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313z"></path>
                    </svg>
                    <span>{job.experience}</span>
                  </div>
                  <div className='pt-1 flex gap-2 text-xl items-center pl-8'>
                    <svg fill="currentColor" className="w-6 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 413.099 413.099">
                        <g>
                          <path d="M206.549,0L206.549,0c-82.6,0-149.3,66.7-149.3,149.3c0,28.8,9.2,56.3,22,78.899l97.3,168.399c6.1,11,18.4,16.5,30,16.5 c11.601,0,23.3-5.5,30-16.5l97.3-168.299c12.9-22.601,22-49.601,22-78.901C355.849,66.8,289.149,0,206.549,0z M206.549,193.4 c-30,0-54.5-24.5-54.5-54.5s24.5-54.5,54.5-54.5s54.5,24.5,54.5,54.5C261.049,169,236.549,193.4,206.549,193.4z"></path>
                        </g>
                    </svg>
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
          </div>          
        </section>

        <section className='w-[90%] md:w-[80%] mx-auto block lg:flex gap-10 font-body mb-24'>
          <div className='w-full lg:w-1/2'>
            <div className='w-full md:w-[90%] mb-24'>
              <h3 className='mb-4 md:mb-6 text-3xl md:text-4xl lg:text-[2.4vw]'>Responsibilities</h3>
              <ul className='ml-1'>
              {job.responsibilities.map((responsibility, index) => (
                <li className='text-black/70 before:left-0 before:h-2 before:w-2 before:rounded-full before:absolute before:bg-black/70 before:top-[10px] relative text-xl md:text-2xl pl-4 mb-4 ' key={index}>{responsibility}</li>
              ))}
            </ul>
            </div>

            <div className='w-[90%] mb-24'>
              <h3 className='mb-4 md:mb-6 text-3xl md:text-4xl lg:text-[2.4vw]'>Requirements</h3>
              <ul className='ml-1'>
              {job.requirements.map((requirement, index) => (
                <li className='text-black/70 before:left-0 before:h-2 before:w-2 before:rounded-full before:absolute before:bg-black/70 before:top-[10px] relative text-xl md:text-2xl pl-4 mb-4' key={index}>{requirement}</li>
              ))}
            </ul>
            </div>
            
          </div>

          <div className='w-full lg:w-1/2 shadow-3xl rounded-xl px-8 md:px-16 py-10'>
            <div className='text-center mb-8'>
              <h2 className="text-4xl lg:text-[3vw] font-display font-medium">
                Apply<span className="color-primary"> Now</span>
              </h2>
            </div>
            <div>
                <JobApply />
            </div>
          </div>
        </section>
        
        {/* ======================== Footer ====================== */}
        <div className="desktop-footer">
          <Footer />
        </div>

        <div className="mobile-footer">
          <FooterMobile />
        </div>
        {/* ======================== Footer END ====================== */}
      </main>
    </>
  );
}

export default JobDetail;