import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactDetails = () => {

    return (
        <>
            <section>
                <div className="w-[85%] h-full mx-auto py-[10%] mobile:py-[15%]">
                    <div className="flex justify-between items-start tablet:block relative">
                        <div className="w-[40%] space-y-[7vw] font-heading font-medium pt-4 tablet:w-full sticky top-[20%] tablet:static mobile:static">
                            <div className="flex gap-[5vw] items-center mobile:gap-[8vw]">
                                <h2 className="uppercase text-[1.2vw] tablet:text-[3.5vw] mobile:text-[4vw]">Email</h2>
                                <Link
                                    data-cursor-size="80px"
                                    data-cursor-exclusion
                                    className="text-[1.4vw] tablet:text-[3.5vw] mobile:text-[4.5vw]"
                                    href="mailto:hi@weareenigma.com"
                                >
                                    hi@weareenigma.com
                                </Link>
                            </div>
                            <div className="flex gap-[5vw] items-center mobile:gap-[8vw]">
                                <h3 className="uppercase text-[1.2vw] tablet:text-[3.5vw] mobile:text-[4vw]">Office</h3>
                                <Link
                                    data-cursor-size="80px"
                                    data-cursor-exclusion
                                    className="text-[1.4vw] tablet:text-[3.5vw] mobile:text-[4.5vw]"
                                    target="_blank"
                                    href="https://maps.app.goo.gl/M5mSBe8jN5F5CvpG9"
                                >
                                    Suite 301, Grandslam I-Thum, <br /> Sector - 62, Noida, <br /> Uttar Pradesh, IN 201301
                                </Link>
                            </div>
                            <div className="flex gap-[5vw] items-center mobile:gap-[8vw]">
                                <h4 className="uppercase text-[1.2vw] tablet:text-[3.5vw] mobile:text-[4vw]">Phone</h4>
                                <Link
                                    data-cursor-size="80px"
                                    data-cursor-exclusion
                                    className="text-[1.4vw] tablet:text-[3.5vw] mobile:text-[4.5vw]"
                                    href="tel:+91 8178 026 136"
                                >
                                    +91 8178 026 136
                                </Link>
                            </div>
                        </div>
                        <div className="w-[55%] px-[5%] pt-[20%] tablet:w-full tablet:px-0 mobile:pt-[25%]">
                            <h5 className="text-[6vw] leading-[1.1] font-heading font-medium lowercase mb-[4vw] tablet:text-[8vw] mobile:text-[11vw] mobile:mb-[8vw]">
                                Tell Us About Your Project.
                            </h5>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactDetails;