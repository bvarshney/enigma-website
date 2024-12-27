import { LinkedinShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import Image from 'next/image';

const BlogInfo = ({ author, date, shareLink, avatar }) => {

    return (
        <>
            <div>
                <p className='text-lg text-gray1 mb-2'>Author</p>
                <div className='flex justify-start items-center gap-2'>
                    <Image
                        priority={false}
                        className='w-10 h-10 rounded-full'
                        src={avatar}
                        alt='author-image'
                        title='author-image'
                        width={16}
                        height={16}
                    />
                    <p className="text-xl tablet:text-2xl mobile:text-xl">{author}</p>
                </div>
            </div>

            <div>
                <p className='text-lg text-gray1 mb-2'>Posted on</p>
                <p className="text-xl tablet:text-2xl mobile:text-xl">{date}</p>
            </div>

            <div>
                <p className='text-lg text-gray1 mb-2'>Share Article</p>
                <div className="flex items-center justify-start gap-6">
                    <LinkedinShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9' src="/assets/icons/linkedin.webp" alt="LinkedIn Icon" title='LinkedIn Icon' width={40} height={40}/>
                    </LinkedinShareButton>
                    <FacebookShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9' src="/assets/icons/facebook.webp" alt="Facebook Icon" title='Facebook Icon' width={40} height={40}/>
                    </FacebookShareButton>
                    <TwitterShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9' src="/assets/icons/twitter.webp" alt="Twitter Icon" title='Twitter Icon' width={40} height={40} />
                    </TwitterShareButton>
                    <WhatsappShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9' src="/assets/icons/whatsapp.webp" alt="WhatsApp Icon" title='WhatsApp Icon' width={40} height={40}/>
                    </WhatsappShareButton>
                </div>
            </div>
        </>
    );
};

export default BlogInfo;