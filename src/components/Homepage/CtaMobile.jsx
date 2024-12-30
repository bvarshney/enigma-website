import Link from "next/link";
import LazyVideo from "../LazyVideo";
import styles from "@/styles/cta.module.css";

const CtaMobile = () => {

    return (
        <>
            <div className="w-[90%] mx-auto">
                <div className="py-[25%] text-center fadeup">
                    <p className="font-medium text-[5.5vw] leading-[1.5] mb-[3vw] text-center">
                        Empowered by Neuromarketing Principles, our services open endless opportunities for each brand we partner with. Let&apos;s amplify your potential! 🚀</p>
                    <Link href="/get-in-touch" className={`${styles.enCta} text-[6vw] font-heading font-medium`}>
                        <span className={`relative ${styles.ctaSpan}`}>Say, Hello!</span>
                        <span className={`${styles.ctaEmoji} ml-2 inline-block`}>👋</span>
                    </Link>
                </div>
                <div className="rounded-3xl overflow-hidden fadeup h-[50vw]">
                    <LazyVideo
                        loop
                        controls={false}
                        muted
                        playsInline
                        autoPlay
                        poster="/assets/videos/reel-poster.webp"
                        videoSrc="/assets/videos/hero.mp4"
                        type="video/mp4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default CtaMobile;