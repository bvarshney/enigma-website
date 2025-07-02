"use client"
import { fadeUp } from '@/lib/gsapAnimations';
import gsap from 'gsap';
import { LinkedinShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import Image from 'next/image';
import { useEffect } from 'react';

const BlogInfo = ({ shareLink, formattedDate, author }) => {

    // Hero Section Animation
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(".blog-title-anim", {
                rotationX: -80,
                opacity: 0,
                translateY: 300,
                transformPerspective: "1000",
                transformOrigin: "top center",
            }, {
                delay: 3,
                duration: 1.3,
                rotationX: 0,
                opacity: 1,
                translateY: 0,
                stagger: 0.2,
            })
                .from(".left-section-blog", {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    delay: -0.9,
                })
                .from('.right-section-blog ', {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    delay: -0.9,
                })
        });
        return () => ctx.revert();
    }, []);

    fadeUp();

    return (
        <>
            <div className="w-[30%] flex h-fit flex-col gap-[0.7vw] mt-[4vw] sticky top-[10%] left-section-blog font-medium font-heading uppercase tablet:space-y-2 tablet:static tablet:w-full">
                <p className="uppercase text-[1.25vw] text-gray1 font-heading font-medium tablet:text-lg">
                    Author
                </p>
                <div className="flex flex-col gap-2 tablet:mb-4">
                    {author?.map((a, index) => (
                        <div key={index} className="flex gap-[0.5vw] items-center">
                            <Image
                                src={a.image?.asset?.url || "/assets/default-avatar.jpg"}
                                alt={a.name}
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                            <p className="text-[1.3vw] font-medium uppercase font-heading tablet:text-2xl mobile:text-xl">
                                {a.name}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="uppercase text-[1.25vw] text-gray1 font-heading font-medium mt-[1vw] tablet:text-lg">
                    Posted On
                </p>
                <p className="text-[1.3vw] font-medium uppercase font-heading tablet:text-2xl mobile:text-xl tablet:mb-4">
                    {formattedDate}
                </p>

                <p className="uppercase text-[1.25vw] text-gray1 font-heading font-medium mt-[1vw] tablet:text-lg">
                    Share Article
                </p>
                {/* Share Buttons */}
                <div className="flex items-center justify-start gap-6">
                    <LinkedinShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9 dark:invert' src="/assets/icons/linkedin.webp" alt="LinkedIn Icon" title='LinkedIn Icon' width={40} height={40} />
                    </LinkedinShareButton>
                    <FacebookShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9 dark:invert' src="/assets/icons/facebook.webp" alt="Facebook Icon" title='Facebook Icon' width={40} height={40} />
                    </FacebookShareButton>
                    <TwitterShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9 dark:invert' src="/assets/icons/twitter.webp" alt="Twitter Icon" title='Twitter Icon' width={40} height={40} />
                    </TwitterShareButton>
                    <WhatsappShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9 dark:invert' src="/assets/icons/whatsapp.webp" alt="WhatsApp Icon" title='WhatsApp Icon' width={40} height={40} />
                    </WhatsappShareButton>
                </div>
            </div>

        </>
    );
};

export default BlogInfo;