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

  // Services Accordian
  // useEffect(() => {
  //   let accordion = document.querySelector(".accordion-list");
  //   let items = accordion.querySelectorAll("li");
  //   let questions = accordion.querySelectorAll(".accordion-title");

  //   questions.forEach((question) =>
  //     question.addEventListener("click", toggleAccordion)
  //   );

  //   function toggleAccordion() {
  //     let thisItem;
  //     thisItem = this.parentNode;

  //     items.forEach((item) => {
  //       if (thisItem == item) {
  //         thisItem.classList.add("open");
  //         return;
  //       }
  //       item.classList.remove("open");
  //     });
  //   }
  // });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".category-section-new",
        start: "-600 top",
      },
    });

    const demoHeader = document.querySelectorAll(".accordion-list li");
    // Header
    tl.fromTo(
      demoHeader,
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
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
                <li>
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
                          Strategic planning based on insight is the starting
                          point of everything we do. Using a blend of strategic
                          thinking, broad marketing experience, insights, proven
                          best practices, and sound judgment, we create
                          effective strategies that transform insights into
                          actionable plans and deliver measurable results.
                        </p>
                        <p>
                          <b> </b> Digital Advisory and Consulting, Integrated
                          Digital Marketing Plan (D.M.P.), User Experience
                          Development, Customer Experience Strategy, Consumer
                          Research, Insights &amp; Target Market Analysis,
                          Digital Capabilities Development, Persona Design &amp;
                          Customer Segmentation, Competitive Analysis &amp;
                          Industry Insights, Brand &amp; Content Strategy,
                          Digital Marketing and Website Performance Audit.
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
                              <span className="arro">
                                <img src="/assets/arrow.png" alt="Icon" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
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
                          We solve complex design problems through user
                          research, expert analysis, prototyping and
                          collaborative design with users &amp; stakeholders.
                          Embracing the power of modern tools and our
                          proprietary approach, we to build delightful &amp;
                          intuitive experiences to bridge the gap between the
                          physical &amp; digital world.
                        </p>
                        <p>
                          <strong /> User Interface Design, User Experience
                          Design, Responsive Web Design, Mobile App Design,
                          Digital Interface Design, Design Systems Creation,
                          Experience Mapping, User Flow Mapping, Wireframing
                          &amp; Prototyping, Illustrations &amp; Animations,
                          Visual Designs, and UI Kits.
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
                              <span className="arro">
                                <img src="/assets/arrow.png" alt="Icon" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
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
                          A human-centred, design-led approach to product
                          development that leverages cutting-edge technologies
                          &amp; agile methodology, committed to putting you on a
                          path to success in the ever-changing technological
                          landscape.
                        </p>
                        <p>
                          <strong /> Front-End Development, Native &amp; Hybrid
                          Mobile Application Development, Progressive Web
                          Applications, Database Design &amp; Management, Cloud
                          Infrastructure Services, Testing &amp; Automation TECH
                          STACK - HTML, CSS, Sass, Less, JavaScript, jQuery,
                          GSAP, Vue, React, React Native, Ionic, Flutter,
                          NodeJS, Spring, JAVA, Grails, Hibernate, MySQL,
                          PostgreSQL, Oracle, Mongo, AWS and Google Cloud.
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
                              <span className="arro">
                                <img src="/assets/arrow.png" alt="Icon" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
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
                          We believe digital isn’t just the word of the moment.
                          It is the way forward! Combining this belief with our
                          passion for creating state-of-the-art digital
                          campaigns and captivating user experiences, we have
                          evolved into an agency capable of adapting to the
                          ever-changing world of digital marketing.
                        </p>
                        <p>
                          <strong /> Social Media Management, Content Creation
                          &amp; Curation, Search Engine Optimisation, Influencer
                          Management, Auction Media Management, Online
                          Reputation Management, Media Planning &amp; Buying,
                          Marketing Automation, Email Marketing, Conversion Rate
                          Optimisation, Website &amp; SEO Analysis.
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
                              <span className="arro">
                                <img src="/assets/arrow.png" alt="Icon" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
