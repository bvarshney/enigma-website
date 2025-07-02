import Link from "next/link"
import Image from "next/image"

const JobCard = ({ benefits, link, img, title, text, status }) => {
    return (
        <div className="w-full h-full fadeup">
            <Link href={`/careers/${link}`} className={`relative shadow-lg px-7 py-10 space-y-10 duration-300 rounded-2xl dark:bg-white2 hover:bg-white group grid grid-rows-[auto auto auto auto] h-full tablet:space-y-8 ${status === 'Closed' ? 'pointer-events-none' : ''}`}>
                <div className="flex items-center justify-start gap-[1vw] mobile:gap-4">
                    <Image className="w-[5vw] tablet:w-[10vw] mobile:w-[18vw]" alt="Career Listing Image" src={img} width={100} height={100} />
                    <h5 className="font-medium text-2xl font-heading group-hover:underline">{title}</h5>
                </div>
                <div
                    className="text-lg leading-[1.2]"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
                <div className="mb-2">
                    <div className="flex items-center gap-4 h-full">
                        <div className="flex flex-col h-full justify-between pb-1 gap-2">
                            {benefits?.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Image className="w-6 h-6" src={`/assets/career/benefit-${index + 1}.svg`} alt="Benefit Icon" width={15} height={15} />
                                    <span className="text-lg text-black2">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="block group-hover:bg-primary h-fit group-hover:shadow-lg duration-300 text-primary group-hover:text-white border-primary border-2 rounded-full py-2 px-10 tablet:py-3 tablet:px-6">
                    <div className="flex gap-3 items-center justify-center h-fit">
                        <span className="font-medium text-xl tablet:text-2xl mobile:text-xl">View Details</span>
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g id="style=stroke">
                                <g id="arrow-long-right">
                                    <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M1.94995 12C1.94995 12.4142 2.28574 12.75 2.69995 12.75L21.2 12.75C21.6142 12.75 21.95 12.4142 21.95 12C21.95 11.5858 21.6142 11.25 21.2 11.25L2.69995 11.25C2.28574 11.25 1.94995 11.5858 1.94995 12Z" />
                                    <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M14.1696 4.46967C13.8767 4.76256 13.8767 5.23744 14.1696 5.53033L20.4625 11.8232C20.5601 11.9209 20.5601 12.0791 20.4625 12.1768L14.1696 18.4697C13.8767 18.7626 13.8767 19.2374 14.1696 19.5303C14.4625 19.8232 14.9374 19.8232 15.2303 19.5303L21.5232 13.2374C22.2066 12.554 22.2066 11.446 21.5232 10.7626L15.2303 4.46967C14.9374 4.17678 14.4625 4.17678 14.1696 4.46967Z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className={`absolute text-lg font-heading top-4 right-4 text-white px-2 rounded !mt-0 job-${status}`}>
                    <span>{status}</span>
                </div>
            </Link>
        </div>
    )
}

export default JobCard;