import React from 'react'

const Client = () => {
    return (
        <section className='w-full h-full'>
            <div className="w-[80%] h-full mx-auto py-[10%] tablet:w-[85%] tablet:py-[15%] mobile:py-[20%]">
                <div className='flex justify-between flex-col items-start gap-[5vw]'>
                    <h2 className='text-black2 text-[5vw] font-heading font-medium tablet:text-[7vw] mobile:text-[10vw] title-anim'>
                        <span className='stroke'>clients{" "}</span>love us.
                    </h2>
                    <div className='w-[60%] ml-auto tablet:w-full text-justify'>
                        <p className='text-[2vw] leading-[1.5] font-medium para-anim tablet:text-[4vw] mobile:text-[5vw]'>
                            It&apos;s not just the eminence & superior quality of our work. It&apos;s our attitude, our approach, our meticulous attention to detail, our ability to understand their business & their goals, and most of all, it&apos;s the way we treat our clients –They walk in as clients and stay as friends! That&apos;s why we say, we don&apos;t work for clients, we work with our friends.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client;