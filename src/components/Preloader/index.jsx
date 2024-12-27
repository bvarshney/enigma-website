import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
    const loaderRef = useRef(null);
    useEffect(() => {
        const p = loaderRef.current.querySelectorAll(".loaderP");
        const bars = loaderRef.current.querySelectorAll(".loaderBar")
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.to(p, {
                opacity: 1,
                duration: 0.2,
                stagger: 0.5,
            })
                .to(p, {
                    opacity: 0,
                    duration: 0.2,
                    stagger: 0.5,
                }, "-=3.7")
                .to(bars, {
                    yPercent: -100,
                    duration: 0.6,
                    ease: "power2.easeIn",
                    stagger: 0.1,
                    onComplete() {
                        gsap.set(loaderRef.current, {
                            visibility: "hidden",
                            display: "none",
                        })
                    },
                })
        });
        return () => ctx.revert();
    }, []);

    return (
        <div ref={loaderRef} className="fixed z-[999] top-0 left-0 h-screen w-screen flex items-center justify-center">
            {words.map((word, index) => (
                <p key={index} className="z-[1] absolute text-white text-[3vw] font-heading opacity-0 loaderP tablet:text-[48px] mobile:text-[36px]">{word}</p>
            ))}
            <div className="flex w-screen h-screen">
                {Array(5).fill().map((_, i) => (
                    <span key={i} className="w-1/5 h-screen bg-black loaderBar"></span>
                ))}
            </div>
        </div>
    )
}

export default Preloader;

const words = [
    'Namaste! 🙏',
    'Hello',
    'Hola',
    'Bonjour',
    'Olá',
    'Ni Hao',
    'Ciao',
    'Salam',
    'Shalom!',
];