import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { NextSeo } from "next-seo";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import Image from "next/image";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";

gsap.registerPlugin(ScrollTrigger);

// Hover on the link
const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1.1,
    ease: "power1.inOut",
  });
};

// Hover off the link
const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1,
    ease: "power1.inOut",
  });
};

export default function blogChooseUxAgency() {
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#blog",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.5,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim",
      {
        opacity: 0,
        translateY: 200,
      },
      {
        delay: 3.8,
        duration: 1.3,
        opacity: 1,
        stagger: 0.1,
        translateY: 0,
      }
    );
    return () => tl.kill();
  }, []);

  // Section Pinnnig
  useEffect(() => {
    let ctx = gsap.context(() => {
      let brandImageBlock = document.getElementById("main-blog-container");
      let brandImagePin = document.getElementById("left-section");
      let brandImageNotPin = document.getElementById("right-section");
      ScrollTrigger.create({
        trigger: brandImagePin,
        start: "top 10%",
        endTrigger: brandImageNotPin,
        end: "bottom 80%",
        // the nect line (with the arrow function) is 'a functional value' () =>
        // end: () => `${brandImageNotPin.offsetHeight - brandImagePin.offsetHeight}px 20%`,
        // this line ensures the functional value gets recalculated on resize
        invalidateOnRefresh: true,
        pin: brandImagePin,
        // pinSpacing: true,
        markers: false,
      });
    });
    return () => ctx.revert();
  });

   // Parallax Image
   if (globalThis.innerWidth > 776) {
    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.utils.toArray(".image-container").forEach(function (container) {
          let image = container.querySelector("img");
  
          gsap.to(image, {
            y: () => image.offsetHeight - container.offsetHeight,
            ease: "none",
            startAt: { y: "-25%" },
            scrollTrigger: {
              trigger: container,
              scrub: true,
              pin: false,
              markers: false,
            },
            y: "25%",
            ease: "none",
          });
        });
      });
      return () => ctx.revert();
    });
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

  return (
    <>

            <NextSeo
              title="How to Choose the Right UX Agency to Partner with for Your Product Ideas"
              description="Your product ideas deserve the best possible user experience (UX)
              design, and to achieve that, you need to partner with the right UX
              agency."
              canonical="https://weareenigma.com/how-to-choose-right-ux-agency"
              openGraph={{
                url: "https://weareenigma.com/how-to-choose-right-ux-agency",
                title: "How to Choose the Right UX Agency to Partner with for Your Product Ideas",
                description:
                  "Your product ideas deserve the best possible user experience (UX) design, and to achieve that, you need to partner with the right UX agency.",
                  images: [
                  {
                    url: "https://i.ibb.co/k0NMQw9/home.png",
                    width: 400,
                    height: 600,
                    alt: "Enigma Image",
                    type: "image/png",
                  },
                ],
                siteName: "Enigma Digital Website",
              }}
            />

      <div className="loader-wrap" id="loader">
      <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>

        <div className="loader-wrap-heading">
          <span>
            <h1>Choose the Right UX Agency</h1>
          </span>
        </div>
      </div>
      <SmoothScroll />
      <Cursor isGelly={true} />
      <div>
        <Header />
      </div>
      <div className="blog-detail-main-section">
        <div
          className="blog-detail-heading"
          data-cursor-size="10px"
          data-cursor-text=""
        >
          <h1 data-jelly id="blog">
            How to Choose the Right UX Agency to Partner with for Your Product
            Ideas
          </h1>
        </div>

        <div className="main-blog-container" id="main-blog-container">
          <div className="left-section" id="left-section">
            <div className="box-blog" id="anim">
              <div className="share-box-blog">
                <div>
                  <h1>Posted By</h1>
                </div>
              </div>
              <h2 className="timezone-update">Bhaskar varshney</h2>
            </div>
            <div className="box-blog" id="anim">
              <div className="share-box-blog">
                <div>
                  <h1>Posted on</h1>
                </div>
              </div>
              <h2 className="timezone-update">10/03/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <div className="share-box-blog">
                <h1>Share Article</h1>
              </div>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/how-to-choose-right-ux-agency"}
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/linkedin.png"
                    alt="social-icons"
                  />
                </LinkedinShareButton>

                <FacebookShareButton
                  url={"https://weareenigma.com/how-to-choose-right-ux-agency"}
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/facebook.png"
                    alt="social-icons"
                  />
                </FacebookShareButton>

                <TwitterShareButton
                  url={"https://weareenigma.com/how-to-choose-right-ux-agency"}
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/twitter.png"
                    alt="social-icons"
                  />
                </TwitterShareButton>

                <WhatsappShareButton
                  url={"https://weareenigma.com/how-to-choose-right-ux-agency"}
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/whatsapp.png"
                    alt="social-icons"
                  />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
          <div className="right-section" id="right-section">
            <p id="anim">
              Your product ideas deserve the best possible user experience (UX)
              design, and to achieve that, you need to partner with the right UX
              agency. The success of your project heavily depends on the UX
              design, making it crucial to choose the agency that understands
              your vision and goals. In this blog post, we will discuss how you
              should choose the right UX agency in India to partner with for
              your product ideas. We will explore key points to consider, such
              as the quality of their published content, their website's UX,
              their portfolio, skill set, and workflow. We will also provide a
              list of the top 10 best UX agencies in India to outsource to, and
              why each agency deserves a spot on this list. So let's dive in!
            </p>

            
            

            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              1. They publish quality content on UI/UX topics
            </h3>
            <p id="anim">
              A reputable UX agency will showcase its expertise by publishing
              quality content on various UI/UX topics. This content could be in
              the form of articles, blog posts, whitepapers, case studies, or
              even podcasts and webinars. By sharing their knowledge and
              expertise, these agencies demonstrate their thought leadership and
              keep themselves updated with the latest trends and best practices
              in the industry. Look for UX design agencies that regularly
              publish insightful, well-researched content on UI/UX topics.
            </p>

            
            

            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              2. Their website meets UX best practices
            </h3>
            <p id="anim">
              The website of a UX design agency should be a reflection of their
              design capabilities. A user-friendly, intuitive, and visually
              appealing website indicates that the agency understands and
              applies UX best practices. Explore their website and take note of
              aspects such as navigation, information hierarchy, readability,
              responsiveness, and overall aesthetics. An agency that has a
              well-designed website is more likely to deliver high-quality UX
              designs for your product ideas.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/top-20-digital-marketing-blogs/1.jpg"
                  alt="Img"
                />
              </div>
            </div>

            
            
            <h3 className="bold-h blog-mt-0">
              3. Their portfolio and case studies outline UX challenges and
              solutions
            </h3>
            <p>
              A strong portfolio is crucial for any UX design agency. Case
              studies and project examples give you an insight into their design
              process, problem-solving abilities, and the type of projects they
              have worked on. Look for agencies that showcase a diverse range of
              projects and clearly outline the UX challenges they faced and the
              solutions they implemented. This will help you understand their
              approach to UX design and whether it aligns with your project
              requirements.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              4. They have worked on complex UI/UX projects
            </h3>
            <p>
              Experience in handling complex UI/UX projects is a valuable asset
              for any UX design agency. This indicates that the agency has the
              expertise to tackle challenging design problems and can deliver
              innovative solutions for your product ideas. Look for agencies
              that have successfully executed complex projects across different
              industries and platforms.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              5. They have an extensive skill set
            </h3>
            <p>
              A good UX design agency should possess a wide range of skills,
              including user research, wireframing, prototyping, visual design,
              interaction design, and usability testing. This ensures that they
              can address all aspects of UX design and provide a comprehensive
              solution for your product ideas. Check the agency's team profiles
              to understand their skill sets and how they can contribute to your
              project.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              6. They have an established, well-explained workflow and
              methodology
            </h3>
            <p>
              A well-defined workflow and methodology are essential for any UX
              design agency, as they ensure a structured approach to design
              projects. Look for agencies that clearly explain their design
              process, from user research and ideation to prototyping, testing,
              and final implementation. This will help you understand how they
              will approach your project and ensure that they follow best
              practices in UX design.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              7. Client testimonials and reviews
            </h3>
            <p>
              Client testimonials and reviews can provide valuable insights into
              the agency's work quality, professionalism, and ability to meet
              client expectations. Look for agencies with positive feedback from
              their clients, which indicates that they have a track record of
              successful project delivery.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              8. Effective communication and collaboration
            </h3>
            <p>
              Effective communication and collaboration are essential for the
              success of any project. Ensure that the UX design agency values
              open communication and is willing to work closely with your team
              throughout the project. This helps establish a strong working
              relationship and ensures that your ideas and feedback are
              incorporated into the design process.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              9. Flexibility and adaptability
            </h3>
            <p>
              A good UX design agency should be flexible and adaptable to
              accommodate your project requirements and any changes that may
              arise during the design process. Look for agencies that
              demonstrate a willingness to adapt their approach and can
              effectively handle unforeseen challenges or changes in project
              scope.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              10. Competitive pricing and transparent cost structure
            </h3>
            <p>
              Lastly, consider the agency's pricing and cost structure. While
              it's essential to ensure that the agency offers competitive
              pricing, it's equally important to have a transparent cost
              structure. This ensures that you have a clear understanding of
              what you're paying for and helps avoid any surprises during the
              project.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/top-20-digital-marketing-blogs/2.jpg"
                  alt="Img"
                />
              </div>
            </div>
            
            

            <p>
              To get you started on the journey to find the right UX partner,
              we’ve fashioned a list of the top 10 UX design agencies in India
              that you can consider for your product ideas. Each agency has been
              selected based on their expertise, portfolio, client feedback, and
              overall reputation in the industry. This comprehensive list aims
              to help you make an informed decision when selecting a design
              agency to partner with for your business needs.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              1. Enigma Digital
            </h3>
            <p>
              Enigma Digital is a renowned UI/UX design agency in India,
              offering a wide range of services, including website and app
              design, branding, and digital marketing. With a team of skilled
              designers and developers, Enigma Digital is known for crafting
              innovative and usercentric design solutions that cater to diverse
              industries.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">Comprehensive suite of services</p>
            <p className="list-blog">Diverse industry experience</p>
            <p className="list-blog">Strong focus on user-centered design</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">
              May have limited availability due to high demand
            </p>
            <p className="list-blog">Pricing might not suit all budgets</p>

            

            <p>
              <span className="bold">Clients:</span> Patra Corp, Jellyfish
              Technologies, Kedarkala Studios, Bespin Labs, Patronum, QuickX,
              Pennie Training
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              2. Lollypop Design Studio
            </h3>
            <p>
              Lollypop Design Studio is a premier UI/UX design agency in India,
              specializing in crafting delightful digital experiences for
              clients across the globe. With a team of passionate designers,
              Lollypop Design Studio focuses on creating user-centric designs
              that drive engagement and conversions.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">Award-winning design team</p>
            <p className="list-blog">Strong portfolio of successful projects</p>
            <p className="list-blog">Global client base</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">
              Potential scheduling challenges due to high demand
            </p>
            <p className="list-blog">
              Pricing might be higher compared to other agencies
            </p>

            

            <p>
              <span className="bold">Clients: </span>
              Swiggy, Infosys, Myntra, Practo, Viacom18
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              3. NetBramha Studios
            </h3>
            <p>
              NetBramha Studios is a leading UI/UX design agency in India,
              offering end-to-end design solutions for web, mobile, and IoT
              applications. With a strong focus on user experience and
              innovation, NetBramha Studios has delivered exceptional design
              solutions for clients across various industries.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">Full-service design agency</p>
            <p className="list-blog">
              Expertise in emerging technologies and trends
            </p>
            <p className="list-blog">Collaborative approach to design</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">Limited availability due to high demand</p>
            <p className="list-blog">
              Pricing may not be suitable for all budgets
            </p>

            

            <p>
              <span className="bold">Clients:</span> Airbus, ABB, Adobe, Cisco,
              NASSCOM
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              4. Fractal Ink Design Studio
            </h3>
            <p>
              Fractal Ink Design Studio is an award-winning UI/UX design agency
              in India, known for creating engaging and user-friendly digital
              products. With a team of experienced designers and developers,
              Fractal Ink Design Studio offers comprehensive design solutions
              tailored to clients' needs.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">Proven track record of success</p>
            <p className="list-blog">Diverse industry experience</p>
            <p className="list-blog">Strong focus on user experience</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">
              High demand may lead to scheduling challenges
            </p>
            <p className="list-blog">
              Pricing may not be suitable for all budgets
            </p>

            

            <p>
              <span className="bold">Clients:</span> HDFC Bank, ICICI Bank,
              Vodafone, Godrej, Tata Motors
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              5. Think Design
            </h3>
            <p>
              Think Design is a prominent UI/UX design agency in India, offering
              a wide range of design services, including web and mobile app
              design, branding, and digital marketing. With a focus on
              innovation and user-centric design, Think Design has successfully
              catered to clients across diverse industries.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">Comprehensive suite of services</p>
            <p className="list-blog">Skilled and experienced team</p>
            <p className="list-blog">Strong focus on user-centered design</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">Limited availability due to high demand</p>
            <p className="list-blog">Pricing might not suit all budgets</p>

            

            <p>
              <span className="bold">Clients:</span> Microsoft, Cognizant,
              Abbott, Hero, Mahindra
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/top-20-digital-marketing-blogs/2.jpg"
                  alt="Img"
                />
              </div>
            </div>

            
            

            <h3 className="bold-h blog-mt-0">
              6. WowMakers
            </h3>
            <p>
              WowMakers is a creative UI/UX design agency in India, known for
              crafting visually stunning and user-friendly digital products.
              Their team of skilled designers and developers are dedicated to
              delivering exceptional design solutions that cater to various
              industries.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">
              Aesthetic and functional design approach
            </p>
            <p className="list-blog">Customized solutions for each project</p>
            <p className="list-blog">Collaborative design process</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">
              May have limited availability due to high demand
            </p>
            <p className="list-blog">
              Pricing might not be suitable for all budgets
            </p>

            

            <p>
              <span className="bold">Clients:</span> FedEx, Decathlon, JLL,
              Bosch, KFC
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              7. Beard Design
            </h3>
            <p>
              Beard Design is a boutique UI/UX design agency in India, offering
              a wide range of design services, including web and mobile app
              design, branding, and digital marketing. With a team of talented
              designers and developers, Beard Design focuses on creating unique
              and engaging digital experiences for clients.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">Customized design solutions</p>
            <p className="list-blog">Diverse industry experience</p>
            <p className="list-blog">Strong portfolio of successful projects</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">Limited availability due to high demand</p>
            <p className="list-blog">
              Higher pricing compared to other agencies
            </p>

            

            <p>
              <span className="bold">Clients:</span> FabHotels, IDFC Bank, Tata
              Group, Wipro, Zoomcar
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              8. Thence
            </h3>
            <p>
              Thence is a prominent UI/UX design agency in India, known for
              delivering innovative and user-centric design solutions for
              clients across various industries. With a strong focus on
              research-driven design, Thence ensures that each project is
              tailored to the client's unique needs and requirements.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">Research-driven design approach</p>
            <p className="list-blog">Expertise in multiple industries</p>
            <p className="list-blog">Collaborative design process</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">
              High demand may lead to scheduling challenges
            </p>
            <p className="list-blog">
              Pricing may not be suitable for all budgets
            </p>

            

            <p>
              <span className="bold">Clients:</span> Infosys, Narayana Health,
              Jio, BlackBuck, AirAsia
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              9. YUJ Designs
            </h3>
            <p>
              YUJ Designs is an award-winning UI/UX design agency in India,
              known for creating user-friendly and visually appealing digital
              products. With a team of skilled designers and developers, YUJ
              Designs offers end-to-end design solutions that cater to clients
              across diverse industries.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">Award-winning design team</p>
            <p className="list-blog">Strong focus on user experience</p>
            <p className="list-blog">Comprehensive design solutions</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">Limited availability due to high demand</p>
            <p className="list-blog">Pricing might not suit all budgets</p>

            

            <p>
              <span className="bold">Clients:</span> Honeywell, Samsung, McAfee,
              Tata, Airtel
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              10. Sparklin Innovations
            </h3>
            <p>
              Sparklin Innovations is a leading UI/UX design agency in India,
              offering a wide range of design services, including web and mobile
              app design, branding, and digital marketing. With a team of
              passionate designers and developers, Sparklin Innovations is
              committed to delivering exceptional design solutions that drive
              user engagement and conversions.
            </p>

            

            <h3 className="bold-h blog-mt-0">
              pros:
            </h3>
            <p className="list-blog">Diverse range of services</p>
            <p className="list-blog">Skilled and experienced team</p>
            <p className="list-blog">Strong focus on user-centered design</p>

            

            <h3 className="bold-h blog-mt-0">
              cons:
            </h3>
            <p className="list-blog">
              High demand may lead to scheduling challenges
            </p>
            <p className="list-blog">
              Pricing may not be suitable for all budgets
            </p>

            

            <p>
              <span className="bold">Clients:</span> OYO, Zomato, Paytm, Bajaj
              Finserv, Lenskart
            </p>

            
            

            <p>
              These agencies have consistently delivered high-quality UX designs
              for their clients and have established themselves as leaders in
              the UX design space in India. By partnering with one of these top
              UX design agencies, you can be confident that your product ideas
              will be supported by world-class design expertise, ensuring the
              best possible user experience for your customers.
            </p>

            <p>
              Choosing the right UX design agency in India for your product
              ideas can be a challenging task. However, by considering factors
              such as their published content, website design, portfolio, skill
              set, workflow, and client feedback, you can make an informed
              decision. Additionally, our list of the top 10 UX agencies in
              India serves as a great starting point for your search. By
              partnering with a reputable UX design agency, you can bring your
              product ideas to life with a user experience that delights your
              customers and helps your business thrive.
            </p>
          </div>
        </div>
      </div>

      {/* =================== Related Articles =========================== */}

      <div className="related-articles">
        <div className="related-article-heading">
          <h1>RELATED ARTICLES</h1>
          <Link href="/blog">
            <h4>All articles</h4>
          </Link>
        </div>

        <div className="related-box-img">
          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/future-of-marketing-neuromarketing">
                <img
                  src="/assets/blogs/blog-detail/the-future-of-marketing/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Marketing</h2>
              </Link>
            </div>
            <h1>
              The Future of Marketing: Why Every Marketer Should Learn
              Neuroscience and Master Neuromarketing
            </h1>
          </div>

          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/delightful-digital-design-guide">
                <img
                  src="/assets/blogs/blog-detail/delightfully/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Design</h2>
              </Link>
            </div>
            <h1>
              How to Delightfully Design for Diverse Digital Platforms: A User's
              Guide to Creative UX Mastery
            </h1>
          </div>

          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/captivate-audiences-marketing-psychology">
                <img
                  src="/assets/blogs/blog-detail/marketing-psychology/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Marketing</h2>
              </Link>
            </div>
            <h1>
              Marketing Psychology: The Secret to Captivating Your Audience and
              Building Unforgettable Brands
            </h1>
          </div>
        </div>
      </div>
      {/* =================== Related Articles END =========================== */}

      {/* ======================== Footer ====================== */}
      <div className="desktop-footer">
        <Footer />
      </div>
      <div className="mobile-footer">
        <FooterMobile />
      </div>
      {/* ======================== Footer END ====================== */}
    </>
  );
}
