"use client"
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLenisFunctions } from "@/lib/utils";
import Menu from "./Menu";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import Showreel from "./Showreel";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".header-inner-container", {
                duration: 1,
                y: -100,
                delay: 3,
            })
        })
        return () => ctx.revert();
    }, []);

    const lenis = useLenis();
    const { startLenis, stopLenis } = useLenisFunctions();
    const [menuState, setMenuState] = useState({ initial: false, clicked: false });
    const menuBtnRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShowreel, setIsShowreel] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);


    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        lenis&&lenis.start();
        lenis&&lenis.scrollTo(0, { immediate: true });
    }, [pathname]);

    // useEffect(() => {
    //     const handleRouteChange = () => {
    //         lenis.start();
    //         lenis.scrollTo(0, {immediate: true})
    //     };

    //     router.events.on("routeChangeComplete", handleRouteChange);

    //     return () => {
    //         router.events.off("routeChangeComplete", handleRouteChange);
    //     };
    // }, [router, lenis]);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsHeaderVisible(currentScrollY <= lastScrollY);

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const btnDisable = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const openShowreel = () => {
        setIsShowreel(true);
        stopLenis();
    }

    const closeShowreel = () => {
        setIsShowreel(false)
        startLenis();
    }

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleMenu = () => {
        if (disabled) return;
        btnDisable();

        setIsMenuOpen((prevMode) => !prevMode);
        if (menuState.initial === false) {
            setMenuState({ initial: null, clicked: true });
            stopLenis();
        } else {
            setMenuState({ clicked: !menuState.clicked });
            startLenis();
        }
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-500 ${isHeaderVisible ? "translate-y-none" : "-translate-y-full"}`}>
                <div className="w-[92%] mx-auto flex justify-between items-center py-[2vw] tablet:py-[3vw] tablet:w-[90%] mobile:w-[85%] mobile:py-[4vw] header-inner-container">
                    <div className="logo w-[2.3vw] h-full tablet:w-[6vw] mobile:w-[34px]">
                        <Link href="/" aria-label="Go to Homepage" prefetch={false}>
                            <Image
                                className="dark:invert header-logo"
                                src="/en-logo.svg"
                                width={80}
                                height={80}
                                alt="Enigma Logo"
                                title="Enigma Logo"
                                data-cursor-size="60px"
                                data-cursor-exclusion
                                priority={true}
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-end gap-[3vw] tablet:gap-[5vw] mobile:gap-[6vw]">
                        <div data-cursor-size="60px" data-cursor-exclusion>
                            <button aria-label="Open Showreel" onClick={openShowreel} className="font-heading text-[1vw] font-medium tablet:text-[3vw] text-[#1a1a1a] dark:text-[#ffffff] mobile:hidden showreel-btn">
                                <span className="">showreel&apos;23</span>
                            </button>
                        </div>
                        <button aria-label="Toggle Dark Mode" className={`rounded-full w-[2.5vw] h-[2.5vw] tablet:w-[4vw] tablet:h-[4vw] bg-white p-[0.5vw] transform transition-transform duration-500 mobile:h-[30px] mobile:w-[30px] mobile:p-[4px] ${isDarkMode ? "rotate-270 bg-black1" : "rotate-90 bg-white"}`} onClick={toggleDarkMode}>
                            <Image
                                className="w-full h-full"
                                src={isDarkMode ? "/assets/header/moon.svg" : "/assets/header/sun.svg"}
                                width={30}
                                height={30}
                                alt="Dark Mode Icon"
                                priority={true}
                            />
                        </button>
                        <button ref={menuBtnRef} aria-label="Open Menu" onClick={toggleMenu} className={`${styles.menuBtn} ${isMenuOpen ? styles.opened : ""}`} data-cursor-exclusion data-cursor-size="60px">
                            <svg viewBox="0 0 100 100" className="w-[2.5vw] h-auto tablet:w-[6vw] mobile:w-[40px] menuSvg">
                                <path className={` ${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                <path className={` ${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
                                <path className={` ${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <div className={`${styles.showreelWrapper} !fixed top-0 left-0 bottom-0 right-0 z-[120] pointer-events-none ${isShowreel ? "pointer-events-auto" : ""}`} data-cursor-color="#5d5ad6" data-cursor-text="Close" data-cursor-size="100px">
                <Showreel isShowreel={isShowreel} onClick={closeShowreel} />
            </div>
            <Menu state={menuState} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
    )
}

export default Header;