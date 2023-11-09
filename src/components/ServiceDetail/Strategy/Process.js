import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {

    // Text Reveal Animation For Section 2
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll('#fadeIn');
        let ctx = gsap.context(() => {
        elementsToAnimate.forEach(target => {
          gsap.from(target, {
            scrollTrigger: {
              trigger: target,
              start: 'top 90%',
              end: 'bottom top',
              markers: false,
            },
            opacity: 0,
            y: 100,
            duration: 0.8,
            ease: 'Power1.out',
          });
        });
      });
      return () => ctx.revert();
      }, []);

      
    return(
        <>
            <p>
                By taking the L.E.A.P. with Enigma Digital, you're not just getting a service; you're partnering with a team that's committed to leaping beyond the ordinary and achieving extraordinary results.
            </p>
        </>
    )
}