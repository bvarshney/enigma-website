import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import Client from "@/components/PortfolioDetail/Client";
import ContentSection from "@/components/PortfolioDetail/ContentSection";
import Hero from "@/components/PortfolioDetail/Hero";
import ImageGrid from "@/components/PortfolioDetail/ImageGrid";
import ParallaxImage from "@/components/PortfolioDetail/ParallaxImage";
import Testimonial from "@/components/PortfolioDetail/Testimonial";
import VideoSection from "@/components/PortfolioDetail/VideoSection";
import Image from "next/image";
import ProjectSlider from "@/components/PortfolioDetail/ProjectSlider";
import { WebpageJsonLd } from "@/lib/json-ld";
import { generateMetadata } from "@/lib/metadata";

const meta = {
    title: "Certvault Design & Development Case Study | Enigma",
    description: "Discover how Enigma overhauled the User Experience & transformed the User Interface of USA's largest digital insurance certificate storage and delivery platform.",
    img: "portfolio-certvault.png",
    slug: "certvault-case-study",
    date_published: "2023-01-01T00:00",
    date_modified: "2024-12-25T00:00",
}

export const metadata = generateMetadata({
    title: meta.title,
    description: meta.description,
    datePublished: meta.date_published,
    dateModified: meta.date_modified,
    openGraphImage: meta.img,
    slug: meta.slug,
});

