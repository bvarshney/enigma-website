const Approach = ({ content }) => {
    return (
        <>
            <section id="approach">
                <div className="w-[85%] mx-auto py-[10%] tablet:py-[15%]">
                    <div className="flex justify-between items-start tablet:flex-col">
                        <div className="w-2/5 tablet:w-full">
                            <h4 className="font-heading font-black2 font-medium text-[4vw] leading-[1.2] tablet:text-[8vw] mobile:text-[11vw] title-anim">
                                <span>Our{" "}</span> <br />
                                <span className="stroke mobile:text-gray2">Approach</span>
                            </h4>
                        </div>
                        <div className="w-3/5 mt-5 text-[1.5vw] leading-[1.5] tracking-wide text-justify space-y-[5%] tablet:text-[3vw] tablet:mt-10 tablet:w-full mobile:text-[4.5vw] mobile:space-y-[10%]">
                            {content.map((para, index) => (
                                <p className="para-anim" key={index}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Approach;