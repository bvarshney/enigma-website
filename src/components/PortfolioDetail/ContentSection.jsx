const ContentSection = ({ title, contentB, contentN }) => {
    return (
        <>
            <section id="content-section">
                <div className="w-[75%] mx-auto my-[10vw] tablet:w-4/5 tablet:my-[15vw] mobile:w-[85%] mobile:my-[20vw]">
                    <div className="flex flex-start justify-between mobile:flex-col">
                        <h2 className="text-[1.5vw] tracking-wide font-medium font-heading uppercase tablet:text-[2.5vw] tablet:tracking-normal mobile:text-[5.5vw] mobile:mb-[8vw]">{title}</h2>
                        <div className="w-[60%] text-justify tablet:w-[68%] mobile:w-full">
                            {contentB && contentB.map((text, index) => (
                                <h4 key={index} className="font-medium text-[2vw] mb-[3.5vw] leading-[1.5] tablet:text-[2.7vw] tablet:mb-[5vw] mobile:text-[5vw] mobile:mb-[8vw]">{text}</h4>
                            ))}
                            {contentN && contentN.map((text, index) => (
                                <p key={index} className="text-[1.5vw] mb-[2.5vw] leading-[1.4] last:mb-0 tablet:text-[2.5vw] tablet:mb-[4vw] mobile:text-[4.5vw] mobile:mb-[5vw]">{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContentSection;