export default function PortfolioDetail() {


    return (
        <>
            <WebpageJsonLd metadata={meta} />
            <Layout>
                <Hero cursorColor="#F50D37" title="CertVault: A Cloud-based Certificate Repository" linkText="certvault.org" link="https://certvault.org/" industry="SAAS" year="2019-20" />
                <ParallaxImage id="firstFade" imgSrc="/certvault/certvault-casestudy-image-1.webp" alt="certvault casestudy image 1" cursorColor="#F50D37" cursorText="Certvault" />
                <Client content="CertVault is a pioneering solution in the insurance industry, offering a cloud-based certificate repository and delivery system. Developed under the umbrella of PatraCorp, a global leader in delivering business process outsourcing services to the insurance sector, CertVault aims to revolutionize the way insurance certificates are accessed, managed, and delivered." tags={['UX Planning', 'UI Design']} />
                <ParallaxImage imgSrc="/certvault/certvault-casestudy-image-2.webp" alt="certvault casestudy image 2" cursorColor="#F50D37" cursorText="Certvault" />
                <ContentSection
                    title="The Ask"
                    contentN={[
                        "CertVault, a groundbreaking cloud-based certificate repository and delivery system, was on the brink of revolutionizing how insurance certificates are accessed and delivered. With a vision to provide instant access to certificates for brokers, insureds, holders, and carriers, CertVault aimed to make certificate delivery more secure, convenient, and efficient.",
                        "However, the challenge lay in presenting this innovative solution in a user-friendly manner, ensuring that the platform's interface was intuitive and met the needs of its diverse user base. With the Global InsurTech Summit 2020 approaching, the pressure was on to design a UI that not only showcased CertVault's capabilities but also resonated with a global audience.",
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="Certvault Image" />

                <ContentSection
                    title="Our Approach"
                    contentN={[
                        "Diving into the heart of CertVault, we recognized the immense potential and the transformative impact it could have in the realm of insurance certificates. Our strategy was multi-pronged. First, we sought to understand the pain points of the target audience. We engaged in extensive consultations, gathering insights from brokers, insureds, holders, and carriers. This allowed us to identify the key challenges they faced with traditional certificate delivery systems.",
                        "With this knowledge in hand, we embarked on a meticulous UX planning phase. We aimed to create a seamless journey for users, from the moment they logged in to the point they accessed a certificate. Every touchpoint was optimized to ensure simplicity and efficiency. Recognizing the importance of trust in the insurance domain, we integrated features that would enhance transparency and reliability. The blockchain-backed security was highlighted prominently, assuring users of the integrity of the stored certificates.",
                        "Furthermore, we incorporated feedback mechanisms, allowing users to share their experiences and suggestions. This iterative approach ensured that the platform evolved in line with user expectations and needs.",
                    ]}
                />

                <ImageGrid images={ImageGrid2} alt="Certvault Image" />

                {/* Fonts Section */}
                <section id="font-section">
                    <div className="w-[85%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] mobile:mb-[5vw]">Fonts</h3>
                        <div className="w-[85%] mx-auto h-[34vw] overflow-hidden tablet:w-full tablet:h-[40vw] dark:invert">
                            <Image
                                priority={false}
                                width={1000}
                                height={1000}
                                src="/assets/portfolio/detail/certvault/certvault-casestudy-fonts.webp"
                                alt="Certvault Casestudy Fonts Image"
                                className="block w-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section id="color-section">
                    <div className="h-screen w-[85%] relative mx-auto my-[10vw] tablet:my-[15vw] tablet:h-auto">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] tablet:mb-[6vw] mobile:mb-10">Colours</h3>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-start">
                            <p  className="text-[15vw] leading-[1] font-heading font-semibold text-white2 translate-y-[20%] color-text">
                                Colour <br /> <span className="text-red-500">Palette</span>
                            </p>
                        </div>
                        <div className="w-[90%] h-4/5 mx-auto relative z-10 flex items-start justify-center">
                            <div className="flex flex-col pr-[10%] items-end justify-center w-full">
                                <div className="w-[8vw]  h-[8vw]  bg-[#fff] rounded-full shadow-xl tablet:w-[12vw] tablet:h-[12vw] mobile:w-[20vw] mobile:h-[20vw] color" />
                                <div className="w-[8vw] h-[8vw] translate-y-[-10%] bg-[#bdbdbd] tablet:w-[12vw] tablet:h-[12vw] mobile:w-[20vw] mobile:h-[20vw] mobile:translate-y-[-25%] rounded-full shadow-xl color" />
                                <div className="w-[8vw] h-[8vw] translate-y-[-20%] bg-[#222] tablet:w-[12vw] tablet:h-[12vw] mobile:w-[20vw] mobile:h-[20vw] mobile:translate-y-[-50%] rounded-full shadow-2xl color" />
                                <div className="w-[8vw] h-[8vw] translate-y-[-30%] bg-[#e02826] tablet:w-[12vw] tablet:h-[12vw] mobile:w-[20vw] mobile:h-[20vw] mobile:translate-y-[-75%] rounded-full shadow-2xl color" />
                                <div style={color5} className="w-[8vw] h-[8vw] translate-y-[-40%] tablet:w-[12vw] tablet:h-[12vw] mobile:w-[20vw] mobile:h-[20vw] mobile:translate-y-[-100%] rounded-full shadow-2xl color" />
                            </div>
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="Certvault Application UI"
                    videoSrc="certvault/certvault.mp4"
                    poster="certvault/certvault-poster.webp"
                />
                <ContentSection
                    title="Our UX Magic"
                    contentN={[
                        "The true testament to the success of our UX strategy was evident in the numbers. CertVault, post our intervention, boasted a staggering 1.7M Certificates of Insurance. But numbers only tell half the story. The real value add was in the user experience. Over 75,000 companies registered as users, a testament to the platform's intuitive design and user-centric approach.",
                        "Our UX planning ensured that users, whether they were brokers, insureds, or carriers, could navigate the platform with ease, accessing certificates instantly. The design effectively communicated the platform's core functionalities, from the blockchain-backed security to the instant access of certificates. Alerts and notifications were strategically placed, ensuring users were always informed about certificate expirations, carrier details, and insured names.",
                    ]}
                />
                <ParallaxImage imgSrc="/certvault/certvault-casestudy-image-11.webp" alt="certvault casestudy image 11" cursorColor="#F50D37" cursorText="Certvault" />
                <ContentSection
                    title="The Result"
                    contentN={[
                        "The result was a UI that not only captured the essence of CertVault but also provided an unparalleled user experience. The design effectively communicated the platform's core functionalities, from the blockchain-backed security to the instant access of certificates. Users could now easily navigate through the platform, understanding key features at a glance, from certificate expiration to carrier and insured names.",
                        "The feedback was overwhelmingly positive at the Global InsurTech Summit 2020, with many praising the intuitive design and the seamless user experience. CertVault, with its revamped UI, was now poised to redefine the way insurance certificates were accessed and delivered, all thanks to a design that was as innovative as the platform itself.",
                        "Moreover, the platform's design instilled a sense of trust and reliability. The blockchain feature was not just a tech add-on; it was a promise of security and transparency. Users could be confident that the certificates they accessed were authentic and unaltered.",
                        "The success of CertVault, with its 1.7M certificates and a growing base of 75,000 registered companies, is a testament to the power of effective UX planning. It's not just about aesthetics; it's about understanding user needs, anticipating challenges, and designing solutions that deliver value at every touchpoint.",
                    ]}
                />
                <ParallaxImage imgSrc="/certvault/certvault-casestudy-image-12.webp" alt="certvault casestudy image 12" cursorColor="#F50D37" cursorText="Certvault" />
                <Testimonial
                    cImg="certvault/client-image.webp"
                    text="Enigma Digital's expertise in UX planning and UI design has been a game-changer for CertVault. Their deep understanding of our audience's needs and their meticulous approach to design have transformed our platform. The numbers speak for themselves, but beyond the numbers, it's the feedback from our users that truly underscores the value Enigma brought to the table. Our platform is now more than just a certificate repository; it's a testament to the power of user-centric design. Kudos to the Enigma team for their exceptional work!"
                    cName="Tony Li"
                    cTitle="CTO, Patracorp"
                />
                <ProjectSlider currentProject="certvault" />
            </Layout>
            <PageLoader loaderText="Certvault Case Study"/>
        </>
    )
}

const ImageGrid1 = [
    {
        src: "certvault/certvault-casestudy-image-3.webp",
        cursorColor: "#F50D37",
        cursorText: "Certvault",
    },
    {
        src: "certvault/certvault-casestudy-image-4.webp",
        cursorColor: "#F50D37",
        cursorText: "Certvault",
    },
    {
        src: "certvault/certvault-casestudy-image-5.webp",
        cursorColor: "#F50D37",
        cursorText: "Certvault",
    },
    {
        src: "certvault/certvault-casestudy-image-6.webp",
        cursorColor: "#F50D37",
        cursorText: "Certvault",
    }
]

const ImageGrid2 = [
    {
        src: "certvault/certvault-casestudy-image-7.webp",
        cursorColor: "#F50D37",
        cursorText: "Certvault",
    },
    {
        src: "certvault/certvault-casestudy-image-8.webp",
        cursorColor: "#F50D37",
        cursorText: "Certvault",
    },
    {
        src: "certvault/certvault-casestudy-image-9.webp",
        cursorColor: "#F50D37",
        cursorText: "Certvault",
    },
    {
        src: "certvault/certvault-casestudy-image-10.webp",
        cursorColor: "#F50D37",
        cursorText: "Certvault",
    }
]

const color5 = {
    background: "linear-gradient(45deg, #eb1034, #1b3e59)"
}