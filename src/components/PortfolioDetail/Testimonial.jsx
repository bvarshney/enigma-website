import Image from "next/image"

const Testimonial = ({ text, cImg, cName, cTitle }) => {
    return (
        <section id="testimonial">
            <div className="w-3/5 mx-auto my-[10vw] space-y-[5vw] tablet:w-[85%] tablet:my-[15vw] mobile:my-[25vw] mobile:space-y-[10%]">
                <h3 className="text-[1.4vw] tracking-wide font-medium font-heading uppercase tablet:text-[3vw] mobile:text-[5.5vw]">Words From The Client</h3>
                <p className="text-[1.9vw] font-medium text-justify tablet:text-[2.7vw] mobile:text-[4.5vw] tablet:tracking-wide"><span className="text-gray text-[9vw] leading-[0] font-[sans-serif] align-bottom mobile:text-[18vw]">“</span>{text}</p>
                <div className="flex gap-[2vw] items-center mobile:flex-col">
                    <div className="rounded-full overflow-hidden h-[6vw] w-[6vw] tablet:w-[14vw] tablet:h-[14vw] mobile:w-[24vw] mobile:h-[24vw]">
                        <Image
                            className="w-full h-auto object-cover"
                            priority={false}
                            width={120}
                            height={120}
                            src={`/assets/portfolio/detail/${cImg}`} alt="Client Image" />
                    </div>
                    <div className="font-heading text-[1.5vw] tablet:text-[2.5vw] mobile:text-[4vw] mobile:text-center">
                        <p className="font-medium tracking-wide">{cName}</p>
                        <p className="">{cTitle}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;