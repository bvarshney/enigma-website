import React, { useEffect, useState } from "react";
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);  

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is a SAAS platform?",
            answer: "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality."
        },
        {
            question: "How does billing work?",
            answer: "We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method."
        },
        {
            question: "Can I get a refund for my subscription?",
            answer: "We offers a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis."
        },
        {
            question: "How do I cancel my subscription?",
            answer: "To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing."
        },
        {
            question: "Can I try this platform for free?",
            answer: "We offers a free trial of its  platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged."
        },
        {
            question: "How do I access documentation?",
            answer: "Documentation is available on the company's website and can be accessed by logging in to your account. The documentation provides detailed information on how to use the , as well as code examples and other resources."
        },
    ]

    useEffect(() => {
        const textElements = document.querySelectorAll("#designP");
        textElements.forEach(function (elem, index) {
          const text = new SplitType(elem);
          let textwords = text.words;
          gsap.from(textwords, {
            scrollTrigger: {
              trigger: textwords,
              start: "top 80%",
              markers: false,
            },
            duration: 1,
            opacity: 0,
            yPercent: 100,
            ease: "Power3.out",
            stagger: 0.05,
          });
        });
      }, []);

      useEffect(() => {
        const elementsToFadeIn = document.querySelectorAll("#fadeIn");
        elementsToFadeIn.forEach(function (elem, index) {
          gsap.fromTo(
            elem,
            {
                y: 100,
                opacity: 0,
            },
            {
              scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                markers: false,
                stagger: 0.2,
              },
              duration: 1.5,
              y: 0,
              opacity: 1,
              ease: "Power3.out",
            }
          );
        });
      }, []);

    return (
        <>
            <div className={styles.faq}>
                <div className={styles.faqTopBox}>
                    <h2 id="fadeIn" className={styles.heading1}>
                        FA<span className={styles.reinventTextGradient}>Qs
                        </span> 
                    </h2>
                    <p id="designP" className={styles.para1}>
                        Got questions? We got answers
                    </p>
                </div>
                <div className={styles.faqBottomBox}>
                    <div className="grid divide-y divide-neutral-200 mx-auto mt-8">
                        {faqData.map((item, index) => (
                            <div id="fadeIn" className="pt-8 desk-sm:py-8" key={index}>
                                <div 
                                    className="flex justify-between items-center font-medium cursor-pointer list-none"
                                    onClick={() => handleToggle(index)}
                                >
                                    <span>{item.question}</span>
                                    <Image
                                        priority={false}
                                        height={40}
                                        width={40} 
                                        alt="faq arrow"
                                        src="/assets/landing-page/design/arrow-faq.svg" 
                                        className={openIndex === index ? styles.arrowRotate : styles.arrowStatic}
                                    />
                                </div>
                                <p className={`text-neutral-400 mt-5 ${openIndex === index ? styles.contentVisible : styles.contentHidden} ${index === 2 ? styles.thirdItem : ''}`}>
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>              
            </div>
        </>
    );
};