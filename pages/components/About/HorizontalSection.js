import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSection() {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const totalPanels = panels.current.length;

      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 1,
          start: "top top",
          //   snap: 1 / (totalPanels - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + panelsContainer.current.offsetWidth,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="container-about" ref={panelsContainer}>
        <div className="panel-about" ref={(e) => createPanelsRefs(e, 0)}>
          <div className="sections-horizontal">
            <h1
              className="stroke"
              data-cursor-background-image="/assets/gif/experience.gif"
              data-cursor-size="300px"
              data-cursor-color="#000"
            >
              01. <span className="about-hr-heading">culture</span>
            </h1>
            <p>
              We don’t work for clients. We work for our brand partners. And as
              partners, we make sure to craft disruptive digital solutions using
              purposeful strategy, beautiful designs & user-centric technology
              that makes you a part of the very best on the web.
            </p>
          </div>
        </div>
        <section className="panel-about" ref={(e) => createPanelsRefs(e, 1)}>
          <div className="sections-horizontal ml-0 ml-10">
            <h1
              className="stroke"
              data-cursor-background-image="/assets/gif/experience.gif"
              data-cursor-size="300px"
              data-cursor-color="#000"
            >
              02. <span className="about-hr-heading">ethos</span>
            </h1>
            <p>
              While we are definitely smarter than we look (it's not difficult),
              we pride ourselves on being humble and down-to-earth creatures.
              Our ethos are simple – Keep learning, Keep Growing & even when you
              think you’ve created the best there is, there is always room for
              improvement.
            </p>
          </div>
        </section>
        <section className="panel-about" ref={(e) => createPanelsRefs(e, 2)}>
          <div className="sections-horizontal ml-0">
            <h1
              className="stroke"
              data-cursor-background-image="/assets/gif/experience.gif"
              data-cursor-size="300px"
              data-cursor-color="#000"
            >
              03. <span className="about-hr-heading">attitude</span>
            </h1>
            <p>
              You might have intricate requirements but we’ve got ambition,
              imagination, skills and the tools to match them. That’s 4-to-1 to
              us. It just can’t go wrong. Can it?
            </p>
          </div>
        </section>
        <section className="panel-about" ref={(e) => createPanelsRefs(e, 3)}>
          <div className="sections-horizontal ml-0">
            <h1
              className="stroke"
              data-cursor-background-image="/assets/gif/experience.gif"
              data-cursor-size="300px"
              data-cursor-color="#000"
            >
              04. <span className="about-hr-heading">experience</span>
            </h1>
            <p>
              An agency is only as strong as its people. Our team members come
              with a solid experience of working with well-known agencies, for
              Fortune 500 brands, running their own businesses, designing game
              changing products and even competing at professional level in
              sports.
            </p>
          </div>
        </section>
        <section className="panel-about" ref={(e) => createPanelsRefs(e, 4)}>
          <div className="sections-horizontal ml-0">
            <h1
              className="stroke"
              data-cursor-background-image="/assets/gif/experience.gif"
              data-cursor-size="300px"
              data-cursor-color="#000"
            >
              05. <span className="about-hr-heading">magic</span>
            </h1>
            <p>
              Yes! You read that one just about right. We make magic... We just
              don’t do campaigns. We focuson user driven outcomes and endeavour
              to create meaningful connections between brands and its users.
              Somewhere between devising a strategy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
