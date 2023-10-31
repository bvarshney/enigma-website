import React, { useEffect } from "react";
import Head from "next/head";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SmoothScroll from "@/components/utils/SmoothScroll";

// Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import FooterMobile from '@/components/Mobile/FooterMobile';
import Link from "next/link";

// Jobs Data
import jobs from "@/components/Careers/JobsData";

import CareerTestimonial from "../components/Careers/Testimonial";

gsap.registerPlugin(ScrollTrigger);

export default function Careers(){

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

    return(
        <div className="bg-white">
            <Head>
                <title>
                    Enigma Digital | Careers | Find The Right Jobs
                </title>
                <meta
                    name="description"
                    content="Experience top-tier UI/UX design, front-end development, and organic marketing jobs with Enigma Digital. Find The Right Jobs"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=5.0">          
                </meta>
                <link rel="icon" href="/fav-icon.png" />
            </Head>

            <div className="loader-wrap" id="loader" style={{ zIndex: 999 }}>
                <div className='mainLoaderBg'>
                    <span className='mainLoaderBar' id='loaderbars'></span>
                    <span className='mainLoaderBar' id='loaderbars'></span>
                    <span className='mainLoaderBar' id='loaderbars'></span>
                    <span className='mainLoaderBar' id='loaderbars'></span>
                    <span className='mainLoaderBar' id='loaderbars'></span>
                </div>
                <div className="loader-wrap-heading">
                <span>
                    <h1>Find Jobs</h1>
                </span>
                </div>
            </div>

            <SmoothScroll />
            <Cursor isGelly={true} />

            <Header/>        

            {/* Main Content*/}
            <main>
                <section className="w-screen 2xl:pt-0 md:pt-32 pt-20 2xl:h-screen h-auto flex-col flex justify-center items-center text-center">
                    <div className="w-[80%] m-auto">
                        <div className="">
                            <h1 className="2xl:text-[6.5vw] md:text-[8vw] text-4xl font-medium leading-[1.3]">
                                <span>
                                    Find The<span className="color-primary"> Right Job</span>
                                    <br/>
                                    That You Need Now
                                </span>
                            </h1>
                        </div>
                        <div className="2xl:w-[75%] w-full mx-auto text-[gray] mt-5">
                            <p className="2xl:text-[1.4vw] md:text-[3.4vw] text-2xl 2xl:text-center text-justify font-body">
                                We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us.
                            </p>
                        </div>
                        <div className="2xl:mt-24 mt-12">
                            <button className="tw-primary hover:bg-primary hover:shadow-lg duration-300 hover:text-white border-primary border-2 rounded-xl py-2 md:py-3 px-6 md:px-8">
                                <span className="flex gap-5 items-center justify-center font-medium 2xl:text-2xl md:text-3xl text-xl font-body">
                                    View Openings
                                    <span>
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <g id="style=stroke">
                                            <g id="arrow-long-right">
                                            <path id="vector (Stroke)" fillRule="evenodd" clip-rule="evenodd" d="M1.94995 12C1.94995 12.4142 2.28574 12.75 2.69995 12.75L21.2 12.75C21.6142 12.75 21.95 12.4142 21.95 12C21.95 11.5858 21.6142 11.25 21.2 11.25L2.69995 11.25C2.28574 11.25 1.94995 11.5858 1.94995 12Z"/>
                                            <path id="vector (Stroke)_2" fillRule="evenodd" clip-rule="evenodd" d="M14.1696 4.46967C13.8767 4.76256 13.8767 5.23744 14.1696 5.53033L20.4625 11.8232C20.5601 11.9209 20.5601 12.0791 20.4625 12.1768L14.1696 18.4697C13.8767 18.7626 13.8767 19.2374 14.1696 19.5303C14.4625 19.8232 14.9374 19.8232 15.2303 19.5303L21.5232 13.2374C22.2066 12.554 22.2066 11.446 21.5232 10.7626L15.2303 4.46967C14.9374 4.17678 14.4625 4.17678 14.1696 4.46967Z"/>
                                            </g>
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="2xl:w-[75%] w-[80%] mx-auto text-center py-24 2xl:px-8 px-0">
                    <h2 className="2xl:text-[3.5vw] md:text-[7vw] text-4xl font-medium">
                        Browse<span className="color-primary"> Jobs</span>
                    </h2>
                    <div className="pb-8 mx-auto text-left relative font-body mt-12 flex 2xl:flex-row flex-col justify-start gap-4 2xl:items-center flex-wrap">
                        <button className="tw-hover group duration-300 text-black-1 hover:text-primary 2xl:text-[2.1vw] md:text-4xl text-2xl font-medium flex items-center">
                            Advertising Technology
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" src="/assets/icons/arrow-circle.svg"/>
                        </button>
                        <button className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl text-2xl font-medium flex items-center">
                            UI/UX Designer
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" src="/assets/icons/arrow-circle.svg"/>
                        </button>
                        <button className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl text-2xl font-medium flex items-center">
                            Front-End Developer
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" src="/assets/icons/arrow-circle.svg"/>
                        </button>
                        <button className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl text-2xl font-medium flex items-center">
                            Business Development
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" src="/assets/icons/arrow-circle.svg"/>
                        </button>
                        <button className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl text-2xl font-medium flex items-center">
                            Human Resource
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" src="/assets/icons/arrow-circle.svg"/>
                        </button>
                        <button className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl text-2xl font-medium flex items-center">
                            Marketing
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" src="/assets/icons/arrow-circle.svg"/>
                        </button>
                        <button className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl text-2xl font-medium flex items-center">
                            Motion Design
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" src="/assets/icons/arrow-circle.svg"/>
                        </button>
                        <button className="tw-hover group text-black-1 duration-300 hover:text-primary 2xl:text-[2.1vw] md:text-4xl text-2xl font-medium flex items-center">
                            Account Manager
                            <span className="bg-black-1 group-hover:opacity-0 duration-300 md:h-4 md:w-4 h-3 w-3 rounded-full ml-4"> 
                            </span>
                            <img className="w-8 h-8 ml-[-25px] opacity-0 duration-300 group-hover:opacity-100" src="/assets/icons/arrow-circle.svg"/>
                        </button>
                    </div>
                    <div className="block" data-cursor-size="70px" data-cursor-exclusion>
                        <button  className="before:absolute absolute before:top-[90%] before:bg-black before:h-[2px] before:w-full before:scale-0 hover:before:scale-100 before:duration-300 absolute md:bottom-0 bottom right-0 group text-black duration-300 2xl:text-[1.7vw] md:text-4xl text-3xl font-medium flex">
                            View all
                            <svg className="h-8 mt-1 w-8 ml-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <g id="style=stroke">
                                <g id="arrow-long-right">
                                <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M1.94995 12C1.94995 12.4142 2.28574 12.75 2.69995 12.75L21.2 12.75C21.6142 12.75 21.95 12.4142 21.95 12C21.95 11.5858 21.6142 11.25 21.2 11.25L2.69995 11.25C2.28574 11.25 1.94995 11.5858 1.94995 12Z"/>
                                <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M14.1696 4.46967C13.8767 4.76256 13.8767 5.23744 14.1696 5.53033L20.4625 11.8232C20.5601 11.9209 20.5601 12.0791 20.4625 12.1768L14.1696 18.4697C13.8767 18.7626 13.8767 19.2374 14.1696 19.5303C14.4625 19.8232 14.9374 19.8232 15.2303 19.5303L21.5232 13.2374C22.2066 12.554 22.2066 11.446 21.5232 10.7626L15.2303 4.46967C14.9374 4.17678 14.4625 4.17678 14.1696 4.46967Z"/>
                                </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </section>

                <section className="2xl:w-[75%] w-[80%] mx-auto my-28 lg:px-4">
                    <div className="2xl:flex block gap-24 w-full mx-0 2xl:mx-4 text-justify">
                        <div className="w-full 2xl:w-2/5 pb-16 2xl:pb-0">
                            <p className="mb-5 uppercase text-2xl md:text-4xl 2xl:text-2xl font-body font-bold tracking-wide">
                                Benefits
                            </p>
                            <h3 className="text-4xl md:text-[5vw] 2xl:text-[2.2vw] text-left mb-5 font-medium leading-[1.3]">
                                Why you Should Join Our
                                <span className="color-primary"> Awesome Team</span>
                            </h3>
                            <p className="text-gray-500 text-xl md:text-3xl 2xl:text-2xl font-light font-body">
                                We want to feel like home when you are working at JMC(Japan Marketing & Consultancy Limited) & for that we have curated a great set of benefits for you.It all starts with the free lunch!
                            </p>
                        </div>

                        <div className="w-full 2xl:w-3/5 grid-cols-1 grid md:grid-cols-2 gap-16">
                            <div>
                                <div className="tw-no-invert bg-[#E7F2FF] rounded-md p-6 w-24 h-24 mb-8">
                                    <img src="/assets/icons/career-1.svg" className="w-full h-full"/>
                                </div>
                                <p className="text-3xl 2xl:text-xl font-medium mb-8">
                                    Team Work
                                </p>
                                <p className="2xl:text-lg text-xl font-body tracking-wide text-gray-500 font-light">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                                </p>
                            </div>

                            <div>
                                <div className="tw-no-invert bg-[#F1F7E8] rounded-md p-6 w-24 h-24 mb-8">
                                    <img src="/assets/icons/career-2.svg" className="w-full h-full"/>
                                </div>
                                <p className="text-3xl 2xl:text-xl font-medium mb-8">
                                    Secured Future
                                </p>
                                <p className="2xl:text-lg text-xl font-body tracking-wide text-gray-500 font-light">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                                </p>
                            </div>

                            <div>
                                <div className="tw-no-invert bg-[#EFF2F5] rounded-md p-5 w-24 h-24 mb-8">
                                    <img src="/assets/icons/career-3.svg" className="w-full h-full"/>
                                </div>
                                <p className="text-3xl 2xl:text-xl font-medium mb-8">
                                    Learning Opportunity
                                </p>
                                <p className="2xl:text-lg text-xl font-body tracking-wide text-gray-500 font-light">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                                </p>
                            </div>

                            <div>
                                <div className="tw-no-invert bg-[#FFEEED] rounded-md p-6 w-24 h-24 mb-8">
                                    <img src="/assets/icons/career-4.svg" className="w-full h-full"/>
                                </div>
                                <p className="text-3xl 2xl:text-xl font-medium mb-8">
                                    Upgrate Skills
                                </p>
                                <p className="2xl:text-lg text-xl font-body tracking-wide text-gray-500 font-light">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-[80%] 2xl:w-[75%] mx-auto text-center py-12 md:py-24">
                    <h2 className="text-4xl leading-[1.2] md:text-[7vw] 2xl:text-[3.5vw] font-medium">
                        Latest<span className="color-primary"> Job Listing</span>
                    </h2>
                    <p className="font-body text-gray-500 text-xl md:text-3xl pt-2 md:pt-0 2xl:text-xl tracking-wide w-full 2xl:w-[50%] m-auto">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                        </span>
                    </p>

            {/*========Latest Job Listing=============*/}
                    <div className="grid grid-cols-1 2xl:grid-cols-3 mt-12 md:mt-24 gap-12 2xl:gap-6 text-left">
                        {jobs.map((job) => (
                            <div key={job.id}
                                 className="group font-body px-7 py-10 shadow-3xl rounded-2xl"
                                 >
                                 <div className="mb-6 flex items-center justify-between md:justify-start gap-0 md:gap-12">
                                    <img src={`/assets/careers/${job.image}`} className="w-20 h-20 md:w-28 md:h-28"/>
                                    <div>
                                        <h4 className="mb-1 font-display text-2xl md:text-3xl text-black font-medium">Lorem Ipsum</h4>
                                        <p className="text-xl text-gray-500 tracking-wide">London, UK</p>
                                    </div>
                                 </div>
                                 <div className="w-full mb-6 md:mb-3">
                                 <h4 className="mb-6 md:mb-3 font-display text-3xl text-black font-medium w-full md:flex block items-center justify-between">{job.title} <span className="group-hover:bg-primary duration-300 text-base bg-black font-light px-2 py-1 rounded-md text-white tw-no-invert">{job.type}</span></h4>
                                    <p className="text-xl md:text-2xl leading-[1.3] text-gray-400 ">{job.sDescription}</p>
                                 </div>
                            
                                <div className="grid md:grid-cols-2 gap-y-2 md:gap-y-6 mb-6 md:mb-12">
                                {job.benefits.map((benefit, index) => (
                                    <div key={index}>
                                        <span className="bg-primary p-[2.5px] rounded mr-3 tw-no-invert"><img className="w-4" src="/assets/icons/check.svg"/></span>
                                        <span className="text-xl">{benefit}</span>
                                    </div>
                                ))}
                                </div>
                                
                                {/* Link to job details */}
                                <Link href={`/careers/${job.slug}`} className="tw-primary block w-full hover:bg-primary hover:shadow-lg duration-300 hover:text-white border-primary border-2 rounded-xl py-3 px-8">
                                    <span className="flex gap-5 items-center justify-center font-medium text-xl md:text-2xl font-body">
                                        View Openings
                                        <span>
                                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <g id="style=stroke">
                                                <g id="arrow-long-right">
                                                <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M1.94995 12C1.94995 12.4142 2.28574 12.75 2.69995 12.75L21.2 12.75C21.6142 12.75 21.95 12.4142 21.95 12C21.95 11.5858 21.6142 11.25 21.2 11.25L2.69995 11.25C2.28574 11.25 1.94995 11.5858 1.94995 12Z"/>
                                                <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M14.1696 4.46967C13.8767 4.76256 13.8767 5.23744 14.1696 5.53033L20.4625 11.8232C20.5601 11.9209 20.5601 12.0791 20.4625 12.1768L14.1696 18.4697C13.8767 18.7626 13.8767 19.2374 14.1696 19.5303C14.4625 19.8232 14.9374 19.8232 15.2303 19.5303L21.5232 13.2374C22.2066 12.554 22.2066 11.446 21.5232 10.7626L15.2303 4.46967C14.9374 4.17678 14.4625 4.17678 14.1696 4.46967Z"/>
                                                </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-[80%] 2xl:w-[75%] mx-auto text-center py-12 md:py-24">
                    <h2 className="text-4xl leading-[1.2] md:text-[7vw] 2xl:text-[3.5vw] font-medium">
                        Join Our<span className="color-primary"> Team</span>
                    </h2>
                    <p className="font-body text-gray-500 md:pt-0 pt-3 text-xl md:text-3xl 2xl:text-2xl tracking-wide w-full 2xl:w-[50%] m-auto">
                        <span>
                            Over 1 million interactions, 60,000 success stories make yours now
                        </span>
                    </p>

                {/*========Job Listing=============*/}
                <div className="grid grid-cols-1 2xl:grid-cols-3 mt-12 md:mt-24 gap-12 2xl:gap-6 text-left">
                        {jobs.map((job) => (
                            <div key={job.id}
                                 className="group font-body px-7 py-10 shadow-3xl rounded-2xl"
                                 >
                                 <div className="w-full mb-6 md:mb-3">
                                 <h4 className="mb-6 md:mb-3 font-display text-3xl text-black font-medium w-full md:flex block items-center justify-between">{job.title} <span className="group-hover:bg-primary duration-300 text-base bg-black font-light px-2 py-1 rounded-md text-white tw-primary">{job.type}</span></h4>
                                    <p className="text-xl md:text-2xl leading-[1.3] text-gray-400 ">{job.sDescription}</p>
                                 </div>
                            
                                <div className="grid md:grid-cols-2 gap-y-2 md:gap-y-6 mb-6 md:mb-12">
                                {job.benefits.map((benefit, index) => (
                                    <div key={index}>
                                        <span className="bg-primary p-[2.5px] rounded mr-3 tw-no-invert"><img className="w-4" src="/assets/icons/check.svg"/></span>
                                        <span className="text-xl">{benefit}</span>
                                    </div>
                                ))}
                                </div>
                                
                                {/* Link to job details */}
                                <Link href={`/careers/${job.slug}`} className="tw-primary block w-full hover:bg-primary hover:shadow-lg duration-300 hover:text-white border-primary border-2 rounded-xl py-3 px-8">
                                    <span className="flex gap-5 items-center justify-center font-medium text-xl md:text-2xl font-body">
                                        View Openings
                                        <span>
                                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <g id="style=stroke">
                                                <g id="arrow-long-right">
                                                <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M1.94995 12C1.94995 12.4142 2.28574 12.75 2.69995 12.75L21.2 12.75C21.6142 12.75 21.95 12.4142 21.95 12C21.95 11.5858 21.6142 11.25 21.2 11.25L2.69995 11.25C2.28574 11.25 1.94995 11.5858 1.94995 12Z"/>
                                                <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M14.1696 4.46967C13.8767 4.76256 13.8767 5.23744 14.1696 5.53033L20.4625 11.8232C20.5601 11.9209 20.5601 12.0791 20.4625 12.1768L14.1696 18.4697C13.8767 18.7626 13.8767 19.2374 14.1696 19.5303C14.4625 19.8232 14.9374 19.8232 15.2303 19.5303L21.5232 13.2374C22.2066 12.554 22.2066 11.446 21.5232 10.7626L15.2303 4.46967C14.9374 4.17678 14.4625 4.17678 14.1696 4.46967Z"/>
                                                </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <CareerTestimonial/>

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