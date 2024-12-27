import Link from "next/link"

const SecondSection = ({ text1, text2, btnText }) => {
    return (
        <>
            <section id='section-2'>
                <div className="w-[85%] mx-auto pt-10 pb-[10%] flex justify-end mobile:pb-[15%]">
                    <div className="w-[65%] tablet:w-full text-justify ">
                        <h2 className="text-[1.7vw] font-medium tracking-wide mb-[5%] tablet:text-[3.5vw] mobile:text-[4.8vw] mobile:mb-[12%] fadeup">
                            {text1}
                        </h2>
                        <p className="text-[1.5vw] leading-[1.5] tracking-wide mb-[5%] tablet:text-[3vw] mobile:text-[4.5vw] mobile:mb-[12%] para-anim">
                            {text2}
                        </p>
                        <Link href='/get-in-touch' className="text-[1.2vw] px-[2vw] w-fit py-[0.7vw] font-semibold border-[1px] border-current rounded-full tablet:text-[2.5vw] tablet:px-[5vw] tablet:py-[2vw] mobile:text-[5vw] mobile:w-full block mobile:py-[4vw] mobile:px-0 mobile:text-center uppercase" data-cursor-size="80px" data-cursor-exclusion>
                            <span>
                                {btnText}
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SecondSection;