import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Category() {

  const catSection = useRef(null);

  useEffect(() => {
    const listItem = (".accordion-list > li");
    const ctx = gsap.context(() => {
        const cateList = gsap.timeline({
            scrollTrigger: {
                trigger: catSection.current,
                start: "top 80%",
                markers: false,
            }
        });

        cateList.fromTo( listItem, {
            opacity: 0,
            y: 300,
        },
        {   
            duration: 1.3,
            opacity: 1,
            y: 0,
            stagger: 0.2,
        });
    }, catSection);
    return () => ctx.revert();
  }, []);

  // LI Animate
  useEffect(() => {
    const listLine = (".accordion-list-item .line-animation");
    const ctx = gsap.context(() => {
    const catLine = gsap.timeline({
      scrollTrigger: {
        trigger: catSection.current,
        start: "top 75%",
      },
    });
    catLine.fromTo( listLine, { 
        opacity: 0, 
        width: "0" 
    },
    {
        delay: .1,
        width: "100%",
        opacity: 1,
        duration: 1,
        stagger: 0.5,
      });
    }, catSection);
    return () => ctx.revert();
  }, []);


  return (
    <>
      <div ref={catSection} className="category-section-new">
        <section id="services">
          <div className="container">
            <div className="accordion-container flex-column-center">
              <ul className="accordion-list accordion">
                <li className="accordion-list-item">
                  <div className="accordion-title accordion-item cat-1">
                    <div className="accordion-item-content">
                      <span>01</span>
                      <h2 className="text-stroke-fil-ctr" data-fill="Strategy">
                        Strategy
                      </h2>

                      <button aria-label="No Work" className="plus-rotate">
                        <span className="minus-span"></span>
                        <img className="plus-img" src="/assets/icons/plus.png" 
                              width={40} height={40} alt="Plus Icon" />
                        <span className="bottom-span"></span>
                      </button>

                      <div className="cont">
                        <p>
                        Strategic planning based on insight is the starting point of everything we do. Combining strategic thinking, wide marketing experience, insights, best practices, and sound judgment, we craft effective strategies that turn insights into measurable results.
                        </p>
                        <p>
                          Driving growth and success for your brand needs a brilliant plan (roadmap) that is rooted in deep insights and aimed at delivering tangible results. Our strategy consulting services includes: Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Digital Marketing and Website Performance Audit.
                        </p>
                      </div>

                      <div className="category-button">
                        <a href="/strategy-and-planning">
                          <span className="cat-btn-text">
                            Transform Your Business
                          </span>
                          <span className="cat-btn-arrow">
                            <img width={15} height={15} src="/assets/icons/arrow.png" alt="Icon" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="line-animation category-line cat-one-1"></div>
                </li>
                <li className="accordion-list-item">
                  <div className="accordion-title accordion-item cat-2">
                    <div className="accordion-item-content">
                      <span>02</span>
                      <h2
                        className="text-stroke-fil-ctr"
                        data-fill="UI/UX Design"
                      >
                        UI/UX Design
                      </h2>
                      <button aria-label="No Work" className="plus-rotate">
                        <span className="minus-span"></span>
                        <img className="plus-img" src="/assets/icons/plus.png" width={40} height={40} alt="Plus Icon" />
                        <span className="bottom-span"></span>
                      </button>

                      <div className="cont">
                        <p>
                        We unravel complex design challenges through meticulous user research, expert analysis, prototyping, and collaborative design with users and stakeholders. Harnessing the power of cutting-edge tools and our proprietary approach we craft delightful and intuitive experiences that seamlessly connect the physical and digital worlds.
                        </p>
                        <p>
                          <strong /> Our design services are a symphony of creativity and functionality, creating digital experiences that captivate and engage. Services we offer include: User Interface Design, User Experience Design, Responsive Web Design, Mobile App Design, Digital Interface Design, Design Systems Creation, Experience Mapping, User Flow Mapping, Wireframing & Prototyping, Illustrations & Animations, Visual Designs.
                        </p>
                      </div>

                      <div className="category-button">
                        <a href="/ui-ux-design" >
                          <span className="cat-btn-text">
                            Upgrade Your Experience
                          </span>
                          <span className="cat-btn-arrow">
                          <img width={15} height={15} src="/assets/icons/arrow.png" alt="Icon" />
                          </span>
                        </a>
                      </div>

                    </div>
                  </div>
                  <div className="line-animation category-line cat-one-2"></div>
                </li>
                <li className="accordion-list-item">
                  <div className="accordion-title accordion-item cat-3">
                    <div className="accordion-item-content">
                      <span>03</span>
                      <h2
                        className="text-stroke-fil-ctr"
                        data-fill="Technology"
                      >
                        Technology
                      </h2>

                      <button aria-label="No Work" className="plus-rotate">
                        <span className="minus-span"></span>
                        <img className="plus-img" src="/assets/icons/plus.png" width={40} height={40} alt="Plus Icon" />
                        <span className="bottom-span"></span>
                      </button>

                      <div className="cont">
                        <p>
                        A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape.
                        </p>
                        <p>
                        We craft digital solutions that are not just functional, but also intuitive and engaging. Our front-end development services include: HTML, CSS, JavaScript, Vue, React, Angular, GSAP, and WordPress. For mobile application development, we utilize technologies like Ionic and Flutter. On the server-side, we leverage PHP, NodeJS and Python to create robust back-ends. 
                        </p>
                      </div>

                      <div className="category-button">
                        <a href="/technology-stack" >
                          <span className="cat-btn-text">
                            Let’s Build Your Idea
                          </span>
                          <span className="cat-btn-arrow">
                          <img width={15} height={15} src="/assets/icons/arrow.png" alt="Icon" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="line-animation category-line cat-line-3"></div>
                </li>
                <li className="accordion-list-item">
                  <div className="accordion-title accordion-item cat-4">
                    <div className="accordion-item-content">
                      <span>04</span>
                      <h2 className="text-stroke-fil-ctr" data-fill="Marketing">
                        Marketing
                      </h2>

                      <button aria-label="No Work" className="plus-rotate">
                        <span className="minus-span"></span>
                        <img className="plus-img" src="/assets/icons/plus.png" width={40} height={40} alt="Plus Icon" />
                        <span className="bottom-span"></span>
                      </button>

                      <div className="cont">
                        <p>
                          Our marketing strategies are not just designed to create a lasting impact, but to drive engagement, foster brand loyalty, and navigate the ever-evolving digital landscape with finesse and agility.
                        </p>
                        <p>
                          For us, 'DIGITAL' isn't just a buzzword—it's the path to the future! This belief has shaped our service offerings to evolve for our clients' requirements & subsequently their success. We offer: Social Media Management, Content Creation & Curation, Search Engine Optimisation, Influencer Management, Online Reputation Management, Marketing Automation, Email Marketing, Conversion Rate Optimisation and Website & SEO Analysis.
                        </p>
                      </div>

                      <div className="category-button">
                        <a href="/marketing-and-analysis" >
                          <span className="cat-btn-text">
                            Ready? Let’s Get Moving
                          </span>
                          <span className="cat-btn-arrow">
                          <img width={15} height={15} src="/assets/icons/arrow.png" alt="Icon" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="line-animation category-line cat-line-4"></div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
