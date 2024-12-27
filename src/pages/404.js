/* eslint-disable @next/next/no-html-link-for-pages */
import styles from "@/styles/404.module.css";
import MetaData from "@/components/MetaData";
import { Cursor } from "@/components/Cursor";

export default function NotFound() {

    const metadata = {
        title: '404 | Page Not Found',
        description: '404 Page not found please go back to home. This is Enigma Digital.',
        img: 'index.png',
        slug: '404',
    }

    return (
        <>
            <MetaData metadata={metadata} />
            <Cursor />
            <section>
                <div className={styles.container}>
                    <div className={styles.gifBox}>
                        <video
                            loop
                            muted
                            autoPlay
                            src="/assets/404/what.mp4"
                            width={300}
                            height={250}
                        />
                    </div>
                    <div className={styles.box}>
                        <h1 className={styles.fourZeroFour}>404</h1>
                        <h2 className={styles.paraText}>
                            The page you are looking for doesn&apos;t exist or has been moved. Please go back to the homepage.
                        </h2>
                        <div className='mt-10 fadeup' id="anim">
                            <a href="/" className="group inline-flex items-center justify-center overflow-hidden rounded-full leading-[1] font-medium text-[1.6vw] tablet:text-[4vw] mobile:text-[6vw] px-10 py-4 relative border uppercase">
                                <span className="btn_CTA-ripple block w-full h-full bg-current absolute translate-y-full rounded-tl-[50%] rounded-tr-[50%] group-hover:translate-y-0 group-hover:rounded-[0] duration-500 ease-in-out" />
                                <span className='relative z-10 group-hover:text-white duration-500'>Go Back Home</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
