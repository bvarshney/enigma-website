import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function CareerTestimonial() {
    
    const testimonials = [
        {
            name: 'John Doe',
            text: 'It was a very good experience',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis us arcu.',
            clientImage: 'c1.png'
        },
        {
            name: 'Jared Lato',
            text: 'Lorem ipsum dolor sit amet',
            description: 'It was a very good experience, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis us arcu.',
            clientImage: 'c2.png'
        },
        {
            name: 'John Doe',
            text: 'It was a very good experience',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis us arcu.',
            clientImage: 'c3.png'
        },
        {
            name: 'Jared Lato',
            text: 'Lorem ipsum dolor sit amet',
            description: 'It was a very good experience, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis us arcu.',
            clientImage: 'c2.png'
        },
        {
            name: 'John Doe',
            text: 'It was a very good experience',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis us arcu.',
            clientImage: 'c5.png'
        },
    ];

    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <section className="w-full text-center py-12 md:py-24 my-[15vh] bg-[#F8F8F8] 2xl:h-[80vh] h-auto">
            <div className='w-[90%] md:w-[80%] 2xl:w-[75%] mx-auto'>
                <div className='mb-10'>
                    <h2 className="text-4xl md:text-[7vw] 2xl:text-[3.5vw] font-medium">
                        What People Say<span className="color-primary"> About Us</span>
                    </h2>
                </div>

                <Slider className='mb-10 w-full 2xl:w-[90%] mx-auto c__testimain' {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="testimonial-card"
                            data-cursor-size="100px"
                            data-cursor-text="Drag"
                        >
                            <h4 className="testimonial-text">{testimonial.text}</h4>
                            <p className="testimonial-description">{testimonial.description}</p>
                            <div className='flex flex-col items-center gap-2'>
                                <Image
                                    src={`/assets/careers/${testimonial.clientImage}`} 
                                    alt={testimonial.name} 
                                    width={100} 
                                    height={100}
                                    className="client-image"
                                />
                                <span className="client-name">{testimonial.name}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx>{`
                .testimonial-card {
                    background-color: #ffffff;
                    width: 90% !important;
                    color: #000000;
                    margin: auto;
                    padding: 2rem 3rem;
                    border-radius: 18px;
                    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .testimonial-text {
                    font-size: 1.8rem;
                    font-weight: 500;
                    margin-bottom: 1.5rem;
                }
                .testimonial-description {
                    font-size: 1.4rem;
                    color: #1a1a1a;
                    margin-bottom: 1rem;
                    font-family: 'Ageo';
                }
                .client-image {
                    width: 100px !important;
                    border-radius: 50%;
                    margin-bottom: 1rem;
                }
                .client-name {
                    font-size: 1.2rem;
                    font-weight: 500;
                    color: #000000;
                    font-family: 'Ageo';
                }
                
                @media screen and (max-width: 480px) {
                    
                    .testimonial-card {
                    width: 95% !important;
                    padding: 1rem;
                    border-radius: 18px;
                    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    }
                    .testimonial-text{
                        font-size: 1.4rem;
                    }
                    .testimonial-description {
                    font-size: 1.2rem;
                    color: #1a1a1a;
                    margin-bottom: 1rem;
                    font-family: 'Ageo';
                    }
                }

            `}</style>
        </section>
    );
};
