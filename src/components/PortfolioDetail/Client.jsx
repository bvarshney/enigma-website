const Client = ({ content, tags }) => {

    return (
        <>
            <section id="client-section">
                <div className="w-[75%] mx-auto my-[10vw] tablet:w-4/5 tablet:my-[15vw] mobile:w-[85%] mobile:my-[20vw]">
                    <div className="flex flex-start justify-between mobile:flex-col">
                        <h2 className="text-[1.5vw] tracking-wide font-medium font-heading uppercase tablet:text-[2.5vw] mobile:text-[5.5vw] mobile:mb-[8vw]">THE CLIENT</h2>
                        <div className="w-[70%] font-medium tracking-wider tablet:w-[65%] mobile:w-full">
                            <h3 className="text-[2vw] text-justify mb-[3vw] tablet:text-[2.7vw] tablet:tracking-normal tablet:leading-[1.3] tablet:mb-[5vw] mobile:text-[5vw] mobile:mb-[8vw]">
                                {content}
                            </h3>
                            <div className="flex flex-wrap gap-[2vw] font-heading">
                                {tags.map((tag, index) => (
                                    <h3 key={index} className="text-[1.2vw] rounded-full border border-current uppercase py-4 px-10 tablet:text-[1.8vw] tablet:px-[1.5vw] tablet:py-[1vw] mobile:text-[3.2vw] mobile:px-[2vw]" data-cursor-size="30px" data-cursor-exclusion>{tag}</h3>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Client;