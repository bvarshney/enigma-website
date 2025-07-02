"use client"
import React, { useEffect } from "react";
import gsap from "gsap";

const ServiceMarquee = () => {
    useEffect(() => {
        gsap.utils.toArray(".services-catalog-row").forEach((line, i) => {
            const links = line.querySelectorAll(".services-catalog-row-item"),
                tl = horizontalLoop(links, {
                    repeat: -1,
                    speed: 0.7 + i * 0.1,
                    reversed: true,
                    paddingRight: parseFloat(
                        gsap.getProperty(links[0], "marginRight", "px")
                    ),
                });
        });

        gsap.utils.toArray(".services-catalog-row").forEach((line, i) => {
            const links = line.querySelectorAll(".services-catalog-row-item"),
                tl = horizontalLoop(links, {
                    repeat: -1,
                    speed: 0.7 + i * 0.1,
                    reversed: true,
                    paddingRight: parseFloat(
                        gsap.getProperty(links[0], "marginRight", "px")
                    ),
                });
        });
    }, []);

    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: { ease: "none" },
            onReverseComplete: () =>
                tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap =
                config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
            totalWidth,
            curX,
            distanceToStart,
            distanceToLoop,
            item,
            i;
        gsap.set(items, {
            // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
            xPercent: (i, el) => {
                let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
                xPercents[i] = snap(
                    (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                    gsap.getProperty(el, "xPercent")
                );
                return xPercents[i];
            },
        });
        gsap.set(items, { x: 0 });
        totalWidth =
            items[length - 1].offsetLeft +
            (xPercents[length - 1] / 100) * widths[length - 1] -
            startX +
            items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], "scaleX") +
            (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
            item = items[i];
            curX = (xPercents[i] / 100) * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop =
                distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(
                item,
                {
                    xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                    duration: distanceToLoop / pixelsPerSecond,
                },
                0
            )
                .fromTo(
                    item,
                    {
                        xPercent: snap(
                            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                        ),
                    },
                    {
                        xPercent: xPercents[i],
                        duration:
                            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                        immediateRender: false,
                    },
                    distanceToLoop / pixelsPerSecond
                )
                .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }
        function toIndex(index, vars) {
            vars = vars || {};
            Math.abs(index - curIndex) > length / 2 &&
                (index += index > curIndex ? -length : length); // always go in the shortest direction
            let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
            if (time > tl.time() !== index > curIndex) {
                // if we're wrapping the timeline's playhead, make the proper adjustments
                vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            curIndex = newIndex;
            vars.overwrite = true;
            return tl.tweenTo(time, vars);
        }
        tl.next = (vars) => toIndex(curIndex + 1, vars);
        tl.previous = (vars) => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
        }
        return tl;
    }

    return (
        <section>
            <div className="relative flex overflow-hidden pb-[10%] pt-[15%] items-center flex-col justify-center">

                <div className="services-catalog-title mb-[5vw] mobile:px-[10%] mobile:mb-[10vw]">
                    <h5 className="font-heading font-medium text-[4.5vw] tablet:text-center tablet:text-[8vw] tablet:leading-[1.2] mobile:text-[9vw] title-anim">
                        full catalogue of our services. 👨‍💻
                    </h5>
                </div>

                <div className="w-full h-full space-y-[3.5vw] text-[1.5vw] font-heading tablet:text-[3vw] mobile:text-[4vw] fadeup">
                    {/* Row 1 */}
                    <div className="services-catalog-row flex justify-between items-center flex-row whitespace-nowrap p-0 will-change-transform relative">
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Digital Advisory and Consulting
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">Consumer Research</div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Integrated Digital Marketing Plan (D.M.P.)
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Insights & Target Market Analysis
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            User Experience Development
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Customer Experience Strategy
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Digital Capabilities Development
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Persona Design & Customer Segmentation
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Competitive Analysis & Industry Insights
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Brand & Content Strategy
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">Digital Marketing</div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Website Performance Audit
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="services-catalog-row justify-between items-center flex-row whitespace-nowrap p-0 will-change-transform relative">
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">User Interface Design</div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            User Experience Design
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">Responsive Web Design</div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Mobile App Design
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Digital Interface Design
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Design Systems Creation
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Experience Mapping
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            User Flow Mapping
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Wireframing & Prototyping
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Illustrations & Animations
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Visual Designs & UI Kits.
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="services-catalog-row justify-between items-center flex-row whitespace-nowrap p-0 will-change-transform relative">
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">Front-End Development</div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Native & Hybrid Mobile Application Development
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Progressive Web Applications
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Database Design & Management
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Cloud Infrastructure Services
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">Testing & Automation</div>
                    </div>

                    {/* Row 4 */}
                    <div className="services-catalog-row justify-between items-center flex-row whitespace-nowrap p-0 will-change-transform relative">
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Social Media Management
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Content Creation & Curation
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Search Engine Optimisation
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">Influencer Management</div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Auction Media Management
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="services-catalog-row justify-between items-center flex-row whitespace-nowrap p-0 will-change-transform relative">
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Online Reputation Management
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
                            Media Planning & Buying
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">Marketing Automation</div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Email Marketing
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Conversion Rate Optimisation
                        </div>
                        <div className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw] opacity-[0.6]">
                            Website & SEO Analysis
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceMarquee;

