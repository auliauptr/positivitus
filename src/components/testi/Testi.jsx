import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Headings from '../headings/Headings';
import data from '../../data/testimonials';
import './testi.scss';

const Testi = () => {
    const slidesClone = [...data, ...data, ...data];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [widthSlide, setWidthSlide] = useState(650);

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(data.length - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setWidthSlide(288 + 50);
            } else if (window.innerWidth <= 850) {
                setWidthSlide(600 + 50);
            } else {
                setWidthSlide(600 + 50);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const translateX = -currentIndex * widthSlide;

    return (
        <div className='testi'>
            <Headings
                main='Testimonials'
                sub='Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'
                widthSub={473}
            />

            <div className='testi__container'>
                <div className='testi__cards'>
                    {slidesClone.map((item, index) => (
                        <div
                            className={`testi__block`}
                            key={index}
                            style={{
                                transform: `translateX(${translateX}px)`,
                            }}
                        >
                            <div className='testi__slider'>
                                <p>"{item.text}"</p>
                            </div>
                            <div className='test__name'>
                                <h4>{item.name}</h4>
                                <p>{item.job}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='testi__slider-nav'>
                    <div className='nav__arrow left' onClick={handlePrev}>
                        <FaArrowLeft />
                    </div>
                    <div className='nav__indicators'>
                        {data.map((_, index) => (
                            <svg
                                key={index}
                                width='14'
                                height='14'
                                viewBox='0 0 14 14'
                                style={{
                                    fill: `${
                                        index === currentIndex
                                            ? 'var(--green-color)'
                                            : 'white'
                                    }`,
                                }}
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z' />
                            </svg>
                        ))}
                    </div>
                    <div className='nav__arrow right' onClick={handleNext}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testi;
