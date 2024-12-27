import JobCard from "./JobCard";

const InternshipListing = ({ jobs }) => {

    return (
        <>
            <section id="listing">
                <div className="w-[75%] mx-auto py-[10vw] tablet:w-[85%]">
                    <div className="text-center">
                        <h4 className="leading-[1.2] text-[3.5vw] mobile:text-4xl tablet:text-[7vw] font-medium mb-3 font-heading title-anim">
                            Enigma&apos;s Internship<span className="text-primary"> Program</span>
                        </h4>
                        <p className="w-1/2 tablet:w-full mx-auto text-black2 text-xl tablet:text-2xl mobile:text-xl tracking-wide para-anim">Intern with the Digital Pioneers: Unlock Your Potential & Ignite Your Career with Hands-On Experience in the Digital Frontier. Real Projects, Real Impact!</p>
                    </div>

                    <div className="mt-20 grid grid-cols-3 gap-[2.5%] tablet:grid-cols-2 tablet:gap-8 mobile:grid-cols-1">
                        {jobs.map((item, index) => (
                            <JobCard
                                key={index}
                                benefits={item.jobFields.benefits}
                                link={item.slug}
                                img={item.featuredImage.sourceUrl}
                                title={item.title}
                                text={item.excerpt}
                                status={item.tags[0].name}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default InternshipListing;
