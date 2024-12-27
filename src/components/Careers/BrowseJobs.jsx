import { useLenis } from "lenis/react";
import Image from "next/image";

const BrowseJobs = () => {

    const lenis = useLenis();

    const onClick = () => {
        lenis.scrollTo("#job-listing", { offset: -50 })
    }

    return (
        <section id="browse-jobs">
            <div className="w-[75%] tablet:w-[80%] mx-auto text-center py-[10vw] tablet:py-[15vw] px-8 tablet:px-0 mobile:py-[25vw]">
                <h2 className="font-heading text-[3.5vw] mb-20 tablet:text-[7vw] mobile:text-4xl font-medium mobile:mb-10 title-anim">
                    Browse<span className="text-primary"> Jobs</span>
                </h2>
                <div className="flex flex-wrap gap-4 tablet:flex-col tablet:gap-5 mobile:gap-2 fadeup">
                    {JobButtons.map((text, index) => (
                        <Buttons 
                            key={index}
                            text={text}
                            onClick={onClick}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BrowseJobs;

const Buttons = ({ text, onClick }) => {
    return (
        <a href="#job-listing" onClick={onClick} className="group duration-300 hover:text-primary text-[2.1vw] tablet:text-4xl mobile:text-xl font-medium flex items-center">
            <h3>{text}</h3>
            <span className="bg-black1 group-hover:opacity-0 duration-300 h-4 w-4 mobile:h-3 mobile:w-3 rounded-full ml-4" />
            <Image className="w-8 h-8 -ml-[25px] opacity-0 duration-300 group-hover:opacity-100" alt="circular arrow svg" src="/assets/icons/arrow-circle.svg" width={10} height={10}/>
        </a>
    )
}

const JobButtons = [
    "UI/UX Design",
    "Business Development",
    "Account Management",
    "Frontend Development",
    "Search Engine Optimisation",
    "Content Writing",
    "Social Media Marketing",
]