import React from 'react';
import gsap from "gsap";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';
import { useEffect } from 'react';

const BlogInfo = ({ author, date, shareLink, avatar }) => {

      useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          "#anim",
          {
            opacity: 0,
            translateY: 200,
          },
          {
            delay: 3.8,
            duration: 1.3,
            opacity: 1,
            stagger: 0.1,
            translateY: 0,
          }
        );
        return () => tl.kill();
      }, []);

  return (
    <>
      <div className="b__dt-auth-box" id='anim'>
        <div>
          <p className='b__dt-auth-dt'>Author</p>

          <div className='flex justify-start items-center gap-2'>
            <img
              className='w-10 h-10 rounded-full'
              src={avatar}
              alt='author-image'
              title='author-image'
            />
            <p className="b__dt-auth-dt-ans">{author}</p>
          </div>
        </div>
      </div>

      <div className="b__dt-auth-box" id='anim'>
        <p className='b__dt-auth-dt'>Posted on</p>
        <p className="b__dt-auth-dt-ans">{date}</p>
      </div>

      <div className="b__dt-auth-box" id='anim'>
        
        <p className='b__dt-auth-dt'>Share Article</p>

        <div className="b__dt-s-icon">
          <LinkedinShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
            <img src="/assets/icons/social/linkedin.webp" alt="LinkedIn Icon" title='LinkedIn Icon'/>
          </LinkedinShareButton>
          <FacebookShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
            <img src="/assets/icons/social/facebook.webp" alt="Facebook Icon" title='Facebook Icon' />
          </FacebookShareButton>
          <TwitterShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
            <img src="/assets/icons/social/twitter.webp" alt="Twitter Icon" title='Twitter Icon' />
          </TwitterShareButton>
          <WhatsappShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
            <img src="/assets/icons/social/whatsapp.webp" alt="WhatsApp Icon" title='WhatsApp Icon' />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default BlogInfo;
