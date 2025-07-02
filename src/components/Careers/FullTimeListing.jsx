import JobCard from "./JobCard";

const FullTimeListing = ({ jobs }) => {
    
    return (
        <>
            <section id="job-listing">
                <div className="w-[75%] mx-auto py-[10vw] tablet:w-[85%]">
                    <div className="text-center">
                        <h4 className="leading-[1.2] text-[3.5vw] mobile:text-4xl tablet:text-[7vw] font-medium mb-3 font-heading title-anim">
                            Current<span className="text-primary"> Openings</span>
                        </h4>
                        <p className="text-black2 text-xl tablet:text-2xl mobile:text-xl tracking-wide para-anim">An invitation to be part of a visionary tribe that&apos;s shaping the digital future.</p>
                    </div>

                    <div className="mt-20 grid grid-cols-3 gap-[2.5%] tablet:grid-cols-2 tablet:gap-8 mobile:grid-cols-1">
                        {jobs?.map((job, index) => (
                            <JobCard
                                key={index}
                                benefits={job.features}
                                link={job.slug}
                                img={job.profileImage}
                                title={job.jobTitle}
                                text={job.smallDescription}
                                status={job.tag}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FullTimeListing;
