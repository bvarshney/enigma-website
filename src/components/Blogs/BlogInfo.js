import React from 'react';
import gsap from "gsap";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';
import { useEffect } from 'react';

const BlogInfo = ({ author, date, shareLink }) => {

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
        <p className='b__dt-auth-dt'>Author</p>
        <p className="b__dt-auth-dt-ans">{author}</p>
      </div>

      <div className="b__dt-auth-box" id='anim'>
        <p className='b__dt-auth-dt'>Posted on</p>
        <p className="b__dt-auth-dt-ans">{date}</p>
      </div>

      <div className="b__dt-auth-box" id='anim'>
          <p className='b__dt-auth-dt'>Share Article</p>
        <div className="b__dt-s-icon">
          <LinkedinShareButton url={"https://weareenigma.com/"} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
            <img src="/assets/blogs/blog-detail/social/linkedin.webp" alt="social icon" />
          </LinkedinShareButton>
          <FacebookShareButton url={"https://weareenigma.com/"} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
            <img src="/assets/blogs/blog-detail/social/facebook.webp" alt="social icon" />
          </FacebookShareButton>
          <TwitterShareButton url={"https://weareenigma.com/"} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
            <img src="/assets/blogs/blog-detail/social/twitter.webp" alt="social icon" />
          </TwitterShareButton>
          <WhatsappShareButton url={"https://weareenigma.com/"} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
            <img src="/assets/blogs/blog-detail/social/whatsapp.webp" alt="social icon" />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default BlogInfo;
