import jobs from "@/components/Careers/JobsData";
import Link from "next/link";

export default function FullTime() {

    // First, filter the jobs to get only full-time jobs
    const fullTimeJobs = jobs.filter((job) => job.type === 'FULL_TIME');

    return (
        <>
                    <p className="text-4xl leading-[1.2] md:text-[7vw] 2xl:text-[3.5vw] font-medium mb-2">
                        Current<span className="color-primary"> Openings</span>
                    </p>
                    <p className="font-body text-black/60 text-xl md:text-3xl pt-2 md:pt-0 2xl:text-xl tracking-wide m-auto">
                        <span>
                            An invitation to be part of a visionary tribe that's shaping the digital future.
                        </span>
                    </p>

            {/* ========Latest Job Listing=============*/}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-12 md:mt-20 gap-12 2xl:gap-10 text-left">
                        {fullTimeJobs.map((job) => (
                            <div key={job.id}
                                 className="content-between grid-rows-[auto auto auto auto] grid group font-body px-7 2xl:px-7 xl:px-5 py-10 shadow-3xl rounded-2xl"
                                 >
                                 <div className="mb-8 flex items-center justify-start gap-4 md:gap-6">
                                    <img alt="Job Post Image" src={`/assets/careers/listing/${job.image}`} className="w-20 lg:w-24 h-20 lg:h-24"/>
                                    <div>
                                        <h4 className="font-display 3xl:text-3xl text-2xl text-black font-medium w-full md:flex block items-center justify-between">{job.title}</h4>
                                    </div>
                                 </div>

                                 <div className="w-full mb-6 md:mb-8">
                                    <h5 className="md:text-xl leading-[1.3] text-black/70 ">{job.sDescription}</h5>
                                 </div>
                            
                                <div className="mb-6 md:mb-8">
                                    {job.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-4 mb-4">
                                            <img className="w-6" src={`/assets/careers/listing/benefit-${index + 1}.svg`} alt={`Benefit Icon ${index + 1}`} />
                                            <span className="text-xl text-left">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <Link href={`/careers/${job.slug}`} className="md:h-16 h-14 flex items-center justify-center tw-primary block w-full hover:bg-primary hover:shadow-lg duration-300 hover:text-white border-primary border-2 rounded-xl">
                                    <span className="flex gap-5 items-center justify-center font-medium text-xl md:text-2xl font-body">
                                        View Details
                                        <span>
                                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <g id="style=stroke">
                                                <g id="arrow-long-right">
                                                <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M1.94995 12C1.94995 12.4142 2.28574 12.75 2.69995 12.75L21.2 12.75C21.6142 12.75 21.95 12.4142 21.95 12C21.95 11.5858 21.6142 11.25 21.2 11.25L2.69995 11.25C2.28574 11.25 1.94995 11.5858 1.94995 12Z"/>
                                                <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M14.1696 4.46967C13.8767 4.76256 13.8767 5.23744 14.1696 5.53033L20.4625 11.8232C20.5601 11.9209 20.5601 12.0791 20.4625 12.1768L14.1696 18.4697C13.8767 18.7626 13.8767 19.2374 14.1696 19.5303C14.4625 19.8232 14.9374 19.8232 15.2303 19.5303L21.5232 13.2374C22.2066 12.554 22.2066 11.446 21.5232 10.7626L15.2303 4.46967C14.9374 4.17678 14.4625 4.17678 14.1696 4.46967Z"/>
                                                </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
        </>
    )
}
