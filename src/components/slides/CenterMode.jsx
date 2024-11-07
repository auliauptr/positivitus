import { useState } from 'react';
import './centerMode.scss';

const slides = ['slide 1', 'slide 2', 'slide 3', 'slide 4', 'slide 5'];

const CenterMode = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlide = slides.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex
        );
    };

    const slideToShow = 3;
    const extendedSlides = [
        ...slides.slice(-slideToShow),
        ...slides,
        ...slides.slice(0, slideToShow),
    ];

    const slideWidth = 100 / slideToShow;
    return (
        <div className='cm__container'>
            <button onClick={prevSlide}>Prev</button>
            <div
                className='cm__wrapper'
                style={{
                    transform: `translateX(-${
                        (currentIndex + slideToShow) * slideWidth
                    }%)`,
                    // width: `${extendedSlides.length * slideWidth}`,
                }}
            >
                {slides.map((slide, index) => {
                    return (
                        <div className='slide' key={index}>
                            {slide}
                        </div>
                    );
                })}
            </div>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default CenterMode;
