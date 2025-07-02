"use client"
import { ParaAnim } from "@/lib/gsapAnimations";
import Image from "next/image";

const Benefits = () => {
    ParaAnim()
   
    return (
        <section id="benefits">
            <div className="w-[75%] tablet:w-[85%] mx-auto pb-[10vw] tablet:py-[15vw] mobile:pb-[20vw] px-4 tablet:px-0">
                <div className="flex gap-24 tablet:flex-col tablet:gap-0">
                    <div className="w-2/5 tablet:w-full pb-0 tablet:pb-16">
                        <p className="mb-5 uppercase text-2xl font-bold tracking-wide fadeup">
                            Benefits Of
                        </p>
                        <h3 className="text-[2.2vw] font-heading mobile:text-4xl tablet:text-[6vw] text-left mb-5 font-medium leading-[1.3] title-anim">
                            Working At <span className="text-primary">{" "}Enigma</span>
                        </h3>
                        <p className="text-gray2 text-2xl tablet:text-3xl mobile:text-xl text-justify para-anim">
                            At Enigma, we offer more than jobs; we provide platforms for you to challenge the norms, create impactful solutions, and grow exponentially, both personally and professionally. Realize your full potential while defining the next generation of digital experiences.
                        </p>
                    </div>
                    <div className="w-3/5 tablet:w-full grid grid-cols-2 mobile:grid-cols-1 gap-16">
                        {content.map((item, index) => (
                            <div key={index} className="fadeup">
                                <div className="rounded-md p-6 w-24 h-24 mb-8" style={{ background: item.color}}>
                                    <Image width={100} height={100} alt="job listing image" src={item.img} className="w-full h-full" />
                                </div>
                                <p className="font-heading text-xl tablet:text-3xl font-medium mb-8">
                                    {item.title}
                                </p>
                                <p className="text-lg tablet:text-xl tracking-wide text-black2 opacity-80 font-normal text-justify">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits;

const content = [
    {
        title: "Innovative Culture:",
        text: "Enigma thrives on innovation, fostering a workspace where risk-taking and originality are part of your everyday. You'll join a team eager to push boundaries and champion your groundbreaking ideas.",
        img: "/assets/career/career-1.svg",
        color: "#E7F2FF",
    },
    {
        title: "Professional Growth:",
        text: "At Enigma, your career is a dynamic journey of learning and advancement. We offer diverse opportunities to grow with industry experts, ensuring every project polishes your professional prowess.",
        img: "/assets/career/career-2.svg",
        color: "#F1F7E8",
    },
    {
        title: "Impactful Work:",
        text: "Your work at Enigma transcends typical client projects, driving industry innovation and making a tangible difference in the world. Here, you're crafting solutions that redefine businesses and lives.",
        img: "/assets/career/career-3.svg",
        color: "#EFF2F5",
    },
    {
        title: "Collaborative Environment:",
        text: "Your work at Enigma transcends typical client projects, driving industry innovation and making a tangible difference in the world. Here, you're crafting solutions that redefine businesses and lives.",
        img: "/assets/career/career-4.svg",
        color: "#FFEEED",
    },
    {
        title: "Work-Life Synergy:",
        text: "Your work at Enigma transcends typical client projects, driving industry innovation and making a tangible difference in the world. Here, you're crafting solutions that redefine businesses and lives.",
        img: "/assets/career/career-5.svg",
        color: "#F1F3FF",
    },
]