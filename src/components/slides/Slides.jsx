import React, { useEffect, useRef, useState } from 'react';
import './slides.scss';

const Slides = () => {
    const slidesToShow = 3;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const trackRef = useRef();

    const extendedSlides = [...data, ...data, ...data];

    const nextSlide = () => {
        // if (currentIndex < extendedSlides.length - slidesToShow) {
        //     setCurrentIndex(currentIndex + 1);
        // } else {
        //     setCurrentIndex(0);
        // }
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        // if (currentIndex > 0) {
        //     setCurrentIndex(currentIndex - 1);
        // } else {
        //     setCurrentIndex(extendedSlides.length - slidesToShow);
        // }
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(data.length - 1);
        }
    };

    // useEffect(() => {
    //     const handleTransitionEnd = () => {
    //         if (currentIndex === data.length + slidesToShow) {
    //             trackRef.current.style.transition = 'none';
    //             setCurrentIndex(slidesToShow);
    //         } else if (currentIndex === 0) {
    //             trackRef.current.style.transition = 'none';
    //             setCurrentIndex(data.length);
    //         }
    //     };

    //     const handleTransitionEnd = () => {
    //         if (currentIndex === data.length + slidesToShow) {
    //             setTimeout(() => {
    //                 setIsTransitioning(true);
    //                 setCurrentIndex(slidesToShow);
    //             }, 500);
    //         } else if (currentIndex === 0) {
    //             setTimeout(() => {
    //                 setIsTransitioning(false);
    //                 setCurrentIndex(data.length);
    //             }, 500);
    //         } else {
    //             setIsTransitioning(true);
    //         }
    //     };

    //     const trackNode = trackRef.current;
    //     trackNode.addEventListener('transitionend', handleTransitionEnd);

    //     if (currentIndex >= slidesToShow && currentIndex <= data.length) {
    //         trackNode.style.transition = 'transform 0.5 ease';
    //     }

    //     return () => {
    //         trackNode.removeEventListener('transitionend', handleTransitionEnd);
    //     };
    // }, [currentIndex, data.length, slidesToShow]);

    return (
        <div className='slider-container'>
            <div className='slider__wrapper'>
                <div
                    className='slider__track'
                    ref={trackRef}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        // transition: isTransitioning
                        //     ? 'transform 0.5s ease'
                        //     : 'none',
                    }}
                >
                    {data.map((slide, index) => (
                        <div key={index} className='slide'>
                            {slide.content}
                        </div>
                    ))}
                </div>
            </div>
            <div className='slide__btn'>
                <button onClick={prevSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
};

const data = [
    {
        id: 1,
        content: 'slide 1',
    },
    {
        id: 2,
        content: 'slide 2',
    },
    {
        id: 3,
        content: 'slide 3',
    },
    {
        id: 4,
        content: 'slide 4',
    },
    {
        id: 5,
        content: 'slide 5',
    },
];

export default Slides;
