import Image from "next/image";
import { useRef } from "react";
import styles from "../index.module.css";

const OfferCards = () => {
    const container = useRef(null);

    return (
        <>
            <section ref={container} id="offer-cards">
                <div className="w-[85%] mx-auto py-[10%] tablet:py-[15%]">

                    <h3 className="text-[4vw] font-medium font-heading leading-[1.2] tablet:text-[8vw] mobile:text-[11vw] mb-[8%] title-anim">
                        Our Services<span className='stroke tracking-wide mobile:text-gray2'> Include</span>
                    </h3>

                    <div className="grid grid-cols-3 gap-6 w-[85%] h-full ml-auto tablet:grid-cols-2 tablet:w-full mobile:grid-cols-1">
                        <Card text="User Experience (UX) Design" />
                        <Card text="User Interface (UI) Design" />

                        <div className="h-[10vw] tablet:h-[15vh] mobile:h-[20vh] rounded-2xl overflow-hidden shadow-lg group fadeup">
                            <Image 
                                className="w-full h-full group-hover:scale-105 duration-500 group-hover:saturate-0"
                                src='/assets/service-detail/design/design4.webp'
                                alt='our service image'
                                priority={false}
                                width={450}
                                height={190}
                            >
                            </Image>
                        </div>

                        <Card text="Interaction Design (IxD)" />

                        <div className="h-[10vw] tablet:h-[15vh] mobile:h-[20vh] rounded-2xl overflow-hidden shadow-lg group fadeup" >
                            <Image 
                                className="w-full h-full group-hover:scale-105 duration-500 group-hover:saturate-0"
                                src='/assets/service-detail/design/design5.webp'
                                alt='our service image'
                                priority={false}
                                width={450}
                                height={190}
                            />
                        </div>

                        <Card text="End-to-End Product Design" />
                        <Card text="User Testing and Evaluation" />
                        <Card text="Prototyping and Wireframing" />
                        <Card text="Website & Mobile App Design" />
                        <Card text="Content Strategy for UX" />
                        <Card text="Usability Testing & Accessibility Design" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OfferCards;

const Card = ({ text }) => {
    return (
        <>
            <div className="text-center h-[10vw] flex items-center justify-center rounded-2xl shadow-lg relative overflow-hidden p-10 bg-white dark:bg-white2 group tablet:h-[15vh] mobile:h-[20vh] fadeup" >
                <div className="absolute top-[-10%] left-0 bottom-0 right-0 backdrop-blur-[80px] z-[1]"></div>
                <div className={`${styles.offerCardBg} opacity-0 duration-500 group-hover:opacity-90`}>
                    <span className="card-shape-6 card-bg-1 bg-[#f5dd94] z-[3] absolute w-[150px] h-[150px] rounded-full blur-[5px]"></span>
                    <span className="card-shape-6 card-bg-2 bg-[#f79694] z-[2] absolute w-[280px] h-[280px] rounded-full blur-[5px]"></span>
                    <span className="card-shape-6 card-bg-3 bg-[#7f7de4] z-[1] absolute w-[550px] h-[550px] rounded-full"></span>
                </div>
                <h4 className="z-10 text-2xl font-heading font-medium leading-[1.2] mobile:text-xl">{text}</h4>
            </div>
        </>
    )
}