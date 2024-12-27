import Image from "next/image";
import Link from "next/link";

const MobilePortfolio = ({ projectData }) => {
    return (
        <>
            <div className="grid grid-cols-2 items-center gap-x-[4vw] gap-y-[14vw] justify-between w-full">
                {projectData.map((item, index) => (
                    <Card
                        key={index}
                        link={`/${item.link}`}
                        title={item.name}
                        src={item.srcSLider}
                        description={item.description}
                        year={item.year}
                    />
                ))}
            </div>
        </>
    )
}

export default MobilePortfolio;

const Card = ({ link, src, title, year, description }) => {
    return (
        <>
            <div className="h-[60vw] col-span-1 overflow-hidden rounded-3xl mobile:col-span-2 mobile:h-[100vw] fadeup">
                <Link href={link} className="w-full h-full group block">
                    <div className="relative h-full">
                        <Image src={src} fill priority={false} alt={title} className="w-full h-full object-cover duration-500 scale-[1.1] group-hover:scale-100"/>
                        <div className="relative z-[1] w-full h-full flex flex-col items-start justify-end gap-[1vw] p-[2vw] mobile:p-[4vw] mobile:gap-[2vw]">
                            <p className="text-[1.8vw] mobile:text-sm bg-white1 px-[2vw] py-[0.8vw] mobile:px-[4vw] mobile:py-[1.4vw] rounded-full opacity-0 -translate-y-full duration-500 group-hover:translate-y-0 group-hover:opacity-100">{year}</p>
                            <p className="text-[1.8vw] mobile:text-sm bg-white1 px-[2vw] py-[0.8vw] mobile:px-[4vw] mobile:py-[1.4vw] rounded-full opacity-0 -translate-y-full duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">{description}</p>
                            <div className="flex gap-2 items-center">
                                <h4 className="text-[3vw] bg-white1 py-[1vw] px-[3vw] rounded-full mobile:text-2xl">{title}</h4>
                                <div className="w-12 h-12 bg-white1 rounded-full overflow-hidden p-4">
                                    <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.56 9.56" >
                                        <line id="line1" x1="0.27" y1="9.29" x2="9.18" y2="0.38" fill="#4e4e4e" stroke="#4e4e4e" strokeMiterlimit={10} strokeWidth="0.75" />
                                        <line id="line2" x1="0.27" y1="9.29" x2="9.18" y2="0.38" fill="#4e4e4e" stroke="#4e4e4e" strokeMiterlimit={10} strokeWidth="0.75" />
                                        <polyline id="arrow-head-1" points="5.01 0.38 9.18 0.38 9.18 4.55" fill="none" stroke="#4e4e4e" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="0.75" />
                                        <polyline id="arrow-head-2" points="5.01 0.38 9.18 0.38 9.18 4.55" fill="none" stroke="#4e4e4e" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="0.75" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}