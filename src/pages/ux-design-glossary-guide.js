import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import { useEffect, useRef, useState } from "react";
import { useLenisFunctions } from "@/lib/utils";
import Image from "next/image";
import gsap from "gsap";
import { fadeUp } from "@/lib/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/MetaData";
import Modal from "@/components/ux-glossary/Modal";
import Card from "@/components/ux-glossary/Card";
import Data from "@/components/ux-glossary/Data.json";

export default function Page() {
    const { startLenis, stopLenis } = useLenisFunctions();
    const [filter, setFilter] = useState('');
    const [selectedTerm, setSelectedTerm] = useState(null);
    const head = useRef(null);
    const rightSection = useRef(null);
    const leftSection = useRef(null);

    const handleCardClick = (term) => {
        setSelectedTerm(term);
        stopLenis();
    };
    const handleCloseModal = () => {
        setSelectedTerm(null);
        startLenis();
    };

    // Hero Section Animation
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(head.current, {
                rotationX: -80,
                opacity: 0,
                translateY: 300,
                transformPerspective: "1000",
                transformOrigin: "top center",
            }, {
                delay: 3,
                duration: 1.3,
                rotationX: 0,
                opacity: 1,
                translateY: 0,
                stagger: 0.2,
            })
            .from(leftSection.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: -0.9,
            })
            .from(rightSection.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: -0.9,
            })
        });
        return () => ctx.revert();
    }, []);

    fadeUp();

    const metadata = {
        title: "UX Design Glossary: Mastering UX Terms & Concepts",
        description: "Confused by UX jargon? Our UX glossary deciphers key UX terms and concepts in simple language, for beginners and experts alike! Bookmark this handy UX guide.",
        img: "ux-design-glossary.png",
        slug: "ux-design-glossary-guide",
        date_published: "2023-01-01T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <section data-cursor-size="10px" data-cursor-text="">
                    <div className="w-[85%] mx-auto tablet:w-[90%]">
                        <div className="w-[70%] tablet:w-full pt-[10vw] tablet:pt-[22vw] mobile:pt-[30vw]">
                            <h1 ref={head} className="text-[3vw] font-heading font-medium tablet:text-[4.8vw] mobile:text-[6vw]">
                                The UX Design Glossary: Deciphering the Alphabet Soup of UX Jargon
                            </h1>
                        </div>

                        <div className="pt-[6vw] tablet:pt-[8vw] flex justify-between tablet:flex-col tablet:gap-[6vw] mobile:gap-[10vw]">
                            <div ref={leftSection} className="w-[35%] h-[18vw] relative overflow-hidden tablet:w-full tablet:h-[35vh] mobile:h-[28vh]">
                                <Image src="/assets/ux-glossary/ux-glossary-main.jpg" className="w-full h-full object-cover" alt="UX Glossary Main" title="UX Glossary Main" width={600} height={400} />
                            </div>
                            <div ref={rightSection} className="w-[58%] space-y-[5%] text-[1.4vw] text-justify tablet:w-full tracking-wide tablet:text-[3.5vw] mobile:text-[4vw] mobile:space-y-[8%]">
                                <h2 className="text-[1.6vw] font-medium tablet:text-[3.8vw] mobile:text-[4.5vw]">
                                    &ldquo;Engage.&rdquo; A phrase familiar to all Star Trek fans. It&apos;s Captain Picard&apos;s iconic command to the crew of the USS Enterprise to go forth and explore new worlds. But we&apos;re not in space. Instead, we&apos;re diving into the vast universe of User Experience (UX) Design, and this article is your command centre. Here, we will demystify the jargon, unpack the terms, and give you a warp-speed introduction to the exciting world of UX design, akin to a UX design agency.
                                </h2>
                                <p>
                                    So buckle up, future UXers, and prepare to &ldquo;engage&rdquo; with the UX Design Glossary.
                                </p>
                                <p >
                                    UX design, like any specialized field, has its own language. A newcomer might feel like they&apos;ve landed on an alien planet when they first encounter phrases like Agile UX, Automated UX Research, or Information Architecture. But fear not. As a leading UI/UX agency, we&apos;re here to help you decipher these terms and give you a confident start to your UX journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="listing">
                    <div className="w-[85%] mx-auto tablet:w-[90%] pt-[5vw] tablet:pt-[10vw] pb-[10vw]">
                        <div className="flex w-full items-center gap-2 mb-12 tablet:mb-16 mobile:mb-12">
                            <p className="text-2xl font-medium tablet:text-3xl mobile:text-xl">Seacrh by term :</p>
                            <input
                                aria-label="search by term"
                                className="!bg-transparent border-b focus:outline-none text-xl px-2 tablet:text-2xl mobile:text-xl"
                                type="text"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-[2.5vw] tablet:grid-cols-2 tablet:gap-[4.5vw] mobile:grid-cols-1 mobile:gap-[8vw]">
                            {Data.terms
                                .filter((term) => term.name.toLowerCase().startsWith(filter.toLowerCase()))
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((term) => (
                                    <Card key={term.id} term={term} onClick={handleCardClick} />
                                ))}
                        </div>
                        {selectedTerm && <Modal term={selectedTerm} onClose={handleCloseModal} />}
                    </div>
                </section>
            </Layout>
            <PageLoader loaderText="The UX Design Glossary" />
        </>
    )
}