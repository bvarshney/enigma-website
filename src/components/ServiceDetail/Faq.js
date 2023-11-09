import React, { useState } from "react";
import Image from "next/image";

export default function Faq({ faqData }) {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="faq">
                <div>
                    <h2 className=" our-service-anim" id="fadeUp">
                        Frequently Asked <span className='stroke'> Questions</span>
                    </h2>
                </div>
                <div className="faqBottomBox">
                    <div className="grid divide-y divide-neutral-200 mx-auto mt-8">
                        {faqData.map((item, index) => (
                            <div id="fadeIn" className="pt-8 desk-sm:py-8" key={index}>
                                <div 
                                    className="flex justify-between items-center font-medium cursor-pointer list-none"
                                    onClick={() => handleToggle(index)}
                                >
                                    <h3>{item.question}</h3>
                                    <Image
                                        priority={false}
                                        height={40}
                                        width={40} 
                                        alt="faq arrow"
                                        src="/assets/landing-page/design/arrow-faq.svg" 
                                        className={openIndex === index ? 'arrowRotate' : 'arrowStatic'}
                                    />
                                </div>
                                <p className={`text-neutral-500 mt-5 ${openIndex === index ? 'contentVisible' : 'contentHidden'} ${index === 2 ? 'thirdItem' : ''}`}>
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