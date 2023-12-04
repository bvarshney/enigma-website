import React, { useEffect, useState, useRef } from "react";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import FooterMobile from '@/components/Mobile/FooterMobile';
import PageLoader from "../components/pageLoader";
import { NextSeo } from "next-seo";
import FullTime from "../components/Careers/FullTime";
import PartTime from "../components/Careers/PartTime";
import Head from "next/head";
import SmoothScroll from "@/components/utils/SmoothScroll";


gsap.registerPlugin(ScrollTrigger);

export default function Careers(){

     // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    ).fromTo("#para-anim", {
        opacity: 0,
        y: 100,

    },{
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: -0.5,
    })
    return () => tl.kill();
  }, []);

    return(
        <div className="bg-white">

            <NextSeo
              title="Careers in Design, Tech & Marketing | Current Openings"
              description="Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more. Impactful work in a collaborative environment."
              openGraph={{
                url: "https://weareenigma.com/careers",
                title: "Careers in Design, Tech & Marketing | Current Openings",
                description:
                  "Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more. Impactful work in a collaborative environment.",
                  images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/career.png",
                    width: 1200,
                    height: 630,
                    alt: "Careers Page Feature Image",
                    type: "image/png",
                  },
                ],
                siteName: "Enigma Digital",
              }}
            
              additionalMetaTags={[
              {
                name: "twitter:title",
                content: "Careers in Design, Tech & Marketing | Current Openings"
              },
              {
                name: "twitter:description",
                content: "Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more. Impactful work in a collaborative environment."
              },
              {
                name: "twitter:image",
                content: "https://weareenigma.com/assets/featured-images/career.png"
              },
            ]}
          />

        <Head>
            <link rel="canonical" href="https://weareenigma.com/careers" />
            <link rel="alternate" href="https://weareenigma.com/careers" hreflang="x-default" />
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "mainEntityOfPage":{
                    "@type": "WebPage",
                    "@id": "https://weareenigma.com/careers"
                    },
                    "name": "Careers",
                    "description": "Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more. Impactful work in a collaborative environment.",
                    "datePublished": "2023-10-01T12:00:00+05:30",
                    "dateModified": "2023-11-17T12:00:00+05:30",
                    "publisher": {
                    "@type": "Organization",
                    "name": "Enigma Digital",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg"
                    }
                    }
                }
                ),
            }}
            />
        </Head>

            <SmoothScroll />

            <Cursor isGelly={true} />

            <PageLoader text="Careers at Enigma" />

            <Header/>        

            {/* Main Content*/}
            <main>
                <section className="w-screen 2xl:pt-0 md:pt-32 py-16 xl:h-screen h-auto flex-col flex justify-center items-center text-center">
                    <div className="w-[85%] 3xl:w-[80%] m-auto">
                        <div className="">
                            <h1 className="2xl:text-[6.5vw] md:text-[8vw] text-[10vw] font-medium leading-[1.3]">
                                <span id="anim" className="block">
                                    Build the<span className="color-primary"> Future </span>
                                </span>
                                <span id="anim" className="block">of Web With Us!</span>
                            </h1>
                        </div>
                        <div id="para-anim" className="2xl:w-[75%] w-full mx-auto text-[gray] mt-10">
                            <p className="2xl:text-[1.4vw] md:text-[3.4vw] text-xl 2xl:text-center text-justify font-body leading-normal">
                                Embarking on a career at Enigma isn't just about a job; it's about embracing a lifestyle where innovation, creativity, and impact are at the core of everything we do. We don't just follow trends—we set them. Here, your voice is not only heard but valued and your ideas have the power to reshape the digital landscape.
                                <br/>
                                <br/>
                                Join us on our mission to build a brighter tomorrow through innovation & creativity.
                            </p>
                        </div>
                        <div className="2xl:mt-12 mt-16 flex justify-center">
                            <a id="para-anim" href="#JobsFullTime" className="w-[fit-content] block w-[fit-content] tw-primary hover:bg-primary hover:shadow-lg duration-300 hover:text-white border-primary border-2 rounded-full py-2 md:py-3 px-6 md:px-8">
                                <span className="flex gap-5 items-center justify-center font-medium 2xl:text-2xl md:text-3xl text-xl font-body">
                                    View Openings
                                    <span>
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <g id="style=stroke">
                                            <g id="arrow-long-right">
                                            <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M1.94995 12C1.94995 12.4142 2.28574 12.75 2.69995 12.75L21.2 12.75C21.6142 12.75 21.95 12.4142 21.95 12C21.95 11.5858 21.6142 11.25 21.2 11.25L2.69995 11.25C2.28574 11.25 1.94995 11.5858 1.94995 12Z"/>
                                            <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M14.1696 4.46967C13.8767 4.76256 13.8767 5.23744 14.1696 5.53033L20.4625 11.8232C20.5601 11.9209 20.5601 12.0791 20.4625 12.1768L14.1696 18.4697C13.8767 18.7626 13.8767 19.2374 14.1696 19.5303C14.4625 19.8232 14.9374 19.8232 15.2303 19.5303L21.5232 13.2374C22.2066 12.554 22.2066 11.446 21.5232 10.7626L15.2303 4.46967C14.9374 4.17678 14.4625 4.17678 14.1696 4.46967Z"/>
                                            </g>
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="3xl:w-[75%] w-[80%] mx-auto text-center py-24 2xl:px-8 px-0">
                    <p className="2xl:text-[3.5vw] mb-20 md:text-[7vw] text-4xl font-medium">
                        Browse<span className="color-primary"> Jobs</span>
                    </p>
                    <div className="pb-8 mx-auto text-left relative font-body mt-12 flex 2xl:flex-row flex-col justify-start gap-4 2xl:items-center flex-wrap">
                        <a href="#JobsFullTime" className="tw-hover group duration-300 text-black-1 hover:text-primary 2xl:text-[2.1vw] md:text-4xl sm:text-2xl text-xl font-medium flex items-center">
                            <h2>UI/UX Design</h2>
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" alt="circular arrow svg" src="/assets/icons/arrow-circle.svg"/>
                        </a>
                        <a href="#JobsFullTime" className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl sm:text-2xl text-xl font-medium flex items-center">
                            <h2>Business Development</h2>
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" alt="circular arrow svg" src="/assets/icons/arrow-circle.svg"/>
                        </a>
                        <a href="#JobsFullTime" className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl sm:text-2xl text-xl font-medium flex items-center">
                            <h2>Account Management</h2>
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" alt="circular arrow svg" src="/assets/icons/arrow-circle.svg"/>
                        </a>
                        <a href="#JobsFullTime" className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl sm:text-2xl text-xl font-medium flex items-center">
                            <h2>Frontend Development</h2>
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" alt="circular arrow svg" src="/assets/icons/arrow-circle.svg"/>
                        </a>
                        <a href="#JobsFullTime" className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl sm:text-2xl text-xl font-medium flex items-center">
                            <h2>Search Engine Optimisation</h2>
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" alt="circular arrow svg" src="/assets/icons/arrow-circle.svg"/>
                        </a>
                        <a href="#JobsFullTime" className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl sm:text-2xl text-xl font-medium flex items-center">
                            <h2>Content Writing</h2>
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" alt="circular arrow svg" src="/assets/icons/arrow-circle.svg"/>
                        </a>
                        <a href="#JobsFullTime" className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl sm:text-2xl text-xl font-medium flex items-center">
                            <h2>Social Media Marketing</h2>
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" alt="circular arrow svg" src="/assets/icons/arrow-circle.svg"/>
                        </a>
                    </div>
                </section>

                <section className="3xl:w-[75%] w-[85%] mx-auto my-28 lg:px-4">
                    <div className="2xl:flex block gap-24 w-full mx-0 2xl:mx-4 text-justify">
                        <div className="w-full 2xl:w-2/5 pb-16 2xl:pb-0">
                            <p className="mb-5 uppercase text-2xl 2xl:text-2xl font-body font-bold tracking-wide">
                                Benefits Of
                            </p>
                            <h3 className="text-4xl md:text-[6vw] 2xl:text-[2.2vw] text-left mb-5 font-medium leading-[1.3]">
                                Working At
                                <span className="color-primary"> Enigma</span>
                            </h3>
                            <p className="text-black/60 text-xl md:text-3xl 2xl:text-2xl font-regular font-body">
                                At Enigma, we offer more than jobs; we provide platforms for you to challenge the norms, create impactful solutions, and grow exponentially, both personally and professionally. Realize your full potential while defining the next generation of digital experiences.
                            </p>
                        </div>

                        <div className="w-full 2xl:w-3/5 grid-cols-1 grid md:grid-cols-2 gap-16">
                            <div>
                                <div className="tw-no-invert bg-[#E7F2FF] rounded-md p-6 w-24 h-24 mb-8">
                                    <img alt="job listing image" src="/assets/careers/listing/career-1.svg" className="w-full h-full"/>
                                </div>
                                <p className="text-3xl 2xl:text-xl font-medium mb-8">
                                    Innovative Culture:
                                </p>
                                <p className="2xl:text-lg text-xl font-body tracking-wide text-black/60 font-normal">
                                    Enigma thrives on innovation, fostering a workspace where risk-taking and originality are part of your everyday. You'll join a team eager to push boundaries and champion your groundbreaking ideas.
                                </p>
                            </div>

                            <div>
                                <div className="tw-no-invert bg-[#F1F7E8] rounded-md p-6 w-24 h-24 mb-8">
                                    <img alt="job listing image" src="/assets/careers/listing/career-2.svg" className="w-full h-full"/>
                                </div>
                                <p className="text-3xl 2xl:text-xl font-medium mb-8">
                                    Professional Growth:
                                </p>
                                <p className="2xl:text-lg text-xl font-body tracking-wide text-black/60 font-normal">
                                     At Enigma, your career is a dynamic journey of learning and advancement. We offer diverse opportunities to grow with industry experts, ensuring every project polishes your professional prowess.
                                </p>
                            </div>

                            <div>
                                <div className="tw-no-invert bg-[#EFF2F5] rounded-md p-5 w-24 h-24 mb-8">
                                    <img alt="job listing image" src="/assets/careers/listing/career-3.svg" className="w-full h-full"/>
                                </div>
                                <p className="text-3xl 2xl:text-xl font-medium mb-8">
                                    Impactful Work:
                                </p>
                                <p className="2xl:text-lg text-xl font-body tracking-wide text-black/60 font-normal">
                                    Your work at Enigma transcends typical client projects, driving industry innovation and making a tangible difference in the world. Here, you're crafting solutions that redefine businesses and lives.
                                </p>
                            </div>

                            <div>
                                <div className="tw-no-invert bg-[#FFEEED] rounded-md p-6 w-24 h-24 mb-8">
                                    <img alt="job listing image" src="/assets/careers/listing/career-4.svg" className="w-full h-full"/>
                                </div>
                                <p className="text-3xl 2xl:text-xl font-medium mb-8">
                                    Collaborative Environment:
                                </p>
                                <p className="2xl:text-lg text-xl font-body tracking-wide text-black/60 font-normal">
                                    Your work at Enigma transcends typical client projects, driving industry innovation and making a tangible difference in the world. Here, you're crafting solutions that redefine businesses and lives.
                                </p>
                            </div>
                            <div>
                                <div className="tw-no-invert bg-[#F1F3FF] rounded-md p-6 w-24 h-24 mb-8">
                                    <img alt="job listing image" src="/assets/careers/listing/career-5.svg" className="w-full h-full"/>
                                </div>
                                <p className="text-3xl 2xl:text-xl font-medium mb-8">
                                    Work-Life Synergy:
                                </p>
                                <p className="2xl:text-lg text-xl font-body tracking-wide text-black/60 font-normal">
                                    Your work at Enigma transcends typical client projects, driving industry innovation and making a tangible difference in the world. Here, you're crafting solutions that redefine businesses and lives.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="JobsFullTime" className="w-[85%] 3xl:w-[75%] px-0 lg:px-4 mx-auto text-center py-12 md:py-24">
                    <FullTime />
                </section> 


            {/*========Internship Listing=============*/}

                <section className="w-[85%] 3xl:w-[75%] px-0 lg:px-4 mx-auto text-center py-12 md:py-24">
                    <PartTime />
                </section>
            </main>
            
        {/* ======================== Footer ====================== */}
        <div className="desktop-footer">
          <Footer />
        </div>

        <div className="mobile-footer">
          <FooterMobile />
        </div>
        {/* ======================== Footer END ====================== */}
    </div>
    )
}