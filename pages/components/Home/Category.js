'use client';
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Category() {
  // Strategy
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (document.querySelector(".anim .strategy")) {
        gsap.to(".anim .strategy", {
          xPercent: 100,
          ease: "none",
          scrollTrigger: {
            trigger: ".category-section",
            start: "-80% top",
            end: "bottom center",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  });

  // Design
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (document.querySelector(".anim .design")) {
        gsap.to(".anim .design", {
          xPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: ".category-section",
            start: "-80% top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  });

  // Technology
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (document.querySelector(".anim .technology")) {
        gsap.to(".anim .technology", {
          xPercent: 100,
          ease: "none",
          scrollTrigger: {
            trigger: ".category-section",
            start: "-80% top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  });

  // Marketing
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (document.querySelector(".anim .marketing")) {
        gsap.to(".anim .marketing", {
          xPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: ".category-section",
            start: "-80% top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".category-section-new",
        start: "top 70%",
        // markers: "true",
      },
    });

    const demoHeader = document.querySelectorAll(".accordion-list>li");
    // Header
    tl.fromTo(
      demoHeader,
      {
        opacity: 0,
        y: 100,
      },
      {
        delay: 0.5,
        y: 0,
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
      }
    );
  });

//   useEffect(() => {
//     // Select the marker element
//     const marker = document.getElementById('services');

//     // Select all the li elements
//     const listItems = document.querySelectorAll('.accordion-list-item');

//   //   // Loop through each li element
//   //   listItems.forEach((item) => {
//   //     // Create a GSAP animation for the current li element
//   //     gsap.from(item, {
//   //       opacity: 0,
//   //       y: 100,
//   //       duration: 0.5,
//   //       ease: 'power2.out',
//   //       scrollTrigger: {
//   //         trigger: marker,
//   //         start: 'top 80%', // Adjust the start position as per your needs
//   //         end: '+=100', // Adjust the end position as per your needs
//   //         toggleActions: 'play none none reverse',
//   //       },
//   //     });
//   //   });


//   listItems.forEach((item) => {
//     // Create a GSAP animation for the current li element
//     gsap.fromTo(
//       item,
//       { opacity: 0, y: 100 },
//       { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
//           trigger: marker,
//           start: 'top 80%',
//           end: '+=100',
//           markers: "true",
//         },
//       }
//     );
//   });
// }, []);

  // LI Animate
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "top 70%",
      },
    });
    tl.fromTo(
      ".line-animation",
      { opacity: 0, width: "0" },
      {
        width: "100%",
        opacity: 1,
        duration: 1,
        stagger: 0.5,
      }
    );
  });

  return (
    <>
      <div className="category-section-new">
        <section id="services">
          <div className="container">
            <div className="accordion-container flex-column-center">
              <ul className="accordion-list accordion">
                <li className="accordion-list-item">
                  <div className="accordion-title accordion-item">
                    <div className="accordion-item-content">
                      <span>01</span>
                      <h2 className="text-stroke-fil-ctr" data-fill="Strategy">
                        Strategy
                      </h2>

                      <button className="plus-rotate">
                        <span className="minus-span"></span>
                        <img className="plus-img" src="/assets/plus.png" />
                        <span className="bottom-span"></span>
                      </button>

                      <div className="cont">
                        <p>
                        Strategic planning based on insight is the starting point of everything we do. Using a blend of strategic thinking, broad marketing experience, insights, proven best practices, and sound judgment, we create effective strategies that transform insights into actionable plans and deliver measurable results.
                        </p>
                        <p>
                          Driving growth and success for your brand needs a brilliant plan (roadmap) that is rooted in deep insights and aimed at delivering tangible results. Our strategy consulting services includes: Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Competitive Analysis & Industry Insights, Brand & Content Strategy, Digital Marketing and Website Performance Audit.
                        </p>
                        <div className="en-form-submit">
                          <a
                            href="#"
                            className="en-btn en-btn_send"
                            data-magnetic
                            data-cursor="-opaque"
                          >
                            <span data-text="Transform Your Business">
                              Transform Your Business
                              <span className="arro emoji-dark">
                                <img src="/assets/arrow.png" alt="Icon" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="line-animation"
                    style={{
                      width: "100%",
                      height: "2px",
                      background: "black",
                    }}
                  ></div>
                </li>
                <li className="accordion-list-item">
                  <div className="accordion-title accordion-item">
                    <div className="accordion-item-content">
                      <span>02</span>
                      <h2
                        className="text-stroke-fil-ctr"
                        data-fill="UI/UX Design"
                      >
                        UI/UX Design
                      </h2>
                      <button className="plus-rotate">
                        <span className="minus-span"></span>
                        <img className="plus-img" src="/assets/plus.png" />
                        <span className="bottom-span"></span>
                      </button>

                      <div className="cont">
                        <p>
                        We unravel complex design challenges through meticulous user research, expert analysis, prototyping, and collaborative design with users and stakeholders. Harnessing the power of cutting-edge tools and our proprietary approach we craft delightful and intuitive experiences that seamlessly connect the physical and digital worlds.
                        </p>
                        <p>
                          <strong /> Our design services are a symphony of creativity and functionality, creating digital experiences that captivate and engage. Services we offer include: User Interface Design, User Experience Design, Responsive Web Design, Mobile App Design, Digital Interface Design, Design Systems Creation, Experience Mapping, User Flow Mapping, Wireframing & Prototyping, Illustrations & Animations, Visual Designs.
                        </p>
                        <div className="en-form-submit">
                          <a
                            href="#"
                            className="en-btn en-btn_send"
                            data-magnetic
                            data-cursor="-opaque"
                          >
                            <span data-text="Upgrade Your Experience">
                              Upgrade Your Experience
                              <span className="arro emoji-dark">
                                <img src="/assets/arrow.png" alt="Icon" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="line-animation"
                    style={{
                      width: "100%",
                      height: "2px",
                      background: "black",
                    }}
                  ></div>
                </li>
                <li className="accordion-list-item">
                  <div className="accordion-title accordion-item">
                    <div className="accordion-item-content">
                      <span>03</span>
                      <h2
                        className="text-stroke-fil-ctr"
                        data-fill="Technology"
                      >
                        Technology
                      </h2>

                      <button className="plus-rotate">
                        <span className="minus-span"></span>
                        <img className="plus-img" src="/assets/plus.png" />
                        <span className="bottom-span"></span>
                      </button>

                      <div className="cont">
                        <p>
                        A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape.
                        </p>
                        <p>
                        We craft digital solutions that are not just functional, but also intuitive and engaging. Our front-end development services include: HTML, CSS, JavaScript, Vue, React, Angular, GSAP, and WordPress. For mobile application development, we utilize technologies like Ionic and Flutter. On the server-side, we leverage PHP, NodeJS and Python to create robust back-ends. 
                        </p>
                        <div className="en-form-submit">
                          <a
                            href="#"
                            className="en-btn en-btn_send"
                            data-magnetic
                            data-cursor="-opaque"
                          >
                            <span data-text="Let’s Build Your Idea">
                              Let’s Build Your Idea
                              <span className="arro emoji-dark">
                                <img src="/assets/arrow.png" alt="Icon" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="line-animation"
                    style={{
                      width: "100%",
                      height: "2px",
                      background: "black",
                    }}
                  ></div>
                </li>
                <li className="accordion-list-item">
                  <div className="accordion-title accordion-item">
                    <div className="accordion-item-content">
                      <span>04</span>
                      <h2 className="text-stroke-fil-ctr" data-fill="Marketing">
                        Marketing
                      </h2>

                      <button className="plus-rotate">
                        <span className="minus-span"></span>
                        <img className="plus-img" src="/assets/plus.png" />
                        <span className="bottom-span"></span>
                      </button>

                      <div className="cont">
                        <p>
                          Our marketing strategies are not just designed to create a lasting impact, but to drive engagement, foster brand loyalty, and navigate the ever-evolving digital landscape with finesse and agility.
                        </p>
                        <p>
                          For us, 'DIGITAL' isn't just a buzzword—it's the path to the future! This belief has shaped our service offerings to evolve for our clients' requirements & subsequently their success. We offer: Social Media Management, Content Creation & Curation, Search Engine Optimisation, Influencer Management, Online Reputation Management, Marketing Automation, Email Marketing, Conversion Rate Optimisation and Website & SEO Analysis.
                        </p>
                        <div className="en-form-submit">
                          <a
                            href="#"
                            className="en-btn en-btn_send"
                            data-magnetic
                            data-cursor="-opaque"
                          >
                            <span
                              data-text="Ready? Let’s Get
                                                Moving"
                            >
                              Ready? Let’s Get Moving
                              <span className="arro emoji-dark">
                                <img src="/assets/arrow.png" alt="Icon" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="line-animation"
                    style={{
                      width: "100%",
                      height: "2px",
                      background: "black",
                    }}
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
