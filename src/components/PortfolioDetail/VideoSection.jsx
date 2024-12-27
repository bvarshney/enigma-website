import LazyVideo from "../LazyVideo";

const VideoSection = ({ title, poster, videoSrc }) => {
    return (
        <section id="video-section">
            <div className="w-[90%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw]">
                <h2 className="font-heading font-medium text-black2 text-[4vw] capitalize leading-[1.2] w-1/2 mb-[2.5vw] tablet:text-[5vw] tablet:w-3/5 tablet:mb-[4vw] mobile:text-[7vw] mobile:w-[85%]">{title}</h2>
                <div className="w-full h-[90vh] tablet:h-[50vw]">
                    <LazyVideo
                        autoPlay
                        playsinline
                        loop
                        muted
                        poster={`/assets/portfolio/detail/${poster}`}
                        videoSrc={`/assets/portfolio/detail/${videoSrc}`}
                    />
                </div>
            </div>
        </section>
    )
}

export default VideoSection;