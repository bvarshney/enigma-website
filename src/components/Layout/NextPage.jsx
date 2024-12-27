import Link from "next/link";
import React from "react";

const NextPage = ({ title, link, bgImage }) => {
    return (
        <>
            <section className="h-full w-full">
                <div className="w-4/5 pt-[10%] pb-[15%] mx-auto flex items-center justify-center font-heading tablet:pt-[20%] tablet:pb-[25%]">
                    <div className="w-fit">
                        <p className="mb-[0.5vw] text-[1.2vw] text-black2 tablet:text-[4.2vw]">next up</p>
                        <Link data-cursor-background-image={bgImage} data-cursor-color="#000" data-cursor-size="25vw" href={link} className="en-link-under">
                            <h5 className="text-[7vw] font- medium tracking-wide relative text-black2 tablet:text-[10vw] leading-[1.2]"><span>{title}</span></h5>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NextPage;