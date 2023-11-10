import React, { useEffect } from "react";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextSeo } from "next-seo";
import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import RelatedBlogs from "@/components/Blogs/relatedBlogs";
import BlogInfo from "@/components/Blogs/BlogInfo";
import PageLoader from "@/components/pageLoader";

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetail() {
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
      "#right-section",
      {
        opacity: 0,
        translateY: 200,
      },
      {
        delay: 4,
        duration: 1.3,
        opacity: 1,
        stagger: 0.1,
        translateY: 0,
      }
    );
    return () => tl.kill();
  }, []);


if (globalThis.innerWidth>1024) {
  // Section Pinnnig
  useEffect(() => {
    let ctx = gsap.context(() => {
      let brandImagePin = document.getElementById("left-section");
      let brandImageNotPin = document.getElementById("right-section");
      ScrollTrigger.create({
        trigger: brandImagePin,
        start: "top 10%",
        endTrigger: brandImageNotPin,
        end: "bottom 80%",
        invalidateOnRefresh: true,
        pin: brandImagePin,
        markers: false,
      });
    });
    return () => ctx.revert();
  });
}

  return (
    <>

            <NextSeo
              title="Enigma's Guide to Delightful UX Design for Digital Platforms"
              description="Dive into Enigma's guide on crafting delightful designs for diverse digital platforms. From desktops to wearables, master the art of UX design."
              openGraph={{
                url: "https://weareenigma.com/delightful-digital-design-guide",
                title: "Enigma's Guide to Delightful UX Design for Digital Platforms",
                description:
                  "Dive into Enigma's guide on crafting delightful designs for diverse digital platforms. From desktops to wearables, master the art of UX design.",
                  images: [
                    {
                      url: "https://weareenigma.com/assets/featured-images/digital-design-guide.png",
                      width: 1200,
                      height: 630,
                      alt: "delightful digital design guide",
                      type: "image/png",
                    },
                  ],
                  siteName: "Enigma Digital",
              }}
            />     

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="How to Design for Diverse Platforms" />

      <Header />

      <div className="b__dt-main">
        <div
          className="b__dt-head-contain"
          data-cursor-size="10px"
          data-cursor-text="">
          <h1 data-jelly id="blog">
            How to Delightfully Design for Diverse Digital Platforms: A User's
            Guide to Creative UX Mastery
          </h1>
        </div>

        <div className="b__dt-main-blog" id="main-blog-container">
          <div className="b__dt-auth" id="left-section">
            <BlogInfo author={"Bhaskar Varshney"} date={"15/11/2022"} shareLink={"delightful-digital-design-guide"} />
          </div>

          <div className="b__dt-content" id="right-section">
            <p className="b__dt-it">
              Hey there, design enthusiasts! Today, we're here to equip you with
              the knowledge and tools to create delightful designs for diverse
              digital platforms. In today's ever-evolving technological
              landscape, it's crucial to consider the multitude of screens and
              devices that users interact with daily. From desktops and TVs to
              tablets and wearables, we'll dive deep into the considerations and
              best practices for designing exceptional experiences across these
              platforms. So, buckle up and get ready to embark on a fun-filled
              journey into the world of UX design mastery!
            </p>

            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/how-to-delightfully-design/how-to-delightfully-design-1.webp"
                alt="How To Delightfully Design Blog Image 1"
              />
            </div>

            <h2>
              Desktop Screens: The Grand Stage
            </h2>
            <p>
              Desktop screens are the grand stage where most of our digital
              lives unfold. They offer vast real estate for designers to
              showcase their creativity, and users expect a comprehensive and
              immersive experience. When designing for desktops, consider the
              following:
            </p>
            <p>
              <span className="bold">Responsive Layouts:</span> Users come with
              a diverse range of screen sizes and resolutions. Harness the power
              of responsive layouts to ensure your design fluidly adapts to any
              screen like a chameleon in a technicolour dream.
            </p>
            <p>
              <span className="bold">Navigation:</span> Keep the navigation
              intuitive and easily accessible. A well-structured navigation menu
              is the trusty compass that guides users through the digital
              labyrinth.
            </p>
            <p>
              <span className="bold">Content Hierarchy: </span>
              Establish a clear visual hierarchy to emphasize essential content
              and guide users' attention. Use typography, colour, and whitespace
              to create a harmonious symphony of information
            </p>
            <p>
            A superb way to learn is by doing. To apply these principles
              of UX, Imagine designing a platform for movie enthusiasts to
              browse, review, and discuss their favourite films. On a desktop
              screen, you can create an immersive experience by using large,
              high-quality images, interactive carousels, and a well-structured
              navigation menu that makes discovering new movies a breeze.
            </p>


            <h2>
              TV: The Colossal Canvas
            </h2>
            <p>
              Televisions are the colossal canvas of modern living rooms.
              Designing for this behemoth requires a unique approach that
              accommodates the TV's larger screen size and viewing distance.
              Let's explore some essential considerations:
              </p>
            <p>
              <span className="bold">Viewing Distance:</span> Users typically
              view TVs from a distance of 6 to 10 feet. To ensure readability,
              scale up text size, icons, and interface elements. Go big or go
              home
              </p>
            <p>
              <span className="bold">Simplified Navigation:</span> Televisions
              often rely on remote controls with limited buttons. Keep your
              navigation straightforward and embrace the power of simplicity.
              </p>
            <p>
              <span className="bold">Focus on Visuals:</span> TVs are built for
              visual storytelling. Leverage high-quality images, videos, and
              animations to captivate and mesmerize your audience.
              </p>
            <p>
              Picture a cooking app designed for TV screens. With a focus on
              stunning visuals, you can showcase mouth-watering recipes through
              full-screen images and videos. Use bold typography and simplified
              navigation, allowing users to easily browse and select recipes
              with their remote control while sitting comfortably on their
              couch.
            </p>

            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/how-to-delightfully-design/how-to-delightfully-design-2.webp"
                alt="How To Delightfully Design Blog Image 2"
              />
            </div>

            <h2>
              Tablets: The Versatile Virtuosos
            </h2>

            <p>
              Tablets are the versatile virtuosos of the digital world, bridging
              the gap between smartphones and desktops. They demand a tailored
              approach to accommodate their unique screen size and touch-based
              interactions. Here's what to keep in mind:
              </p>
            <p>
              <span className="bold">Touch Targets:</span> Fingers are less
              precise than mouse pointers. Design generously sized touch targets
              to make interactions effortless and frustration-free.
              </p>
            <p>
              <span className="bold">Orientation Flexibility:</span> Tablets are
              masters of rotation. Design your interface to adapt gracefully to
              both portrait and landscape orientations, like a digital acrobat.
              </p>
            <p>
              <span className="bold">Multi-tasking Power: </span>
              Tablets are the Swiss Army knives of digital devices. Consider
              incorporating split-screen functionality and other multi-tasking
              features to unleash their full potential.
              </p>
            <p>
              Envision a digital magazine app for art enthusiasts. Utilize the
              tablet's touch capabilities and orientation flexibility to create
              an interactive experience that allows users to swipe through vivid
              galleries and flip between portrait and landscape views. Add a
              split-screen feature to let users compare artworks side by side or
              read an article while viewing an image gallery simultaneously.
            </p>

            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/how-to-delightfully-design/how-to-delightfully-design-3.webp"
                alt="How To Delightfully Design Blog Image 3"
              />
            </div>

            <h2>
              Mobile Phones: The Pocket-Sized Powerhouses
            </h2>

            <p>
              Mobile phones are the pocket-sized powerhouses that have
              revolutionized the way we live, work, and play. With their
              ubiquity and extensive capabilities, designing for these compact
              devices is a must in today's digital landscape. Here are some key
              considerations for designing exceptional mobile experiences:
              </p>
            <p>
              <span className="bold">Limited Screen Real Estate:</span> Mobile
              phones pack a punch, but their screens are smaller than desktops
              and tablets. Prioritize content and features to optimize the user
              experience, making sure every pixel counts.
              </p>
            <p>
              <span className="bold">Touch-Friendly Interface:</span> Mobile
              phones rely on touch-based interactions. Design fingerfriendly
              buttons and touch targets, and embrace swipe gestures to make
              navigation and actions feel smooth and natural.
              </p>
            <p>
              <span className="bold">Mobile First Approach: </span>
              Given the prevalence of mobile devices, adopting a mobile-first
              approach ensures your design is optimized for smaller screens from
              the get-go. This approach lays a strong foundation for scaling up
              to larger devices.
              </p>
            <p>
              <span className="bold">Network Constraints: </span>
              Mobile users often face fluctuating network conditions. Optimize
              your design to load quickly and function seamlessly, even on
              slower connections.
              </p>
              <p>
              <span className="bold">Accessibility: </span>
              Mobile devices are used in a variety of contexts and environments.
              Consider factors like screen glare, ambient noise, and one-handed
              usage when designing your mobile interface.
              </p>
              <p>
              To put these principles to a real-world test, let's take an
              example of a music discovery app that allows users to explore new
              artists and create playlists on the go. With limited screen real
              estate, focus on displaying the most relevant content, such as
              album artwork, song titles, and artist names, while hiding
              secondary information behind expandable menus or swipe gestures.
              </p>
              <p>
              Use touch-friendly buttons for primary actions like play, pause,
              and skip, and incorporate swiping gestures for users to easily
              navigate through playlists and songs. Optimize the app's
              performance to ensure smooth streaming, even on slower
              connections, and consider adding an offline mode for those moments
              when users find themselves without internet access.
              </p>
              <p>
              Factor in accessibility by using legible fonts, clear contrast,
              and intuitive controls that accommodate one-handed usage, making
              it easy for users to enjoy their favourite tunes while commuting,
              exercising, or simply lounging around.
            </p>

            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/how-to-delightfully-design/how-to-delightfully-design-4.webp"
                alt="How To Delightfully Design Blog Image 4"
              />
            </div>

            <h2>
              Wearables: The Tiny Titans
            </h2>

            <p>
              Wearables, like smartwatches and fitness trackers, are the tiny
              titans of the digital world. Their minimal screen real estate and
              intimate nature demand a reimagined design approach. Keep these
              factors in mind:
              </p>
              <p>
              <span className="bold">Glanceability:</span> Users interact with
              wearables in short bursts. Prioritize essential information and
              make it easily digestible at a glance.
              </p>
              <p>
              <span className="bold">Simplify Interactions:</span> Small screens
              are no place for complexity. Strip down your design to its bare
              essentials and focus on core functionality.
              </p>
              <p>
              <span className="bold">Contextual Relevance: </span>
              Wearables excel at providing contextual information, like fitness
              stats or weather updates. Harness the power of personalization to
              deliver tailored, relevant content.
              </p>
              <p>
              Think of a smartwatch fitness app that provides users with
              real-time workout data, like heart rate and calories burned.
              Emphasize glanceability by displaying the most crucial information
              in large, legible fonts. Simplify interactions by using swipe
              gestures and minimal touch targets, allowing users to access their
              workout stats on the go easily.
              </p>
              <p>
              Designing for diverse digital platforms – desktops, TVs, tablets,
              wearables, and mobile phones – demands creativity, adaptability,
              and empathy for users' needs and expectations
              </p>
              <p>
              By understanding the unique characteristics of each platform and
              applying best practices, you can craft delightful, engaging
              experiences that resonate with users across the digital spectrum.
              Embrace the challenge, infuse fun into your design process, and
              maintain professionalism as you explore the vast possibilities of
              the digital world. Happy designing!
            </p>

            <div className="blog__dt-tags">
                <h1 className="blog__dt-tag">
                    Design Guide
                </h1>
                <h1 className="blog__dt-tag">
                    UI/UX Design
                </h1>
                <h1 className="blog__dt-tag">
                    App Design
                </h1>
                <h1 className="blog__dt-tag">
                    UI Principles
                </h1>
            </div>
          </div>
        </div>
      </div>

      {/* =================== Related Articles =========================== */}
        <RelatedBlogs currentBlogLink={"/delightful-digital-design-guide"} category={"design"} />
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
