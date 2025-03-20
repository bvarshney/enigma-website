import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerContainer = useRef(null);

  useEffect(() => {
    const text = footerContainer.current.querySelectorAll(".footer-anim p")
    let ctx = gsap.context(() => {
      gsap.fromTo(text, {
        rotationX: -90,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      }, {
        duration: 0.8,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: footerContainer.current,
          start: "top 80%",
        }
      })
    });
    return () => ctx.revert();
  }, [])

  return (
    <>
      <footer ref={footerContainer} className="w-full h-full">
        <div className="w-[90%] mx-auto pt-[5%] pb-[1.5%] tablet:pt-[10%] tablet:pb-[5%] mobile:pt-[15%] mobile:pb-[10%]">
          {/* Footer CTA Section */}
          <div className="flex items-end justify-between tablet:block">
            <div className="leading-[1.2] text-[7vw] font-heading footer-anim tablet:text-[8vw] tablet:text-center tablet:leading-[1.4]">
              <p className="">Let&apos;s bring your</p>
              <p className="text-right tablet:text-center tablet:font-medium">ideas to life!</p>
            </div>

            <div className="w-[35%] flex items-end justify-around mb-[1.5vw] fadeup tablet:hidden">
              <div className="relative w-[12vw] h-[3vw]">
                <Image
                  priority={false}
                  fill
                  src="/assets/icons/footer-arrow.png"
                  className="!h-auto dark:invert"
                  alt="Footer Arrow Icon"
                />
              </div>
              <Link className="h-fit w-fit block" href="/get-in-touch">
                <div
                  data-cursor-text="Say Hi !!"
                  data-cursor-color="#5d5ad6"
                  data-cursor-size="100px"
                  className="flex items-center justify-center leading-[1] font-heading h-[12vw] w-[12vw] bg-black1 rounded-full text-white text-[1.5vw] border border-black1 hover:bg-transparent duration-500 hover:text-black1">
                  <span>Contact Us</span>
                </div>
              </Link>
            </div>
          </div>
          {/* Footer CTA Section END */}
          <div className="pt-[5vw] font-heading fadeup tablet:pt-[15%]">

            <div className="flex tablet:block tablet:text-center">
              <div className="w-1/2 tablet:w-full">
                <div className="space-y-[1vw] w-fit tablet:space-y-[2.5vw] tablet:w-full">
                  <h6 className="text-[1.15vw] font-normal text-gray2 tablet:text-[3.5vw]">mail us</h6>
                  <div data-cursor-size="80px" data-cursor-exclusion>
                    <a className="en-link-under text-[1.5vw] tablet:text-[4.5vw]" href="mailto:hi@weareenigma.com">
                      <span className="!font-normal">hi@weareenigma.com</span>
                    </a>
                  </div>
                </div>
                <div className="space-y-[1vw] w-fit pt-[2.5vw] tablet:pt-[15%] tablet:space-y-[2.5vw] tablet:w-full">
                  <h6 className="text-[1.15vw] font-normal text-gray2 tablet:text-[3.5vw]">for new business</h6>
                  <div data-cursor-size="80px" data-cursor-exclusion>
                    <Link className="en-main-link text-[1.5vw] tablet:text-[4.5vw]" href="tel:+91 8178 026 136">
                      <span data-text="+91 8178 026 136">+91 8178 026 136</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-1/2 tablet:w-full tablet:pt-[15%]">
                <h6 className="text-[1.15vw] font-normal text-gray2 pb-[2vw] tablet:text-[3.5vw] tablet:pb-[2.5vw]">let&apos;s be friends</h6>
                <div className="grid grid-cols-3 items-end w-full gap-y-[2vw] gap-x-[8vw] tablet:justify-items-center">
                  {SocialLinks.map((item, index) => (
                    <div className="w-fit" key={index} data-cursor-exclusion data-cursor-size="80px">
                      <Link className="en-main-link text-[1.5vw] tablet:text-[4vw] mobile:text-[4.8vw]" target="blank" href={item.link} rel="nofollow, noreferrer">
                        <span data-text={item.name}>{item.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-fit mx-auto pt-[2vw] tablet:pt-[15%] tablet:w-full text-center">
            <p className="text-[1vw] text-gray2 tracking-[1px] tablet:text-[3vw] tablet:border-t border-slate-300 tablet:pt-[3vw]">© 2025 Enigma Digital Consulting, LLP. All Rights Reserved. All Wrongs Reversed.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

const SocialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/in.enigmadigital",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/enigmadigital/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/_EnigmaDigital",
  },
  {
    name: "LinkedIn",
    link: "https://in.linkedin.com/company/enigma-digital-product-design-ui-ux-neuromarketing",
  },
  {
    name: "Behance",
    link: "https://www.behance.net/enigma-digital",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/"
  }
]