// import React, { useEffect } from "react";
// import gsap from "gsap";

// const ServiceMarquee = () => {
//     useEffect(() => {
//         const rows = gsap.utils.toArray(".services-catalog-row");
//         rows.forEach((line, i) => {
//             const links = line.querySelectorAll(".services-catalog-row-item");
//             createHorizontalLoop(links, {
//                 repeat: -1,
//                 speed: 0.7 + i * 0.1,
//                 paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px")),
//             });
//         });
//     }, []);

//     function createHorizontalLoop(items, config = {}) {
//         items = gsap.utils.toArray(items);
//         const tl = gsap.timeline({
//             repeat: config.repeat,
//             paused: config.paused,
//             defaults: { ease: "none" },
//             onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
//         });

//         let totalWidth = 0;
//         const pixelsPerSecond = (config.speed || 1) * 100;

//         // Accumulate the total width properly and set the initial positions
//         items.forEach((item, i) => {
//             const itemWidth = item.offsetWidth + (parseFloat(config.paddingRight) || 0);
//             totalWidth += itemWidth;
//             tl.to(item, {
//                 x: `-=${totalWidth}`, // Move each item to the left by the total width after it has been processed.
//                 duration: itemWidth / pixelsPerSecond,
//                 modifiers: {
//                     x: gsap.utils.unitize(value => parseFloat(value) % totalWidth + "px"), // Keep the item within bounds
//                 },
//             }, i * (itemWidth / pixelsPerSecond));
//         });

//         return tl;
//     }

//     return (
//         <section>
//             <div className="relative flex overflow-hidden py-[15%] items-center flex-col justify-center">
//                 <div className="services-catalog-title mb-[5vw]">
//                     <h5 className="font-heading font-medium text-[4.5vw]">
//                         full catalogue of our services. 👨‍💻
//                     </h5>
//                 </div>

//                 <div className="w-full h-full space-y-[3.5vw] text-[1.5vw] font-heading">
//                     {[
//                         [
//                             "Digital Advisory and Consulting",
//                             "Consumer Research",
//                             "Integrated Digital Marketing Plan (D.M.P.)",
//                             "Insights & Target Market Analysis",
//                             "User Experience Development",
//                             "Customer Experience Strategy",
//                             "Digital Capabilities Development",
//                             "Persona Design & Customer Segmentation",
//                             "Competitive Analysis & Industry Insights",
//                             "Brand & Content Strategy",
//                             "Digital Marketing",
//                             "Website Performance Audit",
//                         ],
//                         [
//                             "User Interface Design",
//                             "User Experience Design",
//                             "Responsive Web Design",
//                             "Mobile App Design",
//                             "Digital Interface Design",
//                             "Design Systems Creation",
//                             "Experience Mapping",
//                             "User Flow Mapping",
//                             "Wireframing & Prototyping",
//                             "Illustrations & Animations",
//                             "Visual Designs & UI Kits.",
//                         ],
//                         [
//                             "Front-End Development",
//                             "Native & Hybrid Mobile Application Development",
//                             "Progressive Web Applications",
//                             "Database Design & Management",
//                             "Cloud Infrastructure Services",
//                             "Testing & Automation",
//                         ],
//                         [
//                             "Social Media Management",
//                             "Content Creation & Curation",
//                             "Search Engine Optimisation",
//                             "Influencer Management",
//                             "Auction Media Management",
//                         ],
//                         [
//                             "Online Reputation Management",
//                             "Media Planning & Buying",
//                             "Marketing Automation",
//                             "Email Marketing",
//                             "Conversion Rate Optimisation",
//                             "Website & SEO Analysis",
//                         ],
//                     ].map((items, index) => (
//                         <div
//                             key={index}
//                             className="services-catalog-row flex justify-between items-center flex-row whitespace-nowrap p-0 will-change-transform relative"
//                         >
//                             {items.map((item, idx) => (
//                                 <div key={idx} className="services-catalog-row-item inline-block mr-[10vw] mobile:mr-[15vw]">
//                                     {item}
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ServiceMarquee;
